import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";

export default function SocialsBarComponent() {
    return (
        <Box sx={{ md: 'flex' }}>
            <IconButton>
                <Link button="true" href="https://facebook.com" target="_blank">
                    <FacebookIcon color="secondary" />
                </Link>
            </IconButton>
            <IconButton>
                <Link button="true" href="https://instagram.com" target="_blank">
                    <InstagramIcon color="secondary" />
                </Link>

            </IconButton>
            <IconButton>
                <Link button="true" href="https://youtube.com" target="_blank">
                    <YouTubeIcon color="secondary" />
                </Link>
            </IconButton>
        </Box>
    );
}