import React, { Component } from 'react'

export class Counter extends Component {


    // useState -- useEffect
    constructor() {
        super();
        console.log( "1- Ctor" )
    }


    componentDidMount() {
        console.log( "DidMount : Only After Ctor" )
    }

    componentDidUpdate() {
        console.log( "After update" )
        // logic after any State
    }

    componentWillUnmount() {
        //
    }
    state = {
        count: 0,
        compTitle: "Counter Component",
        testValue: `Welcome 0`
    }

    increaseHandler = () => {

        // rerender -- 
        this.setState( {
            count: this.state.count + 1,


        } )
    }


    decreaseHandler = () => {
        this.setState( {
            count: this.state.count - 1,
        } )
    }
    changeTitle = () => {
        this.setState( {
            compTitle: 'New Component'
        } )
    }


    render() {
        console.log( this.props )
        return (
            <div className='container'>
                <div className="alert alert-dark p-5 m-5 rounded">
                    <h1>{this.state.compTitle}</h1>
                    <h1>{this.state.testValue}</h1>
                    <p className='lead fs-2 mt-4'>Count : {this.state.count}</p>
                    <button onClick={this.increaseHandler} className='mx-2 btn btn-success'>Increasse</button>
                    <button onClick={this.decreaseHandler} className='mx-2 btn btn-dark'>Decreasse</button>
                    <button onClick={this.changeTitle} className='mx-1 btn btn-danger'>{this.props.btnText}</button>
                </div>

            </div>
        )
    }
}
