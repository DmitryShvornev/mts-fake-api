/* eslint-disable react-hooks/exhaustive-deps */
import List from '@mui/material/List';
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from "react";
import { observer } from "mobx-react";
import { useStores } from '../../stores/root-store/root-store';
import { Typography } from '@mui/material';


function Posts(): JSX.Element {
    const { postsStore } = useStores();
    const findRelativeComments = (postId: number) => postsStore.comments.filter((item) => item.id === postId);
    const findRelativeUser = (userId: number) => postsStore.users.find((item) => item.id === userId);
    useEffect(() => {
        postsStore.fetchPostsAction();
    }, []);

    return (postsStore.isDataLoaded ?
        <List sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper', mt: 2 }}>
            { postsStore.posts.map((item) => (
                <React.Fragment key={item.id}>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItemText sx={{ display: 'block' }}
                            primary={item.title + ` BY ${findRelativeUser(item.userId)?.email}`}
                            secondary={item.body}
                        />
                        <List sx={{ width: 330, bgcolor: 'background.paper', ml: 3 }}>
                            {
                                findRelativeComments(item.id).map((comment) => (
                                    <ListItem key={comment.id}>
                                        <ListItemText
                                            primary={comment.email}
                                            secondary={comment.body}
                                        />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </ListItem>
                    <Divider />
                </React.Fragment>
            )) }
        </List> : <Typography variant="h2" component="h3" sx={{ textAlign: 'center', mt: 5 }}>Loading...</Typography>
    );
}

export { Posts }
export default observer(Posts);