var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <CommentList data={this.props.data}/>
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
    render() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
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
