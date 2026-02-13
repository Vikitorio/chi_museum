import ApiWrapper from "./ApiWrapper";

class UserApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    userRegister(data: Object) {
        return this.post("/register", data);
    }
}


const userApi = new UserApi('user');
export default userApi;