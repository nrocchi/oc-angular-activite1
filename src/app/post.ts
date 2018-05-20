export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: any;

    constructor(title, content){
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.created_at = new Date();
    }
}