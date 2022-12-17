import React, { useEffect, useRef } from "react";
import {
    Box, Button, Typography
} from '@mui/material';

export default function Video({ display, setDisplay }){
    //const [hasPlayed, setHasPlayed] = useState(false);

    const videoRef = useRef(null);

    useEffect( () => {
        window.addEventListener('popstate', function(){
            setDisplay('none');
            const video = document.getElementById('videoIntro');
            video.pause();
            video.currentTime = 0;
        })
    }, [])


    const handlePlay = () => {
      const elem = videoRef.current;
      if (elem) {
        if (elem.webkitRequestFullScreen){
            elem.webkitRequestFullScreen();
        }
      }
    };

    const handleEnd = () => {
        setDisplay('none')
        window.location.href = '/nfcficostation/list'
    }

    return(
        <Box  width='100vw' height='100vh' position='absolute' display={display}>
            <Button position='absolute'><Typography fontFamily={'Bright Young'} color={'#e62e1f'} onClick={(e) => {
                window.location.href = '/nfcficostation/list'
            }}>Salta</Typography></Button>
            <video id="videoIntro" controls className="videoIntro" width={'100%'}  ref={videoRef} onPlay={handlePlay} onEnded={handleEnd}>
                <source src="/nfcficostation/introvideo.mp4" type="video/mp4"/>
            </video>
        </Box>
    );
}