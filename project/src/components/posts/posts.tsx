/* eslint-disable react-hooks/exhaustive-deps */
import List from '@mui/material/List';
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import PostsStore from '../../stores/posts-store/posts-store';
import { useEffect } from "react";
import { observer, inject } from "mobx-react";

type Props = {
    postsStore: PostsStore,
}

function Posts({postsStore}:Props): JSX.Element {
    const { posts, fetchPostsAction } = postsStore;
    useEffect(() => {
        fetchPostsAction();
    }, []);
    return (
        <List sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper', mt: 2 }}>
            {posts.map((item) => (
                <React.Fragment key={item.id}>
                    <ListItem>
                        <ListItemText
                            primary={item.title}
                            secondary={item.body}
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            ))}
        </List>
    );
}

export { Posts }
export default inject("postsStore")(observer(Posts));