import React, { useEffect, useState } from 'react'

export function MyCounter() {

    let [ count, setCount ] = useState( 0 )
    let [ title, setTitle ] = useState( 'Counter Component' )

    /**
     *  no second Params --> ComponentDidMount ,ComponentDidUpdate
     *  [] == ComponentDidMount 
     *  [stateName] --> ComponentDidMount,ComponentDidUpdate(stateName)
     * 
     */

    useEffect( () => {
        // connect api
        console.log( "Did Mount" )
    }, [] )

    useEffect( () => {
        console.log( '========================' )
        console.log( "Welcome Update " )
    }, [ count ] )

    let increaseHandler = () => {
        setCount( prevState => prevState + 1 )
    }
    let changeTitle = () => {
        setTitle( `New Title` )

    }
    return (
        <div className='container'>
            {console.log( "1-Render" )}
            <div className='alert alert-secondary p-5 m-5'>
                <h1>{title}</h1>
                <p className='lead fs-2 mt-4'>Count : <strong className='text-danger'>{count}</strong> </p>
                <button onClick={increaseHandler} className='btn btn-success mx-2'>Increase</button>
                <button onClick={changeTitle} className='btn btn-danger mx-2'>ChangeTitle</button>
            </div>
        </div>
    )
}
