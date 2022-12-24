const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Rest-Rant</h1>
        <img className="homeImg" src="/images/foodPic.jpg" alt="picture of market" />
        <div className="text-center">
          Photo by{" "}
          <a href="https://unsplash.com/@vork?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Mark Boss
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
        <div className="text-center">
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
