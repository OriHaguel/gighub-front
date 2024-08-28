export function makeId(prefix, length = 6) {
	var txt = `${prefix}-`
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length))
	}

	return txt
}

// export function makeLorem(size = 100) {
//     var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
//     var txt = ''
//     while (size > 0) {
//         size--
//         txt += words[Math.floor(Math.random() * words.length)] + ' '
//     }
//     return txt
// }

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

export function makeLorem(size = 1) {
	const words = [
		'Create Stunning Custom Logo Designs for Your Brand',
		'Design Eye-Catching Social Media Graphics & Banners',
		'Craft Unique Business Card Designs That Stand Out',
		'Professional Website & App UI/UX Design Services',
		'Design Engaging Infographics to Simplify Complex Data',
		'Write SEO-Optimized Blog Posts and Articles',
		'Create Compelling Product Descriptions to Boost Sales',
		'Translate Documents Accurately in Multiple Languages',
		'Edit and Proofread Your Manuscript for Perfection',
		'Craft Engaging Content for Your Website or Social Media',
		'Develop Effective Social Media Marketing Strategies',
		'Run Targeted Google Ads Campaigns to Increase Traffic',
		'Create High-Converting Email Marketing Campaigns',
		'Optimize Your Website for Better SEO Rankings',
		'Design Custom Facebook & Instagram Ads',
		'Produce High-Quality Explainer Videos for Your Business',
		'Create Professional Logo Animations and Intros',
		'Edit and Enhance Your Videos with Advanced Techniques',
		'Design Captivating Motion Graphics for Marketing',
		'Develop Engaging YouTube Video Intros and Outros',
		'Build a Custom WordPress Website Tailored to Your Needs',
		'Develop Mobile Apps for iOS and Android Platforms',
		'Fix Bugs and Improve Performance of Your Website',
		'Create Responsive Web Designs for Any Device',
		'Implement Secure E-Commerce Solutions for Your Online Store',
		'Conduct Comprehensive Market Research for Your Startup',
		'Create Professional Business Plans and Proposals',
		'Offer Expert Financial Consulting and Analysis',
		'Provide Virtual Assistance for Administrative Tasks',
		'Design Custom PowerPoint Presentations That Impress',
		'Offer Personalized Fitness Coaching and Meal Plans',
		'Create Custom Travel Itineraries for Your Next Vacation',
		'Design Unique Home Decor and Personalized Gifts',
		'Provide Expert Career Coaching and Resume Writing',
		'Offer Personalized Meditation and Wellness Plans',
	]

	var txt = ''
	while (size > 0) {
		size--
		txt += words[Math.floor(Math.random() * words.length)]
		if (size >= 1) txt += ' '
	}
	return txt
}

export function makeUserNameLorem() {
	const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Hannah', 'Ian', 'Jasmine']

	const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Martinez', 'Wilson']

	const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
	const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)]

	return `${randomFirstName} ${randomLastName}`
}

export function getPlan() {
	const randomValue = Math.random() // Generates a number between 0 and 1
	return randomValue < 0.8 ? 'basic' : 'premium'
}

export const categories = {
	programming: ['web', 'app', 'software', 'coding', 'algorithms', 'JavaScript', 'Python', 'backend', 'frontend', 'database'],
	graphics: ['logo', 'UI', 'graphic', 'illustration', 'branding', 'typography', 'color', 'layout', 'icons', 'photoshop'],
	digital: ['SEO', 'content', 'social', 'email', 'PPC', 'analytics', 'ads', 'keywords', 'campaign', 'influencers'],
	writing: ['copywriting', 'creative', 'technical', 'translation', 'proofreading', 'editing', 'blogging', 'articles', 'scripts', 'localization'],
	video: ['video', 'motion', '2D', '3D', 'production', 'animation', 'editing', 'storyboard', 'vfx', 'rendering'],
	music: ['music', 'sound', 'voiceover', 'mixing', 'podcasting', 'recording', 'composition', 'audio', 'beats', 'synth'],
	business: ['strategy', 'management', 'entrepreneurship', 'finance', 'consulting', 'startup', 'operations', 'leadership', 'marketing', 'investment'],
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
		`Enhance your storytelling with our ${getRandomWord(categories.video)} and motion graphics.`,
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
