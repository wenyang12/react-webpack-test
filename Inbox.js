/**
 * Created by weny on 2016/4/25.
 */
import React from 'react';
import {Link} from 'react-router';

const Inbox = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    handleClick(){
        this.context.router.push({
            pathname: '/inbox/message/89'
        })
    },

    render() {
    console.dir(this.props);
    return (
        <div>
        {this.props.children}
        <p>Inbox{this.props.location.query.name}</p>
        <p onClick={this.handleClick}>message</p>
        </div>
    )
}
});
export default Inbox;
