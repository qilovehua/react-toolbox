/*Hello World!*/

import _ from 'lodash';

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Navigation from 'react-toolbox/lib/navigation';
import NavItem from './header/navItem';

import Hello from './hello';
import World from './world';

const items = [
    {url: '/hello', label: 'Inbox'},
    {url: '/world', label: 'Profile'}
];

const App = React.createClass({

    getInitialState(){
        var index = localStorage.getItem('navIndex');
        !index && (index = 0);
        return {
            index
        }
    },

    handleClick(index){
        localStorage.setItem('navIndex', index);
    },

    render(){

        var actIndex = this.state.index;
        return (
            <div>
                <div style={{backgroundColor: '#303f9f'}}>
                    <Navigation type="horizontal">
                        <a href="/" style={{marginLeft: '20px', marginRight: '50px'}}>
                            <img src="./image/react.png" style={{maxWidth: '60px', maxHeight: '60px', marginBottom: '-20px'}} />
                        </a>
                        {
                            _.map(items, (item, index)=> {
                                return <NavItem index={index} url={item.url} active={actIndex == index} label={item.label} onClick={()=>this.handleClick(index)}/>
                            })
                        }
                    </Navigation>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Hello}/>
            <Route path="hello" component={World}/>
            <Route path="world" component={World}/>
        </Route>
    </Router>
), document.getElementById('react'));


