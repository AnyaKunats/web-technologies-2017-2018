import React from 'react';
import Icon from './Icon';
import { faUsers, faMapMarkerAlt, faLink} from '@fortawesome/fontawesome-free-solid'
class User extends React.Component{
    render(){
        const {name, login, bio, company, location, blog, value}=this.props
        return(
            <div className='UserInfo'>
            <img className='avatar' src={this.props.avatar_url} alt={this.props.name}/>
        <div className='UserInfo-name'>{name}</div>
            <div className='UserInfo-login'>{login}</div>
            <div className='UserInfo-bio'>{bio}</div>
            <Icon icon={faUsers}/>
        <div  className='UserInfo-company'>{company}</div>
            <Icon icon={faMapMarkerAlt}/>
        <div  className='UserInfo-location'>{location}</div>
            <Icon icon={faLink}/>
        <a className='UserInfo-blog' href={blog}>{value}</a>
        </div>
    );
    }
}
export default User;