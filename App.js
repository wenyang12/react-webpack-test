// 加载依赖包，这是 es6 的语法（我好啰嗦）。
import React from 'react';
import { Link } from 'react-router';


const App = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    handleSubmit(){
        this.context.router.push({
            pathname:'/inbox',
            query: {
                name: "wen"
            },
            state: {}
        })
    },
    render() {
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about/7">About</Link></li>
                <li onClick={this.handleSubmit}>Inbox</li>
            </ul>
        {this.props.children}
        </div>
    )
}
});

export default App;



