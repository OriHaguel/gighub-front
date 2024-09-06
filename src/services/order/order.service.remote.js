import { httpService } from '../http.service'

export const orderService = {
    query,
    getById,
    save,
    remove,
    // addOrderMsg
}

async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(`gig`, filterBy)
}

function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}
async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await httpService.put(`gig/${gig._id}`, gig)
    } else {
        savedGig = await httpService.post('gig', gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, { txt })
    return savedMsg
}

function getFilterFromSearchParams(searchParams) {
    const defaultFilter = _diffFilter()
    const filterBy = {}
    for (const field in defaultFilter) {
        filterBy[field] = searchParams.get(field) || ''
    }
    return filterBy
}

function _diffFilter() {
    return {
        title: '',
        price: '',
        sortField: '',
        sortDir: '',
        txt: '',
        category: '',
        daysToMake: '',
    }
}