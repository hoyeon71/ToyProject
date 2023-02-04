import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getBookDetail} from '../../apis/BookAPI';

function Book() {

    const {id} = useParams();
    
    const [book, setBook] = useState({});
    const [detail, setDetail] = useState({});
    
    /*
    useState 사용 시 자동 객체화 되는데 이 경우 객체 안의 객체를 인지할 수 없으므로
    다시 한 번 useState를 사용하여 객체를 꺼내주는 작업을 해 주어야 한다.
    */

    // useEffect( 
    //     async () => {
    //         setBook(await getBookDetail(id));
    //     },
    //     []
    // )

    /* 1안, then으로 해결 */
    useEffect(
        () => {
            // setBook(getBookDetail(id))
            
            getBookDetail(id).then(res => {
                setBook(res);
                setDetail(res.detail);
            });
            // console.log(getBookDetail(id));
        },[]
    )

    /* 2안, 내부함수로 async await로 해결 */
    // useEffect(() => {
    //     async function test() {
            
    //         const result = await getBookDetail(id);
    //         setBook(result);
    //     }
    //     test();
    // },[]
    // )
        // console.log(book[0].detail, '랑', book[0].detail);
    return(
        <>  
            <div className='allInfo'>
              <div><img src={detail.image} alt={book.bName} className='bPhoto'/></div>
              <div className='information'>
                <h3>도서 제목: {book.bName}</h3>
                <h3>도서 번호: {book.id}</h3>          
                <h3>장르: {book.category}</h3>
                <h3>저자: {book.aut}</h3>
                <h3>출판사: {book.pub}</h3>
                <h3>도서 소개: {detail.description}</h3>
                <button>정보 수정</button>&nbsp;&nbsp;
                <button>정보 삭제</button>
              </div>
            </div>
        </>
    )
}

export default Book;