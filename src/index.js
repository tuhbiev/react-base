import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: ""
    };
  }
  render() {
    return React.createElement(
      "form",
      {
        className: "createComment"
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Your name",
        value: this.state.user
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Thoughts?"
      }),
      React.createElement("input", {
        type: "submit",
        value: "Post"
      })
    );
  }
}
CreateComment.propTypes = {
  content: PropTypes.string
};

const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: This is a post!",
    user: "mark"
  },
  React.createElement(Comment, {
    id: 2,
    user: "bob",
    content: " commented: wow! how cool!"
  }),
  React.createElement(CreateComment)
);

render(App, node);
