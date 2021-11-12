import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TikTokIcon from "../public/images/tiktok-icon.svg";
import { Icon, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    iconButton: {
        paddingRight: theme.spacing(0.5),
        "&:last-child": {
            paddingRight: 0
        }
    }
}));

export default function SocialsBarComponent() {
    const classes = useStyles();

    return (
        <Box sx={{ md: 'flex' }}>
            <IconButton className={classes.iconButton} >
                <Link button="true" href="https://www.facebook.com/flow.ultimate.wroclaw" target="_blank">
                    <FacebookIcon color="secondary" className={classes.iconComponent} />
                </Link>
            </IconButton>
            <IconButton className={classes.iconButton}>
                <Link button="true" href="https://www.instagram.com/flow.ultimate.wroclaw" target="_blank">
                    <InstagramIcon color="secondary" className={classes.iconComponent} />
                </Link>
            </IconButton>
            <IconButton className={classes.iconButton}>
                <Link button="true" href="https://www.youtube.com/channel/UC4VEw8F4FiY1qYOlajQtXGQ" target="_blank">
                    <YouTubeIcon color="secondary" className={classes.iconComponent} />
                </Link>
            </IconButton>
            <IconButton className={classes.iconButton}>
                <Link button="true" href="https://www.tiktok.com/@flowultimatewroclaw" target="_blank">
                    <Icon>
                        <img src={TikTokIcon.src} height="24" width="24" />
                    </Icon>
                </Link>
            </IconButton>
        </Box>
    );
}