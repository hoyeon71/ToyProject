import {useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {searchMenu} from '../apis/MenuAPI';
import MenuItem from '../commons/components/MenuItem';
import {useNavigate} from 'react-router-dom';
import SearchError from '../commons/components/SearchError';

function MenuSearchResult() {

    const [searchParams] = useSearchParams();
    const searchMenuName = searchParams.get('bName');
    const [menuList, setMenuList] = useState([]);
    const[searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    console.log(searchMenuName);

    const onClickHandler = () => {
        console.log('클릭 시 searchValue: ', searchValue);
        if(searchValue.length > 0){
            searchMenu(searchValue).then(res => {
                console.log('res확인', res);
                setMenuList(res)
            });
            
            
            navigate(`/menu/search?bName=${searchValue}`);
        }
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
                <input 
                    type="search" 
                    name="bName" 
                    placeholder="검색어를 입력해주세요." 
                    onChange={(e) => {setSearchValue(e.target.value)}}
                    onKeyPress={onKeyPressHandler}
                >                    
                </input>

                <button onClick={onClickHandler}>검색</button>
            </div>

            <h1 className="font font-color">검색결과</h1>
            <br/>
            <h2>"{searchMenuName}"에 대한 결과</h2>


            <div>
                {menuList.length != 0 ?
                menuList.map(menu => <MenuItem key={menu.bName} menu={menu}/>) :
                <SearchError searchMenuName={searchMenuName}/>}

            </div>
            
        </>
    ) 
}

export default MenuSearchResult;