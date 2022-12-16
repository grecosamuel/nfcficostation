import { Box, Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import Targhetta from "./components/Targhetta";
import React, {  useState } from 'react';
import Video from "./Video";
export default function Welcome(){

    const [displayVideo, setDispalyVideo] = useState('none');

    return(
        <Box height='100vh' display='flex' flexDirection='column' justifyContent={'space-evenly'}>

            <Targhetta />
            

            <Box border='2px solid green'>
                <Typography variant="h4" textAlign='center' fontFamily={'Bright Young'}>
                    <TypeAnimation
                    sequence={[
                        'Welcome into the line'
                    ]}
                    speed={20}
                    />
                    
                </Typography>
            </Box>

            <Box  border='2px solid green' display={'flex'} justifyContent={'center'}>
                <img src='/ficostation_logo_train.png'  width={128} height={128} alt="TRAIN" onClick={(e) => {
                    window.history.pushState('test', null)
                    setDispalyVideo('block');
                    document.getElementById('videoIntro').play();
            }}/>
            </Box>
            <Video display={displayVideo} setDisplay={setDispalyVideo}/>
        </Box>

    );
}