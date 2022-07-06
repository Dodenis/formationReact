
import Comment from "./comment/Comment";
import Card from "./card/Card";

function App() {
  let comments = [
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
  ];

  let setState = (id, newState) => {
    comments = comments.map(
      comment => {
        if (comment.id === id) {
          return {...comment, state: newState};
        }

        return comment;
      }
    );
    console.log(comments);
  }

  return (
    <div>
    {
      comments.map(
        comment => ( 
          <Card key={comment.id} handleStateChange={setState}>
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

export default App;
