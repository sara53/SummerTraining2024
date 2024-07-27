import React, { useState } from 'react'

export function Counter() {

    const [ count, setCount ] = useState( 0 )
    const [ compTitle, setComponentTitle ] = useState( 'Counter Component' )


    let increaseHandler = () => {
        setCount( count + 1 )
    }
    let decreaseHandler = () => {
        setCount( count - 1 )
    }
    let changeTitle = () => {
        setComponentTitle( 'New Comp Title' )
    }


    return (

        <div className='alert alert-dark p-5 m-5'>
            {console.log( "1-Render " )}
            <div className="container">
                <h1>{compTitle}</h1>
                <p className='lead fs-2 mt-4'>count : <strong className='text-danger'>{count}</strong></p>
                {count <= 0 ? <p className='text-danger'>Count Value is Zero</p> : <h1>Welcome</h1>}
                {/* {count == 0 && <p className='text-danger'>Count Value is Zero</p>} */}
                <button onClick={increaseHandler} className='btn btn-success mx-2'>Increase</button>
                <button onClick={decreaseHandler} className='btn btn-dark mx-2'>Decrease</button>
                <button onClick={changeTitle} className='btn btn-danger mx-2'>Change Title</button>
            </div>
        </div>
    )
}

