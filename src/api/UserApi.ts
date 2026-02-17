import ApiWrapper from "./ApiWrapper";

class UserApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    async userRegister(data: Object) {
        const response = await this.post<{ id: number, username: string }>("/register", data);
        return response.data;
    }
}


const userApi = new UserApi('user');
export default userApi;