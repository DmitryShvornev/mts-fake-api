import React from "react";
import UsersStore from "../../stores/users-store/users-store";
import PostsStore from "../../stores/posts-store/posts-store";

class RootStore {
    usersStore: UsersStore;
    postsStore: PostsStore;
    constructor() {
      this.usersStore = new UsersStore(this);
      this.postsStore = new PostsStore(this);
    }
}   

export const StoresContext = React.createContext(new RootStore());
export const useStores = () => React.useContext(StoresContext);

export default RootStore;