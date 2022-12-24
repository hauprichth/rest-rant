const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = (
    <h3 className="nactive">
        No comments yet!
    </h3>
  )
    
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div>
          <h1>{data.place.name}</h1>
        </div>
        <div className="col-md-8">
          <img src={data.place.pic} className="item-place-img placesImg" />
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
        </div>
        <div className="col-md-4">
        <div>
          <h2 className="comrat">Rating</h2>
          <p>No ratings yet!</p>
        </div>
        <div className="">
          <h2>Description</h2>
          <h3> {data.place.showEstablished()}</h3>
          <h4>Serving {data.place.cuisines}</h4>
        </div>
        </div>
        <div>
          <h2 className="comrat">Comments</h2>
          <p>No comments yet!</p>
        </div>
        </div>
        <a href={`/places/${data.id}/edit`} className="btn btn-block btn-warning">
          <i className="bi bi-eraser">Edit</i>
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn  btn-block btn-danger">
            <i className="bi bi-radioactive"> Delete</i>
          </button>
        </form>
        
      </main>
    </Def>
  );
}

module.exports = show;
