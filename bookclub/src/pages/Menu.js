import {useEffect, useState} from 'react';
import {getMenuList} from '../apis/MenuAPI';
import MenuItem from '../commons/components/MenuItem'
import {useNavigate} from 'react-router-dom';


function Menu() {

    const[searchValue, setSearchValue] = useState('');
    
    const [menuList, setMenuList] = useState([]);

    const navigate = useNavigate();

    useEffect( 
        () => {
            getMenuList().then(res => setMenuList(res));
        },
        []
    )

    const onClickHandler = () => {
        navigate(`/menu/search?bName=${searchValue}`);
    }

    return(
        <>
            <h1 className="font">도서 목록</h1>

            <div className="Search">
                <input type="search" name="bName" placeholder="검색어를 입력해주세요." onChange={(e) => {setSearchValue(e.target.value)}}></input>
                <button onClick={onClickHandler}>검색</button>
            </div>
            <div>
                {menuList.map(menu => <MenuItem key={menu.bName} menu={menu}/>)}
            </div>
        </>
    )
}

export default Menu;