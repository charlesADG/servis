import * as React from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const CustomTypographyHeader6 = styled(Typography)(({ theme }) => ({
    color: grey[900],
    fontSize: '1.2em'
}));

function GlobalBlackHeader6(props) {
    return (
        <CustomTypographyHeader6 variant='h6' sx={props.sx}>{props.text}</CustomTypographyHeader6>
    );
};

export default GlobalBlackHeader6;