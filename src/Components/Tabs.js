import React from 'react';
import '../index.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Edit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isEdit: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isEdit: !prevState.isEdit
        }));
    }
    render(){
        return (
            <p className='edit'>
            <input type='checkbox' onClick={this.handleClick}/>{this.state.isEdit ? 'EDIT' : 'SAVE'}
        </p>
    );
    }
}

class Tabss extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {showEdit: true}
    }
    render(){
        return(
            <Tabs >
            <TabList className='tabs' >
            <Tab className='onetab'>Основное</Tab>
            <Tab className='onetab'>Образование</Tab>
            <Tab className='onetab'>Контакты</Tab>
            </TabList>
            <Edit ed={this.state.showEdit} />
        <textarea className='text' />
        </Tabs>
    )
    }
}

export default Tabss;