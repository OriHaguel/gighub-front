import { storageService } from "./async-storage.service"
const STORAGE_KEY = 'gig'
import GigImage from '../assets/img/gig-image.png'
// console.log("🚀 ~ GigImage:", GigImage)
export function makeId(prefix, length = 10) {
	var txt = `${prefix}-`
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length))
	}

	return txt
}


export function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

export function getRandomBoolean() {
	return Math.random() < 0.5
}

export function randomPastTime() {
	const HOUR = 1000 * 60 * 60
	const DAY = 1000 * 60 * 60 * 24
	const WEEK = 1000 * 60 * 60 * 24 * 7

	const pastTime = getRandomIntInclusive(HOUR, WEEK)
	return Date.now() - pastTime
}

export function debounce(func, timeout = 300) {
	let timer
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, timeout)
	}
}

export function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
	const data = localStorage.getItem(key)
	return data ? JSON.parse(data) : undefined
}



export function makeUserNameLorem() {
	const firstNames = [
		"Alex", "Avery", "Bailey", "Blake", "Cameron", "Casey", "Charlie", "Dakota", "Devon", "Drew",
		"Dylan", "Eden", "Elliott", "Emerson", "Finley", "Frankie", "Harper", "Hayden", "Hunter", "Jamie",
		"Jayden", "Jordan", "Jules", "Kai", "Kelly", "Kendall", "Kennedy", "Lane", "Lee", "Logan",
		"Morgan", "Parker", "Peyton", "Quinn", "Reese", "Riley", "River", "Robin", "Rowan", "Sage",
		"Sawyer", "Skyler", "Spencer", "Stevie", "Sydney", "Taylor", "Tegan", "Toby", "Toni", "Tyler", "Sam"
	]

	const lastNames = [
		"Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis",
		"Garcia", "Rodriguez", "Martinez", "Anderson", "Taylor", "Thomas",
		"Moore", "Jackson", "White", "Harris", "Martin", "Thompson", "Martinez",
		"Clark", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "King",
		"Wright", "Scott"
	]

	const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
	const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)]

	return `${randomFirstName} ${randomLastName}`
}

export function getPlan() {
	const randomValue = Math.random()
	return randomValue < 0.8 ? 'basic' : 'premium'
}

export const categories = {
	programming: ['web', 'app', 'software', 'coding', 'algorithms', 'JavaScript', 'Python', 'backend', 'frontend', 'database'],
	graphics: ['logo', 'UI', 'graphic', 'illustration', 'branding', 'typography', 'color', 'layout', 'icons', 'photoshop'],
	digital: ['SEO', 'growth hacking', 'social', 'email', 'PPC', 'analytics', 'ads', 'keywords', 'campaign', 'influencers'],
	writing: ['copywriting', 'modern', 'technical', 'translation', 'proofreading', 'copyediting', 'blogging', 'articles', 'scripts', 'localization'],
	video: ['video', 'motion', '2D', '3D', 'HD', 'animation', 'Directing', 'storyboard', 'vfx', 'rendering'],
	music: ['music', 'sound', 'voiceover', 'mixing', 'podcasting', 'recording', 'composition', 'audio', 'beats', 'synth'],
	business: ['strategy', 'management', 'entrepreneurship', 'finance', 'consulting', 'startup', 'operations', 'leadership', 'deals', 'investment'],
}


