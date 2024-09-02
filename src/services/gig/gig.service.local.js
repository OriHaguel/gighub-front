import { storageService } from '../async-storage.service'
import { makeId, getRandomIntInclusive, loadFromStorage, saveToStorage, getRandomSentence, categories, makeUserNameLorem, getRandomBoolean, getGigImg } from '../util.service'

import { userService } from '../user'

const STORAGE_KEY = 'gig'
_createGigs()
export const gigService = {
	query,
	getById,
	save,
	remove,
	getFilterFromSearchParams,
}
window.cs = gigService

async function query(filterBy = { txt: '', price: 0 }) {
	var gigs = await storageService.query(STORAGE_KEY)
	const { txt, daysToMake, price, sortField, sortDir, category } = filterBy

	if (txt) {
		// const regex = new RegExp(filterBy.txt, 'i')
		const regex = new RegExp(filterBy.txt.split(' ').join('|'), 'i')
		gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description))

	}
	if (daysToMake) {
		if (daysToMake === 'day') {
			gigs = gigs.filter(gig => gig.daysToMake === 1)
		}
		if (daysToMake === '3days') {
			gigs = gigs.filter(gig => gig.daysToMake <= 3 && gig.daysToMake > 1)
		}
		if (daysToMake === '7days') {
			gigs = gigs.filter(gig => gig.daysToMake <= 7 && gig.daysToMake > 3)
		}
		if (daysToMake === 'anytime') {
			gigs = gigs.filter(gig => gig.daysToMake > 7)
		}
	}

	if (price) {
		if (price === 'low') {
			gigs = gigs.filter(gig => gig.price < 100)
		}
		if (price === 'mid') {
			gigs = gigs.filter(gig => gig.price > 100 && gig.price < 500)
		}
		if (price === 'high') {
			gigs = gigs.filter(gig => gig.price > 500)
		}
	}
	if (sortField === 'title' || sortField === 'owner') {
		gigs.sort((gig1, gig2) => gig1[sortField].localeCompare(gig2[sortField]) * +sortDir)
	}
	if (sortField === 'price' || sortField === 'daystomake') {
		gigs.sort((gig1, gig2) => (gig1[sortField] - gig2[sortField]) * +sortDir)
	}

	if (category && category !== 'ai' && category !== 'consulting') {
		// console.log("🚀 ~ query ~ category:", category.toString())
		// const sen = 'hello there buddy'
		// const yo = ['hererllo', 'hrewrwerewr', 'fgfdgdfgd', 'rewrwerwr', 'buddy']
		// const what = yo.filter(bro => sen.includes(bro))
		gigs = gigs.filter(gig => categories[category].some(word => gig.title.includes(word)))
		// console.log("🚀 ~ query ~ gigs:", gigs)
		// console.log("🚀 ~ categories:", categories[category])
	}
	// gigs = gigs.map(({ _id, title, price, daystomake, owner }) => ({ _id, title, price, daystomake, owner }))
	return gigs
}

function getById(gigId) {
	return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
	// throw new Error('Nope')
	await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
	var savedGig
	if (gig._id) {
		const gigToSave = {
			_id: gig._id,
			price: gig.price,
			daystomake: gig.daystomake,
		}
		savedGig = await storageService.put(STORAGE_KEY, gigToSave)
	} else {
		const gigToSave = {
			title: gig.title,
			price: gig.price,
			daystomake: gig.daystomake,
			// Later, owner is set by the backend
			owner: userService.getLoggedinUser(),
			msgs: [],
		}
		savedGig = await storageService.post(STORAGE_KEY, gigToSave)
	}
	return savedGig
}

function _diffFilter() {
	return {
		title: '',
		price: 0,
		sortField: '',
		sortDir: '',
		txt: '',
		category: '',
	}
}

function getFilterFromSearchParams(searchParams) {
	const defaultFilter = _diffFilter()
	const filterBy = {}
	for (const field in defaultFilter) {
		filterBy[field] = searchParams.get(field) || ''
	}
	return filterBy
}

function _createGig() {
	const gig = { title: '', price: 0 }
	gig.title = getRandomSentence()
	gig.price = getRandomIntInclusive(15, 1000)
	gig._id = makeId('g')
	gig.daysToMake = getRandomIntInclusive(1, 14)
	gig.aboutGig = getAboutGig()
	// temp
	gig.owner = makeUserNameLorem()
	gig.ownerRating = getGitRating(0, 5)
	gig.ownerLevel = getRandomIntInclusive(1, 3)
	gig.ownerOrders = getRandomIntInclusive(1, 30)
	gig.ownerPro = getRandomBoolean()
	gig.ownerImage = getImg()
	// reviews
	gig.reviewName = makeUserNameLorem()
	gig.reviewImage = getImg()
	gig.reviewCountry = getCountry()
	gig.reviewContent = getReviewContent()
	gig.reviewRating = getRandomIntInclusive(0, 5)
	gig.reviewTime = getReviewTime()
	// gig.reviewIsRepeatClient = getRepeatClient()
	gig.reviewIsRepeatClient = true
	gig.reviewSellerResponse = getSellerResponse()

	return gig
}

