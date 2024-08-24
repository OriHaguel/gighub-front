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
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
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
    const firstNames = [
        "Alice", "Bob", "Charlie", "Diana", "Edward",
        "Fiona", "George", "Hannah", "Ian", "Jasmine"
    ];

    const lastNames = [
        "Smith", "Johnson", "Williams", "Brown", "Jones",
        "Garcia", "Miller", "Davis", "Martinez", "Wilson"
    ];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
}

export function getPlan() {
    const randomValue = Math.random(); // Generates a number between 0 and 1
    return randomValue < 0.8 ? 'basic' : 'premium';
}