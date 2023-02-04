
function SearchError({searchMenuName}) {

    return (
        <div>
            <h2>"{searchMenuName}"에 대한 결과가 없습니다.</h2>
            <br/>
            <h2>검색어를 다시 입력해 주세요</h2>
        </div>
    )
}

export default SearchError;