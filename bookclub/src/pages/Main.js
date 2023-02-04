import { useState, useEffect } from "react";
import { getMenuList } from "../apis/MenuAPI";
import {Link} from 'react-router-dom'
import Search from '../commons/components/Search';

function Main() {
  const [toggleState, setToggleState] = useState(0);
  const [bookList, setBookList] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };  
  
  useEffect(
    () => {      
      // getMenuList().then(res => console.log(res));
      // getMenuList().then(res => setBookList(res.map(r => (r.id).match('nov'))))
      
      getMenuList().then(
        res => setBookList(
          res.filter(
            r => !!(r.id).match('nov')
          )
        )
      )
    },
    []
  );

  const novClickHandler= () => {
    return getMenuList().then(res => setBookList(res.filter(r => !!(r.id).match('nov')))),
    toggleTab(0)
  }

  const sdmClickHandler= () => {
    return getMenuList().then(res => setBookList(res.filter(r => !!(r.id).match('sdm')))),
    toggleTab(1)
  }

  const sciClickHandler= () => {
    return getMenuList().then(res => setBookList(res.filter(r => !!(r.id).match('sci')))),
    toggleTab(2)
  }

  const ecoClickHandler= () => {
    return getMenuList().then(res => setBookList(res.filter(r => !!(r.id).match('eco')))),
    toggleTab(3)
  }

  const esyClickHandler= () => {
    return getMenuList().then(res => setBookList(res.filter(r => !!(r.id).match('esy')))),
    toggleTab(4)
  }
  
  return (
    <>
    <Search/>
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
          onClick={novClickHandler}
        >
          소설
        </button>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={sdmClickHandler}
        >
          자기계발
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={sciClickHandler}
        >
          과학
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={ecoClickHandler}
        >
          경제
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={esyClickHandler}
        >
          에세이
        </button>
        
      </div>

      <div className="content-tabs">
        
        <div
          className={toggleState === 0 ? "content  active-content" : "content"}        
        >
          {bookList.map((b) => 
              <div key={b.id}>
                <Link to={b.id}>
                <img src={b.detail.image} />
                </Link>
                <div><h5>책 이름 : </h5>{b.bName}</div>
                <div><h5>저자 : </h5>{b.aut}</div>
              </div>
          )}
        </div>
        
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {bookList.map((b) => 
              <div key={b.id}>
                <Link to={b.id}>
                <img src={b.detail.image} />
                </Link>
                <div><h5>책 이름 : </h5>{b.bName}</div>
                <div><h5>저자 : </h5>{b.aut}</div>
              </div>
          )}
        
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {bookList.map((b) => 
              <div key={b.id}>
                <Link to={b.id}>
                <img src={b.detail.image} />
                </Link>
                <div><h5>책 이름 : </h5>{b.bName}</div>
                <div><h5>저자 : </h5>{b.aut}</div>
              </div>
          )}
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          {bookList.map((b) => 
              <div key={b.id}>
                <Link to={b.id}>
                <img src={b.detail.image} />
                </Link>
                <div><h5>책 이름 : </h5>{b.bName}</div>
                <div><h5>저자 : </h5>{b.aut}</div>
              </div>
          )}
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          {bookList.map((b) => 
              <div key={b.id}>
                <Link to={b.id}>
                <img src={b.detail.image} />
                </Link>
                <div><h5>책 이름 : </h5>{b.bName}</div>
                <div><h5>저자 : </h5>{b.aut}</div>
              </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;