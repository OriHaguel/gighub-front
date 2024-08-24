
import { storageService } from '../async-storage.service'
import { makeId, makeLorem, getRandomIntInclusive, loadFromStorage, saveToStorage } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'gig'
_createGigs()
export const gigService = {
    query,
    getById,
    save,
    remove,


}
window.cs = gigService


async function query(filterBy = { txt: '', price: 0 }) {
    var gigs = await storageService.query(STORAGE_KEY)
    const { txt, daysToMake, price, sortField, sortDir, category } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description))
    }
    if (daysToMake) {
        gigs = gigs.filter(gig => gig.daysToMake >= daysToMake)
    }
    if (price) {
        gigs = gigs.filter(gig => gig.price >= price)
    }
    if (sortField === 'title' || sortField === 'owner') {
        gigs.sort((gig1, gig2) =>
            gig1[sortField].localeCompare(gig2[sortField]) * +sortDir)
    }
    if (sortField === 'price' || sortField === 'daystomake') {
        gigs.sort((gig1, gig2) =>
            (gig1[sortField] - gig2[sortField]) * +sortDir)
    }

    if (category) {

    }
    gigs = gigs.map(({ _id, title, price, daystomake, owner }) => ({ _id, title, price, daystomake, owner }))
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
            msgs: []
        }
        savedGig = await storageService.post(STORAGE_KEY, gigToSave)
    }
    return savedGig
}

function _createGig() {
    const gig = { title: '', price: 0 }
    gig.title = makeLorem()
    gig.price = getRandomIntInclusive(15, 1000)
    gig._id = makeId('g')
    gig.daysToMake = getRandomIntInclusive(1, 14)
    return gig
}

function _createGigs() {
    let gigs = loadFromStorage(STORAGE_KEY)
    if (!gigs || !gigs.length) {
        gigs = []
        for (var i = 0; i < 20; i++) {
            gigs.push(_createGig())
        }
        saveToStorage(STORAGE_KEY, gigs)
    }
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

