
import {useNavigate} from 'react-router-dom';
import './Admin.css'

function Admin() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`booklist`)
    }

    return (
        <>        
           <div style={{textAlign:'center'}}>
                <h1>관리자 화면</h1>
            </div>
            <div className='bManage'>
                <div className='userM'>
                    <h1>회원 관리</h1>
                    <span>회원 추가 하기</span>
                    <span>회원 수정 하기</span>
                    <span>회원 삭제 하기</span>
                </div>

                <div className='bookM'>
                    <h1>도서 관리</h1>
                    <span>도서 추가 하기</span>
                    <span onClick={onClickHandler}>도서 목록 보기</span>
                </div>
            </div>
            
        </>
    )
}

export default Admin;