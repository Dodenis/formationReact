import React from "react";
import Comment from "./comment/Comment";
import Card from "./card/Card";

class App extends React.Component {

  constructor(props) {
      super(props);
  }

  state = {
    comments: [
      {
        id: 1,
        avatar: 'https://semantic-ui.com/images/avatar/small/matt.jpg',
        date: '2 days ago',
        rating: '5 Stars',
        text: 'This is my comment',
        state: "waitting"
      },
      {
        id: 2,
        avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
        date: '3 days ago',
        rating: '1 Stars',
        text: 'This is my comment aaaa',
        state: "waitting"
      },
      {
        id: 3,
        avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
        date: '4 days ago',
        rating: '2 Stars',
        text: 'This is my comment bbbbb',
        state: "waitting"
      }
    ]
  }

  changeCardState = (id, newState) => {
    //on clone les states car imutable
    let nextState = {...this.state};

    //on parcour les comments et on change le state
    nextState.comments.forEach(comment => {
      if (comment.id === id) {
        comment.state = newState;
      }
    });

    this.setState(nextState);
  }

  render() {
    return (
      <div>
      {
        this.state.comments.map(
          comment => ( 
            <Card key={comment.id} state={comment.state} handleStateChange={this.changeCardState}>
              <Comment 
                key={comment.id} 
                avatar={comment.avatar}
                date={comment.date}
                rating={comment.rating}
                text={comment.text}
              />
            </Card>
          )
        )
      }
      </div>
    );
  }
}

export default App;
