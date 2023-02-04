import { userRequest } from "./Api";

export async function getUserList(user) {

    const result = await userRequest();

    return result.filter(UserCheck => UserCheck.id == (user))[0];
}
