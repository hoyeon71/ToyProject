import CommentItems from "./CommentItem";
import { useState } from "react";

function Comment() {

    const [comments, setComments] = useState([
        {num: 1, description: '코스모스 재미있어요'},
        {num: 2, description: '한계 없음 재미없네요.'},
    ]); 
    const [inputText, setInputText] = useState('');
    const [nextNum, setNextNum] = useState(3);

    const onChangeHandler = (e) => {
        setInputText(e.target.value);
    }

    const onClickHandler = () => {
        const changeComments = comments.concat({
            num: nextNum,
            description: inputText,
        });

        console.log(changeComments)
        setInputText('');
        setNextNum(nextNum + 1);
        setComments(changeComments);
    }

    return (
        <div className="comments">
                <div className="item">
                <CommentItems 
                    comments={ comments } 
                    setComments={ setComments }
                />
                </div>
                <input 
                    className='comment'
                    type="text" 
                    value={ inputText } 
                    onChange={ onChangeHandler }
                />&nbsp;&nbsp;
                <button className='cobtn' onClick={ onClickHandler }>리뷰 등록</button>
        </div>
    );
}

export default Comment;