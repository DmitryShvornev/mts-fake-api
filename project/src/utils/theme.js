import {
    createTheme
} from '@mui/material/styles';
import {
    red,
    orange,
    grey
} from '@mui/material/colors';

const PRIMARY_MAIN_INDEX = 600;
const SECONDARY_MAIN_INDEX = 500;
const PRIMARY_CONTRAST_TEXT_INDEX = 50;
const SECONDARY_CONTRAST_TEXT_INDEX = 900;

export const theme = createTheme({
    palette: {
        primary: {
            main: red[PRIMARY_MAIN_INDEX],
            contrastText: grey[PRIMARY_CONTRAST_TEXT_INDEX]
        },
        secondary: {
            main: orange[SECONDARY_MAIN_INDEX],
            contrastText: grey[SECONDARY_CONTRAST_TEXT_INDEX]
        }
    }
});