function _createGigs() {
	let gigs = loadFromStorage(STORAGE_KEY)
	if (!gigs || !gigs.length) {
		gigs = []
		for (var i = 0; i < 20; i++) {
			gigs.push(_createGig())
		}

		// saveToStorage(STORAGE_KEY, getGigImg(gigs))
		const gigsWithImages = getGigImg(gigs);
		saveToStorage(STORAGE_KEY, gigsWithImages);
	}
}
// function _createGigs() {
// 	let gigs = loadFromStorage(STORAGE_KEY)
// 	if (!gigs || !gigs.length) {
// 		gigs = []
// 		for (var i = 0; i < 30; i++) {
// 			gigs.push(_createGig())
// 		}
// 		saveToStorage(STORAGE_KEY, gigs)
// 	}
// }

function getImg() {
	return '../src/assets/img/profile_clean.png'
}

export function getCountry() {
	const countries = ['USA', 'UK', 'Canada', 'Australia', 'France', 'Germany', 'Japan', 'India', 'China', 'Russia', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Poland', 'Greece', 'Romania', 'Portugal', 'Turkey', 'Ireland', 'Denmark', 'Sweden', 'Norway', 'Finland', 'Iceland', 'Luxembourg', 'Malta', 'Cyprus', 'Slovakia', 'Estonia', 'Latvia', 'Lithuania', 'Hungary', 'Slovenia', 'Croatia', 'Bosnia and Herzegovina', 'Serbia', 'Montenegro', 'Kosovo', 'Macedonia']
	const flags = ['🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇫🇷', '🇩🇪', '🇯🇵', '🇮🇳', '🇨🇳', '🇷🇺', '🇮🇹', '🇪🇸', '🇳🇱', '🇧🇪', '🇨🇭', '🇦🇹', '🇵🇱', '🇬🇷', '🇷🇴', '🇵🇹', '🇹🇷', '🇮🇪', '🇩🇰', '🇸🇪', '🇳🇴', '🇫🇮', '🇮🇸', '🇱🇺', '🇲🇹', '🇨🇾', '🇸🇰', '🇪🇪', '🇱🇻', '🇱🇹', '🇭🇺', '🇸🇮', '🇭🇷', '🇧🇦', '🇷🇸', '🇲🇪', '🇽🇰', '🇲🇰']

	const random = getRandomIntInclusive(0, countries.length - 1)
	const country = countries[random]
	const flag = flags[random]

	return { country, flag }
}

function getGitRating(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)

	let randomNumber = Math.random() * (max - min) + min

	return Math.round(randomNumber * 10) / 10
}

function getReviewTime() {
	const today = new Date()
	const randomDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - Math.floor(Math.random() * 365))

	const timeDiff = Math.abs(today - randomDate)
	const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

	if (daysDiff < 7) {
		return `${daysDiff} days`
	} else if (daysDiff < 30) {
		return `${Math.ceil(daysDiff / 7)} weeks`
	} else {
		return `${Math.ceil(daysDiff / 30)} months`
	}
}

function getReviewContent() {
	const sentences = [
		'The quality of the work was exceptional. The client was extremely satisfied with the result.',
		'Outstanding. The client loved it.',
		'The project was completed on time, and the client was very satisfied with the final product.',
		'Excellent service. The client was impressed.',
		'The team was incredibly helpful and met all the client’s requirements. The product was perfect.',
		'The client was impressed with the quality of the work, and the team was exceptionally responsive.',

		// Paragraphs
		'The client was thoroughly impressed with the quality of the work delivered by the team. They appreciated not only the final product but also the professionalism and dedication displayed throughout the project. From start to finish, the team was responsive, attentive to details, and committed to meeting all the client’s expectations. This level of service is rare, and it truly set the team apart in the client’s eyes.',
		'The project was managed with utmost care and precision, which was evident in the final result. The team demonstrated exceptional skills in understanding and translating the client’s vision into a tangible product. The client noted that the communication throughout the project was seamless, making it easy to address any concerns or changes promptly. This smooth collaboration contributed significantly to the success of the project, and the client expressed a high level of satisfaction with the outcome.',
		'From the initial consultation to the final delivery, the entire process was handled with remarkable efficiency. The client felt that their needs were thoroughly understood and met at every stage. The team’s ability to deliver a high-quality product within the agreed timeline was particularly appreciated. Moreover, the client highlighted that the support provided after the project’s completion was just as commendable, ensuring that any post-delivery issues were resolved swiftly and effectively.',

		// Short answers
		'Impressive work. No complaints.',
		'On time. Perfect outcome.',
		'Flow is good.',
	]

	return sentences[getRandomIntInclusive(0, sentences.length - 1)]
}

