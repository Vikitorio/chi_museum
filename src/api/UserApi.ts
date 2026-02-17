import ApiWrapper from "./ApiWrapper";

class UserApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    async userRegister(data: { username: string, password: string }) {
        return await this.post<{ id: number, username: string }>("/register", data);
    }
}


const userApi = new UserApi('users');
export default userApi;