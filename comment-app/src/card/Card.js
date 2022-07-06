import React from 'react';
import Button from './Button';

function Card(props) {
    let setBgColor = () => {
        let bgColor = '#fff';

        switch(props.children.state) {
            case 'approved':
                bgColor = 'rgba(0,255,0,0.2)';
                break;
            case 'declined':
                bgColor = 'rgba(255,0,0,0.2)';
                break;
        }

        return bgColor;
    };

    
    return (
        <div className="ui cards">
            <div className="card" style={{backgroundColor: setBgColor()}}>
                <div className="content">
                    {props.children}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        {/*<Button color='green' label='Approve' />
                        <Button color='red' label='Decline' />*/}
                        <div className={"ui basic button green"} onClick={() => {props.handleStateChange(+props.children.key, 'approved')}}>Approve</div>
                        <div className={"ui basic button red"} onClick={() => {props.handleStateChange(+props.children.key, 'decline')}}>Decline</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;