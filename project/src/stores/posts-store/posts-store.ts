import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import RootStore from '../root-store/root-store';
import { User } from '../users-store/users-store';
import { APIRoute } from '../../utils/const';

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface Comment {
    postId: number,
    id: number,
    email: string,
    body: string,
}

export default class PostsStore {
    rootStore: RootStore;
    posts: Post[] = [];
    comments: Comment[] = [];
    users: User[] = [];
    isDataLoaded: boolean = false;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }
    async fetchPostsAction() {
        await axios.get<Post[]>(APIRoute.Posts).then((response) => {
            runInAction(() => {
                this.posts = response.data;
            });
        });
        await axios.get<Comment[]>(APIRoute.Comments).then((response) => {
            runInAction(() => {
                this.comments = response.data;
            });
        });
        await axios.get<User[]>(APIRoute.Users).then((response) => {
            runInAction(() => {
                this.users = response.data;
            });
        });
        this.isDataLoaded = true;
    };
}
