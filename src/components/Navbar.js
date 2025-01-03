import React from 'react'

function Navbar({searchTerm, setSearchTerm, handleSubmit}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Imdb </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/movies">Movies</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/series">Series</a>
                </li>  
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2" 
                type="search" 
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="Search" 
                value={searchTerm}/>
                <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
