import AxiosInstance from "./AxiosInstance";

class ApiWrapper {
    private apiRoot: string;
    constructor(apiRoot: string) {
        this.apiRoot = apiRoot;
    }

    async get(url: string) {
        return AxiosInstance.get(this.apiRoot + url);
    }
    async post(url: string, data: Object) {
        return await AxiosInstance.post(this.apiRoot + url, data);
    }
    async delete(url: string, data: Object) {
        return await AxiosInstance.delete(this.apiRoot + url, data);
    }


}

export default ApiWrapper;