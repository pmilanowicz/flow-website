import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box } from '@mui/system';

export default function ImgMediaCard({ imgSrc, header, body, href }) {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Card sx={{ width: "100%"}}>
                <CardMedia>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={require(`../public/images/news/${imgSrc}`)} layout="intrinsic" objectFit="cover" />
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {header}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="primary" href={href} target="_blank">Pokaż więcej</Button>
                </CardActions>
            </Card>
        </Box>
    );
}