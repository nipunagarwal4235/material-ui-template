import { createTheme } from '@mui/material/styles';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

export default createTheme({
    palette:
    {
        common:
        {
            blue:`${arcBlue}`,
            orange:`${arcOrange}`
        },
        primary:
        {
            main:`${arcBlue}`
        },
        secondary:{
            main:`${arcOrange}`
        }
    }

  });