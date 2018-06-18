import React, { PureComponent, Component, Fragment } from 'react';

import './App.css';

class Icon extends React.Component{
    render(){
        const {icon}=this.props
        return(
            <div className='icon'>{icon}</div>
    );
    }
}
class IconText extends React.Component{
    render(){
        const {text}=this.props
        return(
            <div className='text'>{text}</div>
        );
    }
}
class User extends React.Component{
    render(){
        const {name, login, bio, company, location, blog}=this.props
        return(
            <div className='UserInfo'>
            <img className='avatar' src={this.props.avatar_url} alt={this.props.name}/>
        <div className='UserInfo-name'>{name}</div>
        <div className='UserInfo-login'>{login}</div>
        <div className='UserInfo-bio'>{bio}</div>
        <Icon icon={this.props.IconCompany}/>
            <div  className='UserInfo-company'>{company}</div>
        <Icon icon={this.props.IconLocation}/>
        <div  className='UserInfo-location'>{location}</div>
        <Icon icon={this.props.IconBlog}/>
        <a className='UserInfo-blog' href={blog}/>
        </div>
        );
    }
}
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
            <p>
            <input type='checkbox' className='edit' onClick={this.handleClick}/>{this.state.isEdit ? 'EDIT' : 'SAVE'}
        </p>
    );
    }
}
function Edittext(props){
    return (
            <div className="edittext">
        <Edit />
        <textarea />
            </div>
    );
}
class Tab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showEdit: true}
    }
    render(){
        return(
            <div>

            <button className='basic'>Основное</button>
<button className='education'>Образование</button>
            <button className='contacts'>Контакты</button>
            <hr />
        <Edittext ed={this.state.showEdit} />

            </div>

        )
    }

}
class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
    <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
            </form>
        )
    }
}
class App extends React.Component {
    render(){
        return(
<div>
            </div>
        )
    }
}
export default App;