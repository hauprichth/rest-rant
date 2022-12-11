const React = require('react')
const Def = require('./default')

function error404 (){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img  src="/images/sign404page.jpg" alt="this is the sign you were looking for"/>
                <div className="text-center">
                    Photo by <a href="https://unsplash.com/@vork?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark Boss</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    <p>Or not, sorry, we can't find this page!</p>
                </div>
            </main>
        </Def>
    )
}
module.exports = error404
//https://unsplash.com/photos/ukzHlkoz1IE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink