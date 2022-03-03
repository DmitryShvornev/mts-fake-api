/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../header/header";
import Copyright from '../copyright/copyright';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UsersStore from "../../stores/users-store/users-store";
import { useEffect } from "react";
import { observer, inject } from "mobx-react";

type Props = {
    usersStore: UsersStore,
}

function Users({usersStore}: Props): JSX.Element {
    const { users, fetchUsersAction } = usersStore;
    useEffect(() => {
        fetchUsersAction();
    }, []);
    return (
        <>
            <Header />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, mt: 3 }} aria-label="users table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{item.email}</TableCell>
                                <TableCell align="right">{item.phone}</TableCell>
                                <TableCell align="right">{item.company.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
    );
}

export { Users }
export default inject("usersStore")(observer(Users));