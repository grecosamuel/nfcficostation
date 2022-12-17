import React from 'react';
import Targhetta from './components/Targhetta';
import {
    Box, Card
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function List(){

    const cards = [
        {
            title: 'Salva numero',
            icon: '/nfcficostation/smartphone.svg',
            href: 'tel:+393899568659'
        },
        {
            title: 'Whatsapp',
            icon: '/nfcficostation/whatsapp.svg',
            href: 'https://wa.me/+393899568659'
        },
        {
            title: 'Drink List',
            icon: '/nfcficostation/drink.svg',
            href: 'https://ficostation.it/wp-content/uploads/2022/11/Drink-List.pdf'
        },
        {
            title: 'Food',
            icon: '/nfcficostation/restaurant-cutlery.svg',
            href: 'https://ficostation.it/wp-content/uploads/2022/11/Menu-Food.pdf'
        },
        {
            title: 'Wine',
            icon: '/nfcficostation/wine-glass.svg',
            href: 'https://ficostation.it/wp-content/uploads/2022/11/Wine.pdf'
        },
        {
            title: 'Aperitive',
            icon: '/nfcficostation/food.svg',
            href: 'https://ficostation.it/wp-content/uploads/2022/11/Aperitivi.pdf'
        },
        {
            title: 'Instagram',
            icon: '/nfcficostation/instagram.svg',
            href: 'https://instagram.com/ficostation'
        },
        {
            title: 'Website',
            icon: '/nfcficostation/website.svg',
            href: 'https://ficostation.it'
        },


        
    ]

    return(
        <Box height='100vh' display='flex' flexDirection='column' justifyContent={'flex-start'} backgroundColor='#21201f'>
            <Targhetta />

            <Box overflow={'scroll'} marginBottom={5}>
                {
                    cards.map( card => {
                        return (
                            <Card
                                onClick={(e) => {
                                    window.open(card.href, '_blank')
                                }}
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    margin: 4, 
                                    backgroundColor: '#eb4034',
                                    color: '#fff',
                                    borderRadius: 2
                                    }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto'}}>
                                        <Typography component="div" variant="h5" fontSize={24} fontFamily={'Bright Young'}>
                                            {card.title}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingRight: 2
                                }}>
                                    <CardMedia
                                        component="span"
                                        sx={{ width: 48, height: 48}}
                                        image={card.icon}
                                        alt="Live from space album cover"
                                    />
                                </Box>
                            </Card>
                        );
                    })
                }
                
            </Box>

        </Box>
    );
}