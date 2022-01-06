
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const PlayerMediaCard = ({ imgSrc, name, nickname, number, position, yearOfJoining, funFact }) => {
    const yearsOfPlaying = new Date().getFullYear() - yearOfJoining;

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Card sx={{ width: "100%" }}>
                <CardMedia>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={require(`../public/images/roster/${imgSrc}`)} layout="intrinsic" objectFit="contain" />
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                        <Box>
                            <Typography variant="caption" sx={{mr: 2}}>Pseudonim</Typography>
                            <Typography variant="button">{nickname}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{mr: 2}}>Pozycja</Typography>
                            <Typography variant="button">{position}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{mr: 2}}>Numer</Typography>
                            <Typography variant="button">{number}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{mr: 2}}>Staż we Flow</Typography>
                            <Typography variant="button">{yearsOfPlaying} lat</Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{mr: 2}}>Fun fact</Typography>
                            <Typography variant="button">{funFact}</Typography>
                        </Box>
                </CardContent>
            </Card>
        </Box>
    );
}