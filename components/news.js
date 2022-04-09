import { Divider, Grid, Typography } from '@mui/material';
import MediaCard from '../components/media-card';
import newsList from '../types/news.json';

const sortedNewsList = newsList.news.sort((a, b) => new Date(b.date) - new Date(a.date));

export default function News() {
    return (
        <Grid container sx={{padding: { xs: 0.5, sm: 3 }}}>
            <Grid item xs={12} paddingX={1} paddingY={2} textAlign="center">
                <Typography variant="h3" color="primary">
                    Aktualności
                </Typography>
                <Divider />
            </Grid>

            {/* Image height/width ratio = 0,664893617021277 */}
            <Grid container direction="row" justifyItems="left" justifyContent="left">
              {/*<Grid item xs={12} md={6} lg={4} padding={1}>*/}
              {/*  <div className="fb-post" style={{textAlign: 'center'}} data-href="https://www.facebook.com/flow.ultimate.wroclaw/posts/5538224312889064"></div>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} md={6} lg={4} padding={1}>*/}
              {/*  <div className="fb-post" data-href="https://www.facebook.com/flow.ultimate.wroclaw/posts/5538224312889064"></div>*/}
              {/*</Grid>*/}
                {sortedNewsList.map(({ header, body, imgSrc, date, href }, index) =>
                    <Grid item xs={12} md={6} lg={4} padding={2} key={index}>
                        <MediaCard
                            header={header}
                            body={body}
                            imgSrc={imgSrc}
                            href={href}
                        />
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}
