import ApiWrapper from "./ApiWrapper";

class ExhibitsApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    getExibits() {
        return this.get("/");
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


const exhibitsApi = new ExhibitsApi('api/exibits');
export default exhibitsApi;