function getSellerResponse() {
	const willResponse = getRandomBoolean()
	if (!willResponse) return

	const sentences = ["We're thrilled to have you on board! We'll be in touch soon with more details.", "Thank you for choosing us! We'll be in touch with you shortly to discuss your requirements.", "We're excited to have you on board! We'll be in touch soon with more details.", "We're thrilled to have you on board! We'll be in touch soon with more details.", "Thank you for choosing us! We'll be in touch with you shortly to discuss your requirements."]

	return sentences[getRandomIntInclusive(0, sentences.length - 1)]
}

function getAboutGig() {
	const abouts = [
		'This gig offers top-notch services tailored to meet your specific needs. Our team is dedicated to delivering high-quality results that exceed your expectations.',
		'With years of experience in the industry, we bring a wealth of knowledge and expertise to every project. You can trust us to handle your requirements with professionalism.',
		'We prioritize customer satisfaction above all else. Our goal is to ensure that you are completely happy with the final product, and we are committed to making any necessary adjustments.',
		'We understand the importance of deadlines. Our efficient workflow allows us to deliver your project quickly without compromising on quality.',
		'We offer competitive pricing for our services, ensuring that you receive great value for your investment. Quality service doesn’t have to break the bank!',
		'Every project is unique, and we take the time to understand your specific needs. Our tailored solutions are designed to fit your requirements perfectly.',
		'We believe in maintaining open lines of communication throughout the project. You will be updated regularly, and your feedback will always be valued.',
		'In addition to the primary gig offerings, we provide a range of supplementary services to enhance your experience and ensure all your needs are met.',
		'This gig is designed to offer services that are meticulously tailored to align with your unique needs and objectives. We understand that each project comes with its own set of challenges and requirements, and that’s why we take the time to get to know you and your business intimately. Our dedicated team is committed to delivering high-quality results that not only meet but exceed your expectations. From the initial consultation to the final delivery, every step of our process is crafted to ensure that your vision is brought to life with precision and care. Whether you’re looking for a one-time solution or ongoing support, we are here to provide you with the expertise and resources needed to achieve your goals. Our services are designed to be flexible and scalable, allowing us to adapt to your evolving needs over time. We pride ourselves on our ability to deliver results that are not just satisfactory but truly exceptional.',
		'With a deep reservoir of experience accumulated over many years in the industry, we bring a profound level of knowledge and expertise to every project we undertake. Our team consists of seasoned professionals who have honed their skills through countless successful projects across various domains. This wealth of experience allows us to anticipate potential challenges before they arise and implement solutions that are both innovative and effective. You can trust us to handle your requirements with the utmost professionalism and care. We don’t just execute tasks; we offer strategic insights that can help you achieve your long-term objectives. Our industry experience also means we stay ahead of the curve with the latest trends and technologies, ensuring that your project is always at the cutting edge of innovation. We are dedicated to continuous learning and adapting to the evolving landscape, so you can be confident that your project will benefit from the latest best practices and insights.',
		'Customer satisfaction is not just a priority for us—it’s the cornerstone of everything we do. We believe that the success of any project hinges on how well it meets the needs and expectations of our clients. That’s why we go the extra mile to ensure that you are completely satisfied with the final product. Our commitment to excellence means that we are always ready to make any necessary adjustments to achieve your desired outcome. We value your feedback and view it as an essential part of the creative process. By maintaining a close and collaborative relationship with you throughout the project, we are able to refine and perfect every detail, ensuring that the final result is something you can truly be proud of. Our dedication to your satisfaction doesn’t end with the delivery of the project; we are here to support you even after the work is complete, providing any additional assistance you may need to ensure long-term success.',
		'We recognize that time is of the essence in today’s fast-paced world. That’s why we have developed an efficient workflow that allows us to deliver your project quickly without ever compromising on quality. Our team is skilled in managing tight deadlines and complex schedules, ensuring that your project is completed on time and to the highest standard. We understand that delays can have significant implications, which is why we prioritize timely delivery as a key component of our service. From the moment we begin working on your project, we implement a structured process that includes regular progress updates and milestone reviews. This approach not only keeps the project on track but also allows for any necessary adjustments to be made in real time. Our commitment to efficiency is matched by our dedication to quality, ensuring that you receive a final product that is both timely and exceptional in every way.',
		'We believe that high-quality services should be accessible and affordable. That’s why we offer competitive pricing that provides great value for your investment. We understand that budget constraints are a reality for many clients, and we work diligently to ensure that our services deliver the best possible results without breaking the bank. Our pricing model is transparent, with no hidden fees or unexpected costs, so you can plan your project with confidence. We are committed to providing you with a service that balances cost and quality, ensuring that you receive maximum value for every dollar spent. In addition, we offer a range of packages and options that can be tailored to fit your specific budget and needs, allowing you to choose the level of service that best suits your project goals. Our goal is to make sure that you feel that every aspect of our service is worth the investment, from the initial consultation to the final delivery.',
	]
	return abouts[getRandomIntInclusive(0, abouts.length - 1)]
}

// async function addGigMsg(gigId, txt) {
//     // Later, this is all done by the backend
//     const gig = await getById(gigId)

//     const msg = {
//         id: makeId(),
//         by: userService.getLoggedinUser(),
//         txt
//     }
//     gig.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, gig)

//     return msg
// }
