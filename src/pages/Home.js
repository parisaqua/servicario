import React, { useState, useEffect } from 'react';
import Counter from "../components/Counter";
import './Home.css';

class Home extends React.Component {  
    
    state = {
        message: 'Super message !!!',
        testNumber: 99
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({message: 'I have updated the message!'})
        }, 1000) 
    }

    displayMessage = (type, count) => {
        if(type === 'increment') {
             //alert(`Your number was incremented! Current value: ${count}`)
             return
        }
        //alert(`Your number was decremented! Current value: ${count}`)
    }

    render() {
        const {message, testNumber} = this.state;
        return (
            <div className='container'>
                <h1>I am home page.</h1>
                <p>{message}</p>
                <button onClick={() => this.setState({testNumber: testNumber + 1})}>Testing Increment</button>
                <Counter 
                    testNumber={testNumber}
                    onChange={this.displayMessage}
                    title={'I am counter component'} 
                />
            </div>
        )
    }
}

export default Home;

// const Home = () => {
    
//     const [message, setMessage] = useState('Super message à moi !')
//     const [count, setCount] = useState(0)
//     const [test, setTest] = useState(0)
//     useEffect(() => {
//         setTimeout(() => {
//             setMessage('Message updated !')
//         }, 1500)
//     }, [])

//     const increment = () => {
//         //setTest(test + 1)
//         setCount(count + 1)
//     }

//     const decrement = () => {
//         setCount(count - 1)
//     }

//     return (
//         <div className='container'>
//             <h1>I am home page.</h1>
//             <p>{message}</p>
//             <button onClick={increment}>Incrément</button>
//             <div className="counter">{count}</div>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }