import React from 'react';
import Link from 'react-toolbox/lib/link';

var NavItem = React.createClass({

    getInitialState(){
        return {
            active: this.props.active
        }
    },

    render(){
        var styles={
            width: '80px',
            height: '100%',
            display: 'inline-block',
            textAlign: 'center',
            verticalAlign: 'middle',
            padding: '20px',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: '500',
            borderBottom: "4px solid transparent"
        };
        if(this.state.active){
            styles.borderBottom = "4px solid #ff4081";
        }
        return (
            <div style={styles} onClick={this.props.onClick}>
                <Link style={{color: '#fff', textDecoration: 'none'}} href={this.props.url} label={this.props.label} icon={this.props.icon}/>
            </div>
        );
    }
});

export default NavItem;
