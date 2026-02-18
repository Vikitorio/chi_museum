import AxiosInstance from "./AxiosInstance";

class ApiWrapper {
    private apiRoot: string;
    constructor(apiRoot: string) {
        this.apiRoot = apiRoot;
    }

    async get<T>(url: string): Promise<{ data: T; status: number }> {
        const response = await AxiosInstance.get<T>(this.apiRoot + url);
        return {
            data: response.data,
            status: response.status
        };
    }
    async post<T>(url: string, data: object): Promise<{ data: T; status: number }> {
        const response = await AxiosInstance.post<T>(this.apiRoot + url, data);
        return {
            data: response.data,
            status: response.status
        };
    }
    async delete<T>(url: string, data: object): Promise<{ data: T; status: number }> {
        const response = await AxiosInstance.delete<T>(this.apiRoot + url, data);
        return {
            data: response.data,
            status: response.status
        };
    }


}

export default ApiWrapper;