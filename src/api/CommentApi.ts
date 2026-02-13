import ApiWrapper from "./ApiWrapper";

class CommentApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    getComments(postId: number) {
        return this.get(`/${postId}/comments`);
    }
    addComment(data: { text: string }) {
        return this.post("/my-posts", data);
    }
    deleteComment(id: number) {
        return this.delete(`/${id}`, {});
    }
}


const commentApi = new CommentApi('api/exibits');
export default commentApi;