
import { Button, Card } from 'react-bootstrap'
import '../css/content.css'
import { ProductCard } from './ProductCard'


export function Content() {
    return (
        <section className='p-5'>
            <h2>Our Products</h2>
            <p className='lead p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit error velit veniam, at tempora corrupti soluta. Maiores unde nam non reiciendis incidunt fuga veniam tempore officiis, aspernatur, amet ad dolore?</p>
            <div className="container">
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>
            </div>
        </section>

    )
}