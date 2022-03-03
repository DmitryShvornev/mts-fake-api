import { action, observable, runInAction } from 'mobx';
import axios from 'axios';
import RootStore from '../root-store/root-store';

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
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
      }
    @observable users : User[] = [];
    @action fetchUsersAction = async() => {
        const {data} = await axios.get<User[]>("http://localhost:3001/users");
        runInAction(() => {
            this.users = data;
        });
    };
}

export default UsersStore;