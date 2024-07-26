import { Component } from 'react'


export class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className='bg-light p-3 text-center'>
                <h1>Welcome First App</h1>
            </header>
        )
    }
}