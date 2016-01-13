var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};

        console.log("CommentBox.constructor()");
    }

    componentDidMount() {
        this.setState({data: data});

        console.log("CommentBox.componentDidMount()");
    }

    render() {
        console.log("CommentBox.render()");

        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
};

class CommentList extends React.Component {
    render() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
};

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {author: "", text: ""};

        //Bind this to the member methods, otherwise things like onChange={this.handleAuthorChange} will fail
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log("CommentForm.constructor()");
    }

    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    }

    handleTextChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        var author = this.state.author.trim();
        var text = this.state.text.trim();

        if (!author || !text) {
            return;
        }

        // send request to server
        this.setState({author: '', text: ''});

        console.log("CommentForm.handleSubmit()");
    }

    render() {
        console.log("CommentForm.render(), author: {0}, state: {1}.".format(this.state.author, this.state.text));

        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <p>
                    <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
                    <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
                    <input type="submit" value="Post" />
                </p>
            </form>
        );
    }
};

class Comment extends React.Component {
    render() {
        return (
            <div className="comment" id={this.props.key}>
                <h3 className="commentAuthor">
                    {this.props.author}
                </h3>
                {this.props.children}
            </div>
        );
    }
};

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);
