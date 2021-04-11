import { GET_DATA } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            console.log(action.data)
            const arr = action.data
            const arrByID = arr.filter(function (item) {
                return item.id % 2 !== 0;
            })
            console.log(arrByID)
            return { ...state, user_data: arrByID }
        default:
            return state
    }
}

export default reducer