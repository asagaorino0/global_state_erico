import { GET_DATA } from '../actions/index'
import { GET_TODO } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            console.log('atodekasu', action.data)//atodekesu
            const arr = action.data
            const arrByID = arr.filter(function (data) {
                return data.id % 2 !== 0;
            })
            console.log(arrByID)
            return { ...state, user_data: arrByID };
        case GET_TODO:
            console.log(action.data)
            return { ...state, user_todo: action.data }
        default:
            return state

    }
}

export default reducer