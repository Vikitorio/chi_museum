import AxiosInstance from "./AxiosInstance";

class ApiWrapper {
    private apiRoot: string;
    constructor(apiRoot: string) {
        this.apiRoot = apiRoot;
    }

    async get<T>(url: string): Promise<T> {
        const response = await AxiosInstance.get<T>(this.apiRoot + url);
        return response.data;
    }
    async post<T>(url: string, data: Object): Promise<T> {
        const response = await AxiosInstance.post<T>(this.apiRoot + url, data);
        return response.data;
    }
    async delete<T>(url: string, data: Object): Promise<T> {
        const response = await AxiosInstance.delete<T>(this.apiRoot + url, data);
        return response.data;
    }


}

export default ApiWrapper;