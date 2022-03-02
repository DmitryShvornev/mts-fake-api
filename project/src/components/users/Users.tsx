import Header from "../header/Header";
import Copyright from '../copyright/Copyright';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id: number, name: string, email: string, phone: string, company: string) {
    return { id, name, email, phone, company };
}

const rows = [
    createData(1, "Sara", "sara@gmail.com", "1(234)5678", "Apple"),
    createData(2, "John", "john@gmail.com", "1(234)5678", "Microsoft"),
    createData(3, "James", "james@gmail.com", "1(234)5678", "Intel"),
    createData(4, "Ivan", "ivan@gmail.com", "1(234)5678", "Google"),
    createData(5, "Dmitry", "dmitry@gmail.com", "1(234)5678", "Yandex"),
];

export default function Users(): JSX.Element {
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.company}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
    );
}