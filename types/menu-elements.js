import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WavesIcon from '@mui/icons-material/Waves';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

export const MenuElements = [
    {
        title: 'Strona główna',
        href: '/',
        iconComponent: HomeIcon
    },
    {
        title: 'O nas',
        href: '/o-nas',
        iconComponent: WavesIcon
    },
    {
        title: 'Drużyna',
        href: '/druzyna',
        iconComponent: PeopleIcon
    },
    {
        title: 'Współpraca',
        href: '/wspolpraca',
        iconComponent: BusinessCenterIcon
    },
    {
        title: 'Kontakt',
        href: '/kontakt',
        iconComponent: CallIcon
    }
];