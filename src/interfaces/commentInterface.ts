export default interface CommentInterface {
    id: number,
    text: string,
    createdAt: string,
    user: {
        id: number,
        username: string
    }
}