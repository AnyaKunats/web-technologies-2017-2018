import React from 'react';
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
class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showEdit: true}
    }
    render(){
        return(
            <form>
            <button className='basic'>Основное</button>
            <button className='education'>Образование</button>
            <button className='contacts'>Контакты</button>
            <hr />
            <Edittext ed={this.state.showEdit} />
        </form>

    )
    }

}
export default Tabs