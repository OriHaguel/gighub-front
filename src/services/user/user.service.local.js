import { storageService } from '../async-storage.service'
import { getPlan, loadFromStorage, makeUserNameLorem, saveToStorage, makeId } from '../util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    saveLoggedinUser,
    getEmptyCredentials
}
_createUsers()
async function getUsers() {
    const users = await storageService.query('user')
    return users.map(user => {
        delete user.password
        return user
    })
}

async function getById(userId) {
    return await storageService.get('user', userId)
}

function remove(userId) {
    return storageService.remove('user', userId)
}

async function update({ _id, score }) {
    const user = await storageService.get('user', _id)
    user.score = score
    await storageService.put('user', user)

    // When admin updates other user's details, do not update loggedinUser
    const loggedinUser = getLoggedinUser()
    if (loggedinUser._id === user._id) saveLoggedinUser(user)

    return user
}

async function login(userCred) {

    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // users.find(user => console.log("🚀 ~ login ~ user.username:", userCred.username))


    if (user) return saveLoggedinUser(user)
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'

    const user = await storageService.post('user', userCred)
    return saveLoggedinUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function saveLoggedinUser(user) {
    user = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,

    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

// To quickly create an admin user, uncomment the next line
// _createAdmin()
// async function _createAdmin() {
//     const user = {
//         username: 'admin',
//         password: 'admin',
//         fullname: 'Mustafa Adminsky',
//         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
//         score: 10000,
//     }

//     const newUser = await storageService.post('user', userCred)
//     console.log('newUser: ', newUser)
// }
function getEmptyCredentials() {
    return {
        username: '',
        password: '',
        fullname: ''
    }
}



function _createUser() {
    const user = {
        _id: makeId('u'),
        username: makeUserNameLorem(),
        password: 'pass',
        fullname: makeUserNameLorem(),
        imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        level: getPlan()
    }


    return user
}

function _createUsers() {
    let users = loadFromStorage('user')
    if (!users || !users.length) {
        users = []
        console.log("🚀 ~ _createUsers ~ users:", users)
        for (var i = 0; i < 5; i++) {
            users.push(_createUser())
        }
        saveToStorage('user', users)
    }
}