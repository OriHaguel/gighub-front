import { orderService } from "../../services/order"

export const SET_ORDERS = 'SET_ORDERS'
export const SET_ORDER = 'SET_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const ADD_ORDER = 'ADD_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const ADD_ORDER_MSG = 'ADD_ORDER_MSG'
export const SET_FILTER_BY = 'SET_FILTER_BY'
const initialState = {
    orders: [],
    order: null,
    filterBy: orderService.getDefaultFilter()
}



export function orderReducer(state = initialState, action) {
    var newState = state
    var orders
    switch (action.type) {
        case SET_ORDERS:
            newState = { ...state, orders: action.orders }
            break
        case SET_ORDER:
            newState = { ...state, order: action.order }
            break
        case REMOVE_ORDER:
            const lastRemovedOrder = state.orders.find(order => order._id === action.orderId)
            orders = state.orders.filter(order => order._id !== action.orderId)
            newState = { ...state, orders, lastRemovedOrder }
            break
        case ADD_ORDER:
            newState = { ...state, orders: [...state.orders, action.order] }
            break
        case UPDATE_ORDER:
            orders = state.orders.map(order => (order._id === action.order._id) ? action.order : order)
            newState = { ...state, orders }
            break
        case ADD_ORDER_MSG:
            newState = { ...state, order: { ...state.order, msgs: [...state.order.msgs || [], action.msg] } }
            break
        case SET_FILTER_BY:
            return { ...state, filterBy: { ...state.filterBy, ...action.filterBy } }
        default:
    }
    return newState
}

// unitTestReducer()

// function unitTestReducer() {
//     var state = initialState
//     const order1 = { _id: 'b101', vendor: 'Order ' + parseInt(Math.random() * 10), msgs: [] }
//     const order2 = { _id: 'b102', vendor: 'Order ' + parseInt(Math.random() * 10), msgs: [] }

//     state = orderReducer(state, { type: SET_ORDERS, orders: [order1] })
//     console.log('After SET_ORDERS:', state)

//     state = orderReducer(state, { type: ADD_ORDER, order: order2 })
//     console.log('After ADD_ORDER:', state)

//     state = orderReducer(state, { type: UPDATE_ORDER, order: { ...order2, vendor: 'Good' } })
//     console.log('After UPDATE_ORDER:', state)

//     state = orderReducer(state, { type: REMOVE_ORDER, orderId: order2._id })
//     console.log('After REMOVE_ORDER:', state)

//     const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
//     state = orderReducer(state, { type: ADD_ORDER_MSG, orderId: order1._id, msg })
//     console.log('After ADD_ORDER_MSG:', state)

//     state = orderReducer(state, { type: REMOVE_ORDER, orderId: order1._id })
//     console.log('After REMOVE_ORDER:', state)
// }

