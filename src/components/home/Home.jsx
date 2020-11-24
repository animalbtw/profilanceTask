import * as React from 'react';
import './Home.css'

function Home(props) {
    return (
        <div className='home_wrapper'>
            {
                props.role == 'admin' || props.role == 'user' ? (
                    <div className='home_welcome'>
                        Привет, {props.role}
                    </div>
                ) : (
                    <div className='home_welcome'>
                        Привет, Гость
                    </div>
                )
            }
        </div>
    )
}

export default Home;