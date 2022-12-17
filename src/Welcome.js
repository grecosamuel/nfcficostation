import { Box, Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import Targhetta from "./components/Targhetta";
import React, {  useState } from 'react';
import Video from "./Video";

import List from "./List";
export default function Welcome(){

    const [displayVideo, setDispalyVideo] = useState('none');

    return(

        <Box height='100vh' display='flex' flexDirection='column' justifyContent={'space-evenly'} backgroundColor='#21201f'>

            <Targhetta />
            

            <Box>
                <Typography variant="h4" textAlign='center' color='#fff' fontFamily={'Bright Young'}>
                    <TypeAnimation
                    sequence={[
                        'Welcome into the line', 1000, 'Take the train', 3000
                    ]}
                    speed={20}
                    repeat={Infinity}
                    />
                    
                </Typography>
            </Box>

            <Box display={'flex'} justifyContent={'center'}>
                
                <img src='/nfcficostation/ficostation_logo_train.png'  width={128} height={128} alt="TRAIN" onClick={(e) => {
                    window.history.pushState('test', null)
                    setDispalyVideo('block');
                    document.getElementById('videoIntro').play();
                }}
                />

            </Box>
            <Video display={displayVideo} setDisplay={setDispalyVideo}/>
        </Box>

    );
}