import {useEffect, useState} from 'react';
import {getUserList} from '../../apis/LoginAPI';

function LoginForm() {

    const [loginInfo, setLoginInfo] = useState({
        id: '',
        password:''
    });
    const [userList, setUserList] = useState({});
    
    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name]: e.target.value
            },
            getUserList(e.target.value).then(res => {
                setUserList(res);
                console.log(res);
            })
        );
    }

    const onClickHandler = () => {               

        if(userList != undefined){
            alert(`${userList.nickname}님 환영 합니다.`);
            if(userList.id != 'admin'){
                localStorage.setItem('isLogin', true);
                window.location.replace('/')
            } else if (userList.id == 'admin'){
                localStorage.setItem('isLogin', true);
                window.location.replace('/admin')
            } 
        } else {
            alert('아이디와 비밀번호를 확인해 주세요');
            setLoginInfo(
                {
                    id:'',
                    password: ''
                }
            );
        }
    }

    useEffect(
        () => {
            
        },
        []
    );

    return (
        <div className='loginForm'>
            <div>
                <input 
                    type="text" 
                    name="id" 
                    value={loginInfo.id} 
                    placeholder="아이디" 
                    onChange={onChangeHandler}
                />
                <br/>
                <input 
                    type="password" 
                    name="password" 
                    value={loginInfo.password} 
                    placeholder="비밀번호" 
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <br/>
                <button 
                    onClick={onClickHandler} 
                >
                    로그인
                </button>
            </div>
        </div>
    );
}

export default LoginForm;