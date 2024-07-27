

export function MovieCard( props ) {
    let { movie } = props
    return (
        <div className="col-sm-6 col-md-3">
            <div className='card'>

                <img className='img-fluid' src={movie.imgSrc} alt="" />
                <div className='card-body'>
                    <p className='lead card-text text-muted fs-1 fw-bold'>{movie.name}</p>
                    <p className='lead'>{movie.desc}</p>
                    <p className='lead'>Rate : <strong className='text-warning'>{movie.rate}</strong></p>
                    <button className='btn btn-dark'>Watch Now</button>
                </div>
            </div>
        </div>

    )
}
