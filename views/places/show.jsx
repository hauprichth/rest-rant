const React = require('react')
const Def = require('../default')

function show (data) {
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
          </main>
        </Def>
    )
}

module.exports = show
