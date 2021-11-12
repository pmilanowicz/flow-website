import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TikTokIcon from "../public/images/tiktok-icon.svg";
import { Icon, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";

export default function SocialsBarComponent() {
    return (
        <Box sx={{ md: 'flex' }}>
            <IconButton>
                <Link button="true" href="https://www.facebook.com/flow.ultimate.wroclaw" target="_blank">
                    <FacebookIcon color="secondary" />
                </Link>
            </IconButton>
            <IconButton>
                <Link button="true" href="https://www.instagram.com/flow.ultimate.wroclaw" target="_blank">
                    <InstagramIcon color="secondary" />
                </Link>
            </IconButton>
            <IconButton>
                <Link button="true" href="https://www.youtube.com/channel/UC4VEw8F4FiY1qYOlajQtXGQ" target="_blank">
                    <YouTubeIcon color="secondary" />
                </Link>
            </IconButton>
            <IconButton>
                <Link button="true" href="https://www.tiktok.com/@flowultimatewroclaw" target="_blank">
                    <Icon>
                        <img src={TikTokIcon.src} height={24} width={24}/>
                    </Icon>
                </Link>
            </IconButton>
        </Box>
    );
}