import React from 'react';
import Button from './Button';

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let bgColor = '#fff';
        switch (this.props.status) {
            case 'approved':
                bgColor = 'rgba(0,255,0,0.2)';
                break;
            case 'decline':
                bgColor = 'rgba(255,0,0,0.2)';
                break;
        }

        return (
            <div className="ui cards">
                <div className="card" style={{backgroundColor: bgColor}}>
                    <div className="content">
                        {this.props.children}
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            {/*<Button color='green' label='Approve' />
                            <Button color='red' label='Decline' />*/}
                            <div className={"ui basic button green"} onClick={() => {this.props.handleStatusChange(+this.props.id, 'approved')}}>Approve</div>
                            <div className={"ui basic button red"} onClick={() => {this.props.handleStatusChange(+this.props.id, 'decline')}}>Decline</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;