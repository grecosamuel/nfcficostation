import  React from 'react';
import {
    Box
} from '@mui/material';
export default function Targhetta(){
    return (
        <Box>
                <img src='/targhetta.png' width='100%' alt="FICOSTATION" onClick={(e) => {
                    window.location.href = '/'
                }}/>
            </Box>
    );
}