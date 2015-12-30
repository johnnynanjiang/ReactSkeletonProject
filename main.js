var HelloWordComponent = React.createClass({
    displayName: "HelloWordComponent",
    render: function() {
        return (
            <div>
                Hello world! (by React)
            </div>
        );
    }
});

var PrintNameComponent = React.createClass({
    displayName: "PrintNameComponent",
    render: function() {
        return (
            <div>
                Name is: {this.props.name}
            </div>
        );
    }
});

class ES6Component extends React.Component {
    render() {
        return (<div>I'm an ES6 Component</div>);
    }
}

ReactDOM.render(<HelloWordComponent />, document.getElementById('HelloWorld'));
ReactDOM.render(<PrintNameComponent name="Name One" />, document.getElementById('PrintName'));
ReactDOM.render(<ES6Component />, document.getElementById('ES6'));
