import * as React from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { teal } from '@mui/material/colors';

const CustomTypographyHeader6 = styled(Typography)(({ theme }) => ({
    color: teal[500],
    fontSize: '1.2em'
}));

function GlobalTealHeader6(props) {
    return (
        <CustomTypographyHeader6 variant='h6'>{props.text}</CustomTypographyHeader6>
    );
};

export default GlobalTealHeader6;