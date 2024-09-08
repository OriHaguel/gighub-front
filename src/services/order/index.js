const { DEV, VITE_LOCAL } = import.meta.env


import { getRandomIntInclusive, makeId } from '../util.service'

import { orderService as local } from './order.service.local'
import { orderService as remote } from './order.service.remote'

function getEmptyOrder() {
    return {
        // vendor: makeId(),
        // speed: getRandomIntInclusive(80, 240),
        msgs: [],
    }
}

function getDefaultFilter() {
    return {
        txt: '',
        price: 0,
        sortField: '',
        sortDir: '',
        category: ''
    }
}

const service = VITE_LOCAL === 'true' ? local : remote
export const orderService = { getEmptyOrder, getDefaultFilter, ...service }


// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.orderService = orderService
