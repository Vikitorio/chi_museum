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
    async getExhibits(page: number) {
        const response = await this.get<ExibitsPage>(`?page=${page}&limit=10`);
        return response.data;
    }
    async getMyExhibits(page: number) {
        const response = await this.get<ExibitsPage>(`/my-posts/?page=${page}&limit=10`);
        return response.data;
    }
    async addNewExhibit(data: object) {
        const response = await this.post<any>("/", data);
        return response;
    }
    async deleteExhibit(id: number) {
        const response = await this.delete<any>(`/${id}`, {});
        return response.data;
    }
}


const exhibitsApi = new ExhibitsApi('api/exhibits');
export default exhibitsApi;