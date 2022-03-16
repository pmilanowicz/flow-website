
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const PlayerMediaCard = ({ imgSrc, name, nickname, number, position, yearOfJoining, yearOfBirth, funFact }) => {
    const yearsOfPlaying = new Date().getFullYear() - yearOfJoining;
    const age = new Date().getFullYear() - yearOfBirth;

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

                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="caption">Pseudonim</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">{nickname}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="caption">Wiek</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">{convertYearsToString(age)}</Typography>
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
                            <Typography variant="caption">Numer</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="button">{number}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="caption">Staż we Flow</Typography>
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