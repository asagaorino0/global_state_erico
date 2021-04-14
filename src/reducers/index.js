import { GET_DATA, GET_TODO, GET_CHECK1, GET_CHECK2 } from '../actions/index'

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
        case GET_CHECK1:
            console.log(action.data)
            const arr1 = action.data
            const arr1ByID = arr1.filter(function (data) {
                return data.id % 2 !== 0;
            })
            console.log(arr1ByID)
            return { ...state, user_todo: arr1ByID };
        case GET_CHECK2:
            console.log(action.data)
            const arr2 = action.data
            const arr2ByID = arr2.filter(function (data) {
                return data.id % 2 === 0;
            })
            console.log(arr2ByID)
            return { ...state, user_todo: arr2ByID };
        default:
            return state
    }
}

export default reducer