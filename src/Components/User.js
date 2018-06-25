import React from 'react';
import '../index.css';
import { Link } from 'react-router';
import {Icon} from './Icon';
import Tabss from './Tabs'
import Rout from '../Redux/Action';
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
    renderStat(stat) {
        return (
            <Link to={stat.url} className='UserInfo-stat' >
   <div className="UserInfo-stat-name">{stat.name}</div>
    <div className="UserInfo-stat-value">{stat.value}</div>
            <br/>
        </Link>
    );
    }
    render() {
        if (!this.state.user) {
            return null;
        }
        const user = this.state.user;
        const stats = [
            {
                name: 'Followers: ',
                value: user.followers,
                url: `/user/${this.props.params.username}/followers`
            },
            {
                name: 'Repos: ',
                value: user.following,
                url: `/user/${this.props.params.username}/repos`
            }
        ];

        return (
<div className='User'>
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
        <div className='UserInfo-stats'>
            {stats.map(this.renderStat)}</div>
            <Rout user={user.orgs} />
        </div>
        <div className='tab'>
            <Tabss />
            </div>
        </div>

    );
    }
};
export default User;
