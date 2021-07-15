import React from 'react'

function List({ wines = [] }) {
    return (
        <>
        {wines.length === 0 ? (
            <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : 
        (  wines.map((wine, i) => (
          <div className="card rounded" key={i}>
  {/* <img src={prop.image} className="card-img-top" alt=""/> */}
  <div className="card-body">
    <h5 className="card-title">{wine.name}</h5>
    <h6 className='card-subtitle'>{wine.winery}</h6>
    <p class="card-text">{wine.type}</p>
    <p class="card-text"><small class="text-muted">$ {wine.price}</small></p>
  </div> </div>
          ))
        )}
    </>)
}

export default List;
