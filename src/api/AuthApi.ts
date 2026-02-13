import ApiWrapper from "./ApiWrapper";

class AuthApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    logIn(data: Object) {
        return this.post("/auth/login", data)
    }
}


const authApi = new AuthApi('api');
export default authApi;