import {useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {searchMenu} from '../../apis/MenuAPI';
import {useNavigate} from 'react-router-dom';

function MenuSearchResult() {

    const [searchParams] = useSearchParams();
    const searchMenuName = searchParams.get('bName');
    const [menuList, setMenuList] = useState([]);
    const[searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/menu/search?bName=${searchValue}`);
    }

    const onKeyPressHandler = (e) => {
        if(e.key == 'Enter') {
            navigate(`/menu/search?bName=${searchValue}`);
        }
    }

    useEffect(
        () => {
                searchMenu(searchMenuName).then(res => setMenuList(res))
        }, []
    )

    return (
        <>
            <div className="Search">
                <input type="search" name="bName" placeholder="검색어를 입력해주세요." onChange={(e) => {setSearchValue(e.target.value)}} onKeyPress={onKeyPressHandler}></input>
                <button onClick={onClickHandler}>검색</button>
            </div>
        </>
    )
}

export default MenuSearchResult;