export function getRandomSentence() {
	const sentences = [
		// Programming
		`We specialize in developing scalable ${getRandomWord(categories.programming)} solutions tailored to your needs.`,
		`Our ${getRandomWord(categories.programming)} expertise ensures high-performance applications and systems.`,
		`We offer comprehensive ${getRandomWord(categories.programming)} services to help you stay ahead of the competition.`,
		`From ${getRandomWord(categories.programming)} development to full-stack solutions, we have you covered.`,
		`Transform your digital presence with our ${getRandomWord(categories.programming)} and technology solutions.`,
		`Our team excels in ${getRandomWord(categories.programming)} to deliver robust and innovative solutions.`,
		`We provide end-to-end ${getRandomWord(categories.programming)} services to build your next big project.`,
		`Leverage our ${getRandomWord(categories.programming)} skills to enhance your software capabilities.`,
		`We design and develop ${getRandomWord(categories.programming)} solutions that drive business growth.`,
		`Our ${getRandomWord(categories.programming)} experts work closely with you to bring your vision to life.`,

		// Graphics
		`We craft visually appealing ${getRandomWord(categories.graphics)} that resonate with your audience.`,
		`Our ${getRandomWord(categories.graphics)} design services create a memorable and impactful brand identity.`,
		`Transform your ideas into stunning ${getRandomWord(categories.graphics)} with our expert design team.`,
		`We offer innovative ${getRandomWord(categories.graphics)} solutions to make your brand stand out.`,
		`From ${getRandomWord(categories.graphics)} to ${getRandomWord(categories.graphics)}, we ensure your visuals are top-notch.`,
		`Our ${getRandomWord(categories.graphics)} experts will bring your creative vision to life.`,
		`Enhance your brand’s image with our custom ${getRandomWord(categories.graphics)} services.`,
		`We design ${getRandomWord(categories.graphics)} that effectively communicate your brand’s message.`,
		`Our ${getRandomWord(categories.graphics)} solutions are tailored to fit your unique style and needs.`,
		`Create a lasting impression with our professional ${getRandomWord(categories.graphics)} design.`,

		// Digital
		`Boost your online presence with our ${getRandomWord(categories.digital)} strategies.`,
		`We offer comprehensive ${getRandomWord(categories.digital)} services to drive traffic and engagement.`,
		`Our ${getRandomWord(categories.digital)} expertise ensures your brand reaches the right audience.`,
		`Enhance your marketing efforts with our ${getRandomWord(categories.digital)} solutions.`,
		`We specialize in ${getRandomWord(categories.digital)} to increase your brand’s visibility.`,
		`Our ${getRandomWord(categories.digital)} services are designed to maximize your ROI.`,
		`From ${getRandomWord(categories.digital)} to ${getRandomWord(categories.digital)}, we cover all your marketing needs.`,
		`We create targeted ${getRandomWord(categories.digital)} campaigns to boost your online success.`,
		`Our ${getRandomWord(categories.digital)} strategies help you stay ahead in a competitive market.`,
		`Transform your digital marketing with our expert ${getRandomWord(categories.digital)} services.`,

		// Writing
		`Get high-quality ${getRandomWord(categories.writing)} for all your content needs.`,
		`We provide ${getRandomWord(categories.writing)} services to communicate your message effectively.`,
		`From ${getRandomWord(categories.writing)} to ${getRandomWord(categories.writing)}, we cover all your writing needs.`,
		`Our ${getRandomWord(categories.writing)} experts craft content that engages and informs.`,
		`We offer professional ${getRandomWord(categories.writing)} for a wide range of applications.`,
		`Enhance your content with our ${getRandomWord(categories.writing)} and editing services.`,
		`Our ${getRandomWord(categories.writing)} solutions ensure clarity and precision in your documents.`,
		`We specialize in ${getRandomWord(categories.writing)} to bring your ideas to life.`,
		`Get reliable ${getRandomWord(categories.writing)} services tailored to your needs.`,
		`Our ${getRandomWord(categories.writing)} services are designed to meet high-quality standards.`,

		// Video
		`Enhance your brand with our ${getRandomWord(categories.video)} and animation services.`,
		`We create engaging ${getRandomWord(categories.video)} that tell your story beautifully.`,
		`Our ${getRandomWord(categories.video)} solutions bring your ideas to life with stunning visuals.`,
		`From ${getRandomWord(categories.video)} to ${getRandomWord(categories.video)}, we handle all aspects of video production.`,
		`We offer expert ${getRandomWord(categories.video)} to make your project stand out.`,
		`Transform your concepts into dynamic ${getRandomWord(categories.video)} with our services.`,
		`Our ${getRandomWord(categories.video)} professionals create high-quality content to captivate your audience.`,
		`We provide innovative ${getRandomWord(categories.video)} solutions for all your visual needs.`,
		`Enhance your storytelling with our ${getRandomWord(categories.video)} and motion animation.`,
		`Our ${getRandomWord(categories.video)} services ensure that your message is delivered with impact.`,

		// Music
		`Our ${getRandomWord(categories.music)} services deliver exceptional sound and music experiences.`,
		`From ${getRandomWord(categories.music)} production to editing, we handle all your audio needs.`,
		`We offer professional ${getRandomWord(categories.music)} to make your project sound great.`,
		`Enhance your content with our ${getRandomWord(categories.music)} and sound design expertise.`,
		`We create high-quality ${getRandomWord(categories.music)} for a range of applications.`,
		`Our ${getRandomWord(categories.music)} solutions bring a polished sound to your media.`,
		`Get top-notch ${getRandomWord(categories.music)} services to elevate your project.`,
		`Our ${getRandomWord(categories.music)} experts provide creative solutions to meet your needs.`,
		`We specialize in ${getRandomWord(categories.music)} to deliver clear and impactful audio.`,
		`Transform your audio experience with our professional ${getRandomWord(categories.music)} services.`,

		// Business
		`We provide ${getRandomWord(categories.business)} solutions to help your company thrive.`,
		`Our ${getRandomWord(categories.business)} expertise ensures strategic growth and operational excellence.`,
		`From ${getRandomWord(categories.business)} to ${getRandomWord(categories.business)}, we support your business success.`,
		`We offer comprehensive ${getRandomWord(categories.business)} services to enhance your business operations.`,
		`Our ${getRandomWord(categories.business)} solutions are designed to drive innovation and efficiency.`,
		`Leverage our ${getRandomWord(categories.business)} expertise to achieve your strategic goals.`,
		`We specialize in ${getRandomWord(categories.business)} to streamline your business processes.`,
		`Our ${getRandomWord(categories.business)} services are tailored to meet the unique needs of your business.`,
		`Enhance your company's performance with our ${getRandomWord(categories.business)} strategies.`,
		`We offer expert ${getRandomWord(categories.business)} to support your business growth and development.`,
	]

	const randomIndex = Math.floor(Math.random() * sentences.length)
	return sentences[randomIndex]
}

function getRandomWord(wordList) {
	return wordList[Math.floor(Math.random() * wordList.length)]
}


export function getGigImg(gigs) {

	const imgCategories = {
		//tech
		programming: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/1.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/3.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_1_lnpdet.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_1_xkx2su.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/v1681292390/tech_5_2_ingp2n.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_1_rglah7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_2_ktpg4w.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/prog2_3_r12pmp.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_ieqqi5.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_mxc78m.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_k7abw0.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_sfu5ye.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_est8wa.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_dduzty.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_wsvd6m.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_etcyta.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_mvdoq5.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_bge79q.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_pnwh0l.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_hnlpgx.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_fk2x0b.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/6_ayhnhy.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_q4va92.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_iybtmb.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_r8ghua.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_egvgdt.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_s2htmr.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_kyn0mz.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_1_yh5r1p.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_1_udxnne.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/tech_3_2_qjkelz.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/2_gqapyn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_fjcp1e.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_h4ivae.webp'
			],


		],
		//design
		graphics: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_z9rrab.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_veg6zj.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_cdadns.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_d52ipm.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_dqbi2y.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_dnqzt0.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_kuv9a9.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/6_bzveuq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/7_v4zegm.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/3_bt99v7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_wwlfsy.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_zpzban.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/6_o6apzw.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/0_a5v53p.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/00_ejnxb4.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/000_ytqxle.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_wpgskd.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_jto6cd.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_oqg4j7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_hzy27x.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_in6nn7.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_u0epwq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_hf811f.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_bbxhrz.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_fsivb3.webp'
			]
		],
		//animation
		video: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/00_dxalu8.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/0_xqvxje.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/11_ckswgc.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/3_s1rtwn.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_bqz2bq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_d6ahg6.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample-2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/samples/balloons.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample-5.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/cld-sample.webp',
				// 'https://res.cloudinary.com/dofblayxi/image/upload/samples/dessert-on-a-plate.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/samples/sea-turtle.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/samples/animals/kitten-playing.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/samples/elephants.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/samples/animals/reindeer.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_mrrzig.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_bgvprq.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_ej64fz.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_cpm6zv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_iacxim.webp',
				'https://res.cloudinary.com/dofblayxi/video/upload/2_gjl1lu.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_rbsp1x.webp'
			]
		],
		//translation
		writing: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/2_ymahhr.webp',
				'https://res.cloudinary.com/dofblayxi/video/upload/1_hluacb.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_jpdk6y.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_h8g4ck.webp'

			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_zmsai2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_xcvsns.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_lnpodr.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_qpzm75.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_llghjy.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_helgmv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_ll85yj.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_cj48yf.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_ozcalj.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_cp9rgx.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_ipqtx1.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_lnj06l.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_efflfv.webp'
			]
		],
		//marketing
		digital: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_mxphj2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_fd72b6.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_ucvzib.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_w4opjt.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/5_a0dqvd.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/2_x8amij.webp',
				'https://res.cloudinary.com/dofblayxi/video/upload/1_hehnqd.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_th9jl2.webp'
			],
			['https://res.cloudinary.com/dofblayxi/image/upload/1_tdcu3d.webp'],
			['https://res.cloudinary.com/dofblayxi/image/upload/1_seypam.webp'],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_kcupoa.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_l8kglv.webp'
			],
		],
		//audio
		music: [
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_qxm2qw.webp',
				// 'https://res.cloudinary.com/dofblayxi/image/upload/2_soydkl.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_okyazc.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_nd8ifz.webp'
			],
			['https://res.cloudinary.com/dofblayxi/image/upload/1_dxzmay.webp'],
			['https://res.cloudinary.com/dofblayxi/image/upload/1_aqw4bd.webp'],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/4_ucw0wc.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/7_ryyvnm.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/m_1_bnx2e7.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/m_2_wyluxz.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/m_v8pfvv.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_td6qnb.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_xvzkqj.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_neju3l.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_uzufey.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_udhyj6.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/4_rlawua.webp'
			]
		],

		business: [
			[
				// 'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_wmnm7v.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_yy3pv2.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/get-your-ein-number-from-irs-for-us-and-non-us-citizens_1_jduj12.webp'],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_bcpqls.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_fgvas5.webp'
			],
			['https://res.cloudinary.com/dofblayxi/image/upload/1_r5lqse.webp'],
			[
				'https://res.cloudinary.com/dofblayxi/image/upload/1_n5fw3d.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_rtzhfe.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_c6obj1.webp'
			],
			[
				'https://res.cloudinary.com/dofblayxi/video/upload/1_kjyj7d.mp4',
				'https://res.cloudinary.com/dofblayxi/image/upload/2_iao93d.webp',
				'https://res.cloudinary.com/dofblayxi/image/upload/3_kssgez.webp'
			]
		]
	}

	const categoryKeys = Object.keys(categories);
	const newGigs = []
	categoryKeys.map((category) => {
		const gigImg = gigs.filter(gig => categories[category].some(word => gig.title.includes(word)))
			.map((gig, index) => (
				{ ...gig, img: imgCategories[category][index] }
			))
		newGigs.push(...gigImg)
	})
	return newGigs
}


