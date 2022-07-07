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
        status: "waitting"
      },
      {
        id: 2,
        avatar: 'https://semantic-ui.com/images/avatar/small/joe.jpg',
        date: '3 days ago',
        rating: '1 Stars',
        text: 'This is my comment aaaa',
        status: "waitting"
      },
      {
        id: 3,
        avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
        date: '4 days ago',
        rating: '2 Stars',
        text: 'This is my comment bbbbb',
        status: "waitting"
      }
    ]
  }

  changeCardStatus = (id, newStatus) => {
    //on clone les states car imutable
    let stateCopy = {...this.state};

    //on parcour les comments et on change le state
    stateCopy.comments.forEach(comment => {
      if (comment.id === id) {
        comment.status = newStatus;
      }
    });

    this.setState(stateCopy);
  }

  render() {
    return (
      <div>
      {
        this.state.comments.map(
          comment => {
            if (comment.status === 'decline') {
              return '';
            }
            
            return ( 
            <Card 
              key={comment.id} 
              id={comment.id} 
              status={comment.status} 
              handleStatusChange={this.changeCardStatus}
              >
              <Comment 
                key={comment.id} 
                avatar={comment.avatar}
                date={comment.date}
                rating={comment.rating}
                text={comment.text}
              />
            </Card>
          )}
        )
      }
      </div>
    );
  }
}

export default App;
