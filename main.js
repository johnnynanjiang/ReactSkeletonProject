var MyComponent = React.createClass({
    render: function() {
        return (
            <div>
                Hello world! (by a React component)
            </div>
        );
    }
});

ReactDOM.render(<MyComponent />, document.getElementById('example'));
