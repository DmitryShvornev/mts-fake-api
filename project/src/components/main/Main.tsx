import Header from "../header/header";
import Copyright from '../copyright/copyright';
import Container from '@mui/material/Container';
import Posts from "../posts/posts";

export default function Main() : JSX.Element {
    return (
        <>
            <Header />
            <Container component="main">
                <Posts/>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            
        </>
    );
}