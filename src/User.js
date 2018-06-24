import React from 'react';
import './User.css';
import {Icon} from './Icon';
import { faUsers, faMapMarkerAlt, faLink} from '@fortawesome/fontawesome-free-solid'

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
            .then(response => response.json())
    .then(
            user => {
            this.setState({
            user: user
        });
    }
    );
    }
    render() {
        if (!this.state.user) {
            return (<div className="user-page">LOADING...</div>);
        }
        const user = this.state.user;
        return (

            <div className='UserInfo' to={`/user/${user.login}`}>
    <img className="UserInfo-avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
        <div className='UserInfo-name'>{user.name}</div>
            <div className='UserInfo-login'>{user.login}</div>
            <div className='UserInfo-bio'>{user.bio}</div>
        <hr />
        <Icon icon={faUsers}/>
            <div  className='UserInfo-company'>{user.company}</div>
        <Icon icon={faMapMarkerAlt}/>
            <div  className='UserInfo-location'>{user.location}</div>
        <Icon icon={faLink}/>
        <a className='UserInfo-blog'>{user.blog}</a>
        </div>

    );
    }
};
export default User;
