import {getMenuList, updateBook, deleteBook} from '../../apis/MenuAPI';
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function BookList() {
    const [bkList, setbkList] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [inputValueAut, setInputValueAut] = useState('');

    const handleClearInput = () => {
        setSelectedBook(null)
        setInputValue('')
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === 'bName'){
            setInputValue(value)
            return;
        } 
        
        setInputValueAut(value)
    };


    async function bookList() {
        const response =await getMenuList();
        setbkList(response);
    }

    const updateHandler = async(book) => {
        setSelectedBook(book);
        setInputValue(book.bName);
        setInputValueAut(book.aut);
    }

    const handleUpdate = async () => {
        
        // 업데이트 로직
        const data = {
            ...selectedBook,
            bName: inputValue,
            aut: inputValueAut
        }
        await updateBook(data);

        handleClearInput();
        bookList();
    }

    const deleteHandler = async (id) => {
        if(window.confirm('삭제 하시겠습니까?')){
            await deleteBook(id);
            bookList();
        }
    }

    useEffect(
        () => {
            bookList();
        },
        []
    )

    return(
        <div className='allBook'>
            {
                bkList.map
                (book => {

                    return (
                        <div 
                            key={book.id}
                            className='bListtop'
                            >                        
                            <div 
                                className='bList'                                
                            >
                                <Link to={`/${book.id}`}>
                                <img 
                                    src={book.detail?.image} 
                                    style={{width:150}}
                                />
                                </Link>
                                    <br/>
                                {selectedBook?.id === book.id ? (
                                    <div>
                                        책 이름 : &nbsp;
                                        <input 
                                            type="text" 
                                            name="bName" 
                                            value={inputValue} 
                                            onChange={handleChange} 
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        책 이름 : {book?.bName}
                                    </div>
                                )}

                                {selectedBook?.id === book.id ? (
                                    <div>
                                        저자 : &nbsp;
                                        <input 
                                            type="text"
                                            name="aut"
                                            value={inputValueAut}
                                            onChange={handleChange}
                                        />
                                    </div>
                                ) : (
                                    <div> 저자 : {book?.aut}</div>
                                )}
                            </div>
                            {selectedBook?.id === book.id ? (
                                <div>                                    
                                    <button onClick={handleUpdate}>확인</button>&nbsp;
                                    <button onClick={handleClearInput}>취소</button>
                                </div>
                            ) : (
                                <div>
                                    <button onClick={() => updateHandler(book)}>수정</button>&nbsp;
                                    <button onClick={() => deleteHandler(book.id)}>삭제</button>
                                </div>
                            )}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default BookList;