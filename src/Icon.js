import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Icon extends React.Component{
    render(){
        const {icon}=this.props;
        return(
            <FontAwesomeIcon className='icon'>{icon}</FontAwesomeIcon>
    );
    }
}
export default Icon;