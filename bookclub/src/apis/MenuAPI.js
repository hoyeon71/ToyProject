import {request, userRequest, updateBookRequest, deleteRequest} from './Api';


export async function getMenuList() {

    return request();
}

/* MenuDetails에서 넘겨준 메뉴코드 값과 일치하는 메뉴 객체를 반환 */
export function getMenuDetail(menuCode) {

    return request.filter(menu => menu.menuCode === parseInt(menuCode))[0];
}


export async function searchMenu(searchMenuName) {
    console.log('검색어', searchMenuName);
    const result = await request();
    const result2 =  result.filter(menu => menu.bName.match(searchMenuName));
    console.log('비동기 결과', result2);

    return result2;
}

export async function updateBook(data) {
    await updateBookRequest(data);
}

export async function deleteBook(id) {
    await deleteRequest(id);
}