import { runInAction, makeAutoObservable } from 'mobx';
import axios from 'axios';
import RootStore from '../root-store/root-store';
import { APIRoute } from '../../utils/const';

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }

}

class UsersStore {
    rootStore: RootStore;
    users: User[] = [];
    isDataLoaded: boolean = false;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }
    async fetchUsersAction () {
        const { data } = await axios.get<User[]>(APIRoute.Users);
        runInAction(() => {
            this.users = data;
            this.isDataLoaded = true;
        });
    };
}

export default UsersStore;