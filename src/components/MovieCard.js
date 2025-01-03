import React from 'react'

function MovieCard({movie}) {
  return (
    <div className="col-md-4 mb-4">
        <div className="card h-100 shadow">
            <img
            src={movie.Poster}
            className="card-img-top"
            alt={movie.title}
            style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text text-muted">Year: {movie.Year}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
