const gig = {
	_id: 'g101',
	title: 'I will design your logo',
	price: 12.16,
	owner: {
		_id: 'u101',
		fullname: 'Dudu Da',
		imgUrl: 'url',
		level: 'basic/premium',
		rate: 4,
	},
	daysToMake: 3,
	description: 'Make unique logo...',
	avgResponseTime: 1,
	loc: 'Ghana',
	imgUrls: ['/img/img1.jpg'],
	tags: ['Arts And Crafts', 'Logo Design'],
	likedByUsers: ['mini-user'],
	reviews: [
		{
			id: 'madeId',
			txt: 'Did an amazing work',
			rate: 4,
			by: {
				_id: 'u102',
				fullname: 'user2',
				imgUrl: '/img/img2.jpg',
			},
		},
	],
}

const orders = [
	{
		_id: 'o1225',
		buyer: 'mini-user',
		seller: 'mini-user',

		gig: {              // mini-gig
			_id: 'i101',
			name: 'Design Logo',
			imgUrl: '',
			price: 20,
		},
		status: 'pending / approved / rejected',
	},
]

const users = [
	{
		_id: 'u101',
		fullname: 'User 1',
		imgUrl: '/img/img1.jpg',
		username: 'user1',
		password: 'secret',
		level: 'basic/premium',
		isSeller: false,

	},
]

const allTags = ['logo-design', 'wordpress', 'voice-over', 'artisitic', 'proffesional', 'accessible']

// Primary tags are like categories for slicing the data

function isPrimaryTag(tag) {
	return allTags.slice(0, 3).includes(tag)
}

// HomePage
//  list of gigs with link to gig-details

// Gig Details
// <pre>JSON, slowly improve

// UserDetails
//  basic info
//  orderedGigs => orderService.query({userId: 'u101'})
//  ownedGigs => gigService.query({ownerId: 'u103'})

// GigEdit - make it super easy to add basic Gig for development
// Later, improve functionality & styling

// GigList, GigOrder
// Order, confirm Order
// Lastly: GigExplore, Filtering

function loadApp() {
	socketService.on(SOCKET_EVENT_ORDER_ADDED, order => {
		showSuccessMsg(`Another order was just made, check it out ${order.gig._id}`)
	})
}
