import React from 'react';
import Avatar from './Avatar';
import Author from './Author';
import Metadata from './Metadata';
import Text from './Text';

function Comment(props) {
    return (
        <div className='ui comments'>
            <div className="comment">
                <Avatar src={props.avatar}/>
                <div className="content">
                    <Author value={props.author} />
                    <Metadata date={props.date} rating={props.rating} />
                    <Text value={props.text} />
                </div>
            </div>
        </div>
    );
}

export default Comment;