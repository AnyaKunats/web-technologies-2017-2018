import React, { PureComponent, Component, Fragment } from 'react';
import './App.css';
import User from './User';
import Tabs from './Tabs'
import Input from './Input'

class App extends React.Component {
    render(){
        return(
<div>
            <Input />
            //<User />
            <Tabs />
            </div>
        )
    }
}
export default App;