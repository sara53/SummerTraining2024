import React from 'react'

export function Content( props ) {

    console.log( props )
    let { objectData } = props

    let { bgColor, trackName, instName, btnText } = objectData

    return (
        <div className={`${bgColor} p-5`}>
            <div className="container">
                <h1 className='mb-4'>{trackName} Track</h1>
                <p className='lead'><strong className='text-danger'>{instName}</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quaerat velit cum labore quis facere neque assumenda quae eligendi quia at, perferendis dolor saepe corrupti iure voluptate quam. Officia, veritatis?</p>
                {props.children}
            </div>
        </div>
    )
}


