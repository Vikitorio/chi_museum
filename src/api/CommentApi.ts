import type CommentInterface from "../interfaces/commentInterface";
import ApiWrapper from "./ApiWrapper";

class CommentApi extends ApiWrapper {

    constructor(rootUrl: string) {
        super(rootUrl);
    }
    async getComments(postId: number) {
        const response = await this.get<CommentInterface[]>(`/${postId}/comments`);
        return response.data;
    }
    async addComment(data: { text: string }) {
        return this.post("/my-posts", data);
    }
    async deleteComment(id: number) {
        return this.delete(`/${id}`, {});
    }
}


const commentApi = new CommentApi('api/exhibits');
export default commentApi;