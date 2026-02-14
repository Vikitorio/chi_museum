import ApiWrapper from "./ApiWrapper";

interface ExibitsPage {
    total: number,
    page: string,
    lastPage: number,
    data: ExibitItem[]
}
interface ExibitItem {
    id: number,
    imageUrl: string
    description: string,
    user: {
        id: number,
        username: string
    },
    commentCount: number,
    createdAt: string
}

class ExhibitsApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    async getExibits(page: number) {
        const response = await this.get<{data: ExibitsPage, status:number}>(`?page=${page}&limit=10`);
        return response.data.data;
    }
    async getMyExibits() {
        const response = await this.get<{data:any,  status:number}>("/my-posts");
        return response.data;
    }
    async addNewExibit(data: Object) {
        const response = await this.post<{data:any,  status:number}>("/", data);
        return response.data;
    }
    async deleteExibit(id: number) {
        const response = await this.delete<{data:any,  status:number}>(`/${id}`, {});
        return response.data;
    }
}


const exhibitsApi = new ExhibitsApi('api/exhibits');
export default exhibitsApi;