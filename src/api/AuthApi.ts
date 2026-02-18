import ApiWrapper from "./ApiWrapper";

class AuthApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    async logIn(data: { username: string, password: string }) {
        const response = await this.post<{ userName: string, userId: string, access_token: string }>("/auth/login", data);
        return response.data;
    }
}


const authApi = new AuthApi('api');
export default authApi;