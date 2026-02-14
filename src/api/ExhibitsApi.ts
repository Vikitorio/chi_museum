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
        return await this.get<ExibitsPage>(`?page=${page}&limit=10`);
    }
    getMyExibits() {
        return this.get("/my-posts");
    }
    addNewExibit(data: Object) {
        return this.post("/", data);
    }
    deleteExibit(id: number) {
        return this.delete(`/${id}`, {});
    }
}


const exhibitsApi = new ExhibitsApi('api/exhibits');
export default exhibitsApi;