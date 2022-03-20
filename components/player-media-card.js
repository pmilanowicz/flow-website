
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography, Grid } from '@mui/material';

const createImageComponent = (imgSrc) => {
    return (
        <CardMedia>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image src={require(`../public/images/roster/${imgSrc}`)} layout="intrinsic" objectFit="contain" />
            </div>
        </CardMedia>
    )
}

export const PlayerMediaCard = ({ imgSrc, name, nickname, number, position, yearOfJoining, yearOfBirth, funFact }) => {
    const yearsOfPlaying = new Date().getFullYear() - yearOfJoining;

    let imageComponent = null;
    try {
        imageComponent = createImageComponent(imgSrc);
    } catch (e) {
        imageComponent = createImageComponent('number-placeholder.png');
    }

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Card sx={{ width: "100%" }}>
                {imageComponent}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>

                    {/* <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="caption">Pseudonim</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">{nickname}</Typography>
                        </Grid>
                    </Grid> */}

                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="caption">Rocznik</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">{yearOfBirth}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="caption">Pozycja</Typography>
                            </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">{position}</Typography>
                        </Grid>
                    </Grid>


                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="caption" sx={{ mr: 2 }}>Numer</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">{number}</Typography>
                        </Grid>
                    </Grid>


                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="caption" sx={{ mr: 2 }}>Staż we Flow</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">{convertYearsToString(yearsOfPlaying)}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

const convertYearsToString = (years) => {
    if (years <= 0) {
        return '< 1 rok';
    }

    if (years === 1) {
        return '1 rok';
    }

    if (years > 1 && years < 5) {
        return `${years} lata`;
    }

    return `${years} lat`;
}