import { Typography } from "@mui/material";
import Header from "../header/Header";
import Copyright from '../copyright/Copyright';
import Container from '@mui/material/Container';

export default function Main() : JSX.Element {
    return (
        <>
            <Header />
            <Container component="main">
                <Typography
                    component="h1"
                    variant="h3"
                    sx={{ textAlign: 'center', mt: 5 }}
                >
                    Posts
                </Typography>
                <Typography
                    component="h3"
                    variant="h6"
                    sx={{ textAlign: 'center', mt: 3 }}
                >
                    Here posts data is displayed
                </Typography>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    );
}