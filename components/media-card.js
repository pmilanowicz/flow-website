import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box } from '@mui/system';

export default function ImgMediaCard() {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src="https://mui.com/static/images/cards/contemplative-reptile.jpg" layout="fill" objectFit="cover" />
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Jaszczurki
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Grupa gadów łuskonośnych obejmująca czworonożne lub beznogie zwierzęta lądowe o wydłużonym ciele, oczach posiadających powieki, mocnych szczękach i diapsydalnej czaszce
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="primary">Pokaż więcej</Button>
                </CardActions>
            </Card>
        </Box>
    );
}