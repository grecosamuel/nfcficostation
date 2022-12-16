import { Box, Typography } from "@mui/material";

export default function Welcome(){
    return(
        <Box height='100vh' display='flex' flexDirection='column' justifyContent={'space-evenly'}>
            <Box border='2px solid red'>
                <img src='/targhetta.png' width='100%' alt="FICOSTATION"/>
            </Box>

            <Box border='2px solid green'>
                <Typography variant="h4" textAlign='center' fontFamily={'Bright Young'}>
                    Welcome into the line
                </Typography>
            </Box>

            <Box border='2px solid green' display={'flex'} justifyContent={'center'}>
                <img src='/ficostation_logo_train.png'  width={128} height={128} alt="TRAIN"/>
            </Box>
        </Box>
    );
}