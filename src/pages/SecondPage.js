import React, { useEffect, useContext } from 'react'
import { fetchGetTodoData } from '../apis/index'
import { Store } from '../store/index'
import { GET_TODO } from '../actions/index'
import Cardtodo from '../components/Card_todo'

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
    console.log(globalState)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                globalState.user_todo.map((user, id) => {
                    return (
                        <Cardtodo user={user} key={id} />//反則かなぁー
                    )
                })
            }
        </div >
    )
}

export default SecondPage
