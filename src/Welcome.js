import { Box, Typography } from "@mui/material";

export default function Welcome(){
    return(
        <Box height='100vh' display='flex' flexDirection='column'>
            <Box border='2px solid red'>
                <img src='/targhetta.png' width='100%'/>
            </Box>

            <Box border='2px solid green'>
                <Typography variant="h5" textAlign='center'>
                    Welcome into the line
                </Typography>
            </Box>
        </Box>
    );
}