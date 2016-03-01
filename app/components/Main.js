var React = require("react")
var ReactDOM = require("react-dom");

var Main = React.createClass({
    render:function(){
        return (
            <div className="container" >
                <p className="text-center">Hello World !</p>
            </div>
        )
    }
})

ReactDOM.render(<Main/>, document.getElementById("app"))
