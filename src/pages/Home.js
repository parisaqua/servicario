import React, { useState, useEffect } from 'react';
import './Home.css';


const Home = () => {
    
    const [message, setMessage] = useState('Super message à moi !')

    // const messageState = useState('Great messge.')
    // const message = messageState[0]
    // const setMessage = messageState[1]
    
    useEffect(() => {
        debugger
        setTimeout(() => {
            setMessage('Message updated !')
        }, 1500)
    }, [])

    return (
        <div className='container'>
            <h1>I am home page.</h1>
            <p>{message}</p>
        </div>
    )
}


// class Home extends React.Component {  
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         message: 'Super message !!!'
    //     }
    // }

    // state = {
    //     message: 'Super message !!!'
    // }

    //Lifecycle function
    // componentDidMount () {
    //     setTimeout(() => {
    //         this.setState({message: 'I have updated the message!'})
    //     }, 1000)
        
    // }

    //lifecycle function
    // render() {
    //     const {message} = this.state;
    //     return (
    //         <div className="container">
    //             <h1>I am Home Class Page</h1>
    //              <p>{message}</p>
    //         </div>
    //     )
    // }
// }

export default Home;

