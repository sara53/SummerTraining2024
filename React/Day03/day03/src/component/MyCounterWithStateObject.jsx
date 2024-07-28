import React, { useState } from 'react'

export function MyCounter() {


    let [ state, setState ] = useState( {
        count: 0,
        title: 'Counter Title'
    } );

    // let [ count, setCount ] = useState( 0 )
    // let [ title, setTitle ] = useState( 'Counter Component' )

    let increaseHandler = () => {
        setState( {
            ...state,
            count: state.count + 1
        } )
    }
    let changeTitle = () => {
        setState( {
            ...state,
            title: "New Title"
        } )
    }
    return (
        <div className='container'>
            <div className='alert alert-secondary p-5 m-5'>
                <h1>{state.title}</h1>
                <p className='lead fs-2 mt-4'>Count : <strong className='text-danger'>{state.count}</strong> </p>
                <button onClick={increaseHandler} className='btn btn-success mx-2'>Increase</button>
                <button onClick={changeTitle} className='btn btn-danger mx-2'>ChangeTitle</button>
            </div>
        </div>
    )
}
