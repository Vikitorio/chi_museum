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
  async addComment(exhibitId: number, data: { text: string }) {
    return await this.post(`/${exhibitId}/comments`, data);
  }
  async deleteComment(postId: number, id: number) {
    return await this.delete(`/${postId}/comments/${id}`, {});
  }
}

const commentApi = new CommentApi("api/exhibits");
export default commentApi;
