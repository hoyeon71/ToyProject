import {request} from './Api'

export async function getBookList() {
    return request();
}

export async function getBookDetail(id) {
    // const result = request.then(res => res)
    // console.log(result);
     const result = await request();
    
    //  console.log(result.filter(menu => menu.id == (id))[0]);

    /* 이렇게 작성하면 await request()보다 request().filter를 먼저 실행하게 됨 */
    // return await request().filter(menu => menu.id == (id))[0];

     return result.filter(menu => menu.id == (id))[0];
}