import * as React from 'react';
import {
    Link,
} from 'react-router-dom'




import './Header.css'
import Auth from "../dialog/Auth";

function Header(updateRole) {

    return (
            <div className='header_wrapper'>
                <div className="home">
                    <Link to='/' className='header_links'>
                        Главная
                    </Link>
                </div>
                <div className="news">
                    <Link to='/news' className='header_links'>
                        Новости
                    </Link>
                </div>
                <div className="auth">
                    <Auth updateRole={updateRole}/>
                </div>
            </div>
    );
}

export default Header;