import { Divider, Grid, Typography } from '@mui/material';
import MediaCard from '../components/media-card';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const NewsBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: "flex",
        justifyContent: "center",
        justifyItems: "center"
    },
}));

export default function News() {
    return (
        <Grid container padding={3}>
            <Grid item xs={12} padding={2}>
                <NewsBox>
                    <Typography variant="h3">
                        Aktualności
                    </Typography>
                </NewsBox>
                <Divider />
            </Grid>

            <Grid container direction="row" justifyItems="center" justifyContent="center">
                {
                    [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3} padding={2} >
                            <MediaCard />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}