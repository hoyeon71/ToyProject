import {Link} from 'react-router-dom';

function MenuItem({menu}) {
    return(
        <div className="block">
            <Link to={`/${menu.id}`}>
                <div className="font">
                    <img src={menu.detail.image}/>
                    <h3>책 이름: {menu.bName}</h3>
                    <h3>저자: {menu.aut}</h3>
                </div>
            </Link>
        </div>
    );
}

export default MenuItem;