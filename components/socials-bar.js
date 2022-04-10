import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TikTokIcon from "../public/images/tiktok-icon.svg";
import { Icon, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
import socials from '../types/socials.json';

const iconButtonSx = {
    paddingRight: 0
};

export default function SocialsBarComponent() {
    return (
        <Box>
            <IconButton sx={iconButtonSx}>
                <Link button="true" href={socials.facebook} target="_blank">
                    <FacebookIcon color="secondary" />
                </Link>
            </IconButton>
            <IconButton sx={iconButtonSx}>
                <Link button="true" href={socials.instagram} target="_blank">
                    <InstagramIcon color="secondary" />
                </Link>
            </IconButton>
            <IconButton sx={iconButtonSx}>
                <Link button="true" href={socials.youtube} target="_blank">
                    <YouTubeIcon color="secondary" />
                </Link>
            </IconButton>
            <IconButton sx={iconButtonSx}>
                <Link button="true" href={socials.tiktok} target="_blank">
                    <Icon>
                        <img src={TikTokIcon.src} height="24" width="24" alt="TikTok social" />
                    </Icon>
                </Link>
            </IconButton>
        </Box>
    );
}
