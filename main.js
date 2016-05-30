/**
 * Created by weny on 2016/4/15.
 */
// 加载依赖包，这是 es6 的语法（我好啰嗦）。
import React from 'react'
import { render } from 'react-dom'
// 这里从 react-router 引入了三个组件，先不解释。
import { Router, Route, IndexRoute, hashHistory, Redirect, createRouterHistory } from 'react-router';
import About from './About.js';
import Inbox from './Inbox.js';
import App from './App.js';
import Message from './Message.js';


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={About} />
            <Route path="about/:id" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="/message/:orderId" component={Message} />
                <Redirect from="message/:orderId" to="/message/:orderId" />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));