import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../utils/theme';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() : JSX.Element {

    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                        <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontStyle: 'bold'}}
                            >
                                MTS Fake API
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button
                                    key="posts"
                                    onClick={() => navigate("/")}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Posts
                                </Button>
                                <Button
                                    key="users"
                                    onClick={() => navigate("/users")}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Users
                                </Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

