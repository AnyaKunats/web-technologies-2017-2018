import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Icon(props){

        return(
            <FontAwesomeIcon className='icon' icon={props.icon}/>
    );
}
export {Icon};