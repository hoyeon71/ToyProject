import { NavLink, useNavigate } from 'react-router-dom';
import {useEffect, useState} from'react';

function Header() {

    const goLogin = () => {
        window.location.href="/login"
    }

    const [loginStatus, setLoginStatus] = useState();

    useEffect(()=> {
        setLoginStatus(!!localStorage.getItem('isLogin'));
    },
    []);
    
    const logoutHandler = () => {
        localStorage.clear()
    }

    return (        
            <div className="Header">
                <NavLink to="/"><img src="/images/LOGO.png" style={{maxHeight: 100}}/></NavLink>
                <h1>BOOK CLUB</h1>
                { loginStatus == false ? (
                    <button onClick={goLogin}>로그인</button>
                    ) : ( 
                        <button onClick={logoutHandler}><a href="/">로그아웃</a></button>
                        )}
            </div>        
    );
}

export default Header;