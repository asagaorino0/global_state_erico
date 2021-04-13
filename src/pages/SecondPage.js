import React, { useEffect, useContext } from 'react'
import { fetchGetTodoData } from '../apis/index'
import { Store } from '../store/index'
import { GET_TODO } from '../actions/index'
import Cardtodo from '../components/Card_todo'
import { GET_CHECK1, GET_CHECK2 } from '../actions/index'
import { fetchGetTodoCheck } from '../apis/index'

function SecondPage() {
    const { globalState, setGlobalState } =
        useContext(Store)
    useEffect(() => {
        fetchGetTodoData().then(res => {
            setGlobalState({
                type: GET_TODO,
                data: res.data
            })
        })
    }, [])

    const TodoCheck1 = () => {
        // const { globalState, setGlobalState } = useContext(Store)
        // useEffect(() => {
        fetchGetTodoCheck().then(res => {
            setGlobalState({
                type: GET_CHECK1,
                data: res.data
            })
        })
        // } , [])
        console.log(globalState)
    }
    const TodoCheck2 = () => {
        fetchGetTodoCheck().then(res => {
            setGlobalState({
                type: GET_CHECK2,
                data: res.data
            })
        })
        console.log(globalState)
    }
    const TodoCheck0 = () => {
        fetchGetTodoCheck().then(res => {
            setGlobalState({
                type: GET_TODO,
                data: res.data
            })
        })
        console.log(globalState)
    }
    console.log(globalState)

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <button onClick={TodoCheck1} >
                    奇数だけ表示!!!
                </button>
            </div>
            <div>
                <button onClick={TodoCheck2}>
                    偶数だけ表示!!!
                </button>
            </div>
            <div>
                <button onClick={TodoCheck0}>
                    全部表示!!!!!!!
                </button>
            </div>
            {
                globalState.user_todo.map((user, id) => {
                    return (
                        <Cardtodo user={user} key={id} />
                    )
                })
            }
        </div >
    )
}

export default SecondPage