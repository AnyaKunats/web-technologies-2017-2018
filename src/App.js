import React from 'react';
import './App.css';
import Tabs from './Tabs'

class App extends React.Component {
    render() {
        return (
            <div className="main-app">
        <main className="main-content">
            {this.props.children}
    </main>
            <div className='tabs'>
            <Tabs />
            </div>
        </div>
    );
    }
};

export default App;