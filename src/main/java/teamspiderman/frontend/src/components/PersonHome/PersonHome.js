import axios from 'axios';
import React from 'react'; 


export default class PersonHome extends React.Component{

    state ={}
    componentDidMount(){
        axios.get('http://localhost:8080/api/v1/user' ) // user personal page
        .then(res =>{
            this.setState({
                user:res.data
            })
        }).catch(err =>{
            console.log(err)
        })
    }
    render(){
        if(this.props.user){
            return (<h1>hi {this.props.user.firstName}</h1>)
        }
        return(
            <h1>Welcome</h1>
        )
    }
}