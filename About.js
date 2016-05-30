/**
 * Created by weny on 2016/4/25.
 */
import React from 'react';

const About = React.createClass({
    render() {
    return (
        <div>
        About{this.props.params.id}
        </div>
    )
}
});

export default About;