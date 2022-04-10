import { Divider, Grid, Typography } from '@mui/material';

export default function News({ newsIds }) {
    return (
        <Grid container sx={{ padding: { xs: 0.5, sm: 3 } }}>
            <Grid item xs={12} paddingX={1} paddingY={2} textAlign="center">
                <Typography variant="h3" color="primary">
                    Aktualności
                </Typography>
                <Divider />
            </Grid>
            
            <Grid container direction="row" justifyItems="left" justifyContent="left">
                {newsIds.map(ids =>
                    <Grid item xs={12} md={6} lg={4} padding={1} key={ids.postId}>
                        <div className="fb-post" data-href={`https://www.facebook.com/${ids.fanpageId}/posts/${ids.postId}`}></div>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}
