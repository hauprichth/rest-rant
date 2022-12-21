const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
                <h2 className='comrat'>Rating</h2>
                <p>No ratings yet!</p>
            </div>
            <div>
                <h2 className='comrat'>Comments</h2>
                <p>No comments yet!</p>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning" >
              <i className="bi bi-eraser">Edit</i>
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
              <i className= "bi bi-radioactive"> Delete</i>
              </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
