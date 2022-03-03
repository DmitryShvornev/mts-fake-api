import { action, observable } from 'mobx';

interface user {
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

export default class UsersStore {
    @observable users : user[] = [];
    @action fetchUsersAction = async () => {
        this.users = await fetch("/users");
    };
}