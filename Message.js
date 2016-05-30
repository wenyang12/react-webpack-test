/**
 * Created by weny on 2016/4/25.
 */
import React from 'react';
const Message = React.createClass({
    render() {
    return <h3>Message {"orderId="+this.props.params.orderId}</h3>
}
});
export default Message;