import './Book.css';

function CommentItems({comments, setComments}) {

    const removeComment = (num) => {
        const removedList = comments.filter(comment => comment.num !== num);
        setComments(removedList);
    }
    
    return (
        <>
            { 
                comments.map(
                    comment => 
                        <p key={ comment.num }>
                            <label 
                            >
                                { comment.description }
                            </label>
                            <button className='cobtndel' onClick={ () => removeComment(comment.num) }>x</button>
                        </p>
                ) 
            }
        </>
    );
}

export default CommentItems;