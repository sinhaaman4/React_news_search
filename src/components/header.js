import React from 'react';


class Header extends React.Component{
    constructor(props){
            super(props);
           
            this.state={
                keywords:''
            }
        }

    inputChange(event){
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value)
    }
    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>console.log('clicked')}
                >Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
        
            </header>
        )
    }
}
export default Header;