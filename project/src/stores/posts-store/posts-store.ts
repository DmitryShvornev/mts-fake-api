import { action, observable, runInAction } from 'mobx';
import axios from 'axios';
import RootStore from '../root-store/root-store';

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default class PostsStore {
    rootStore:  RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
    @observable posts: Post[] = [];
    @action fetchPostsAction = async () => {
        const { data } = await axios.get<Post[]>("http://localhost:3001/posts");
        runInAction(() => {
            this.posts = data;
        });
    };
}
