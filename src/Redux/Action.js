import React from 'react';
import store from './Store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Link } from 'react-router';
function git (user) {
    return  fetch(`https://api.github.com/users/${user}/orgs`)
        .then((response) => {
        if (response.status >= 200 && response.status < 400) {
        return response.json()
    }})
        .then(res => {
        return res;
})}


function Orgs(props){
    let data = [];
    git.getOrgs(props.user)
        .then(res => res.forEach( (item, i) => data[i] = item.name ));

    data.map( item => <li>{item}</li>);

    const reactElementsArray = data.map((data) => {
            return (
        <p>{data}</p>
);
});

    return(
        <div>{reactElementsArray}</div>
);
}
function Rout(props) {
    const Org = () => {
        return <Orgs user={props.user}/>};
        return(
            <Router history={browserHistory}>
            <Link to='/org'>Org: </Link>
            <Route path='/org' component={Org}/>
        </Router>
    )
}
export default Rout;