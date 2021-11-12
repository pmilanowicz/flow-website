import Image from 'next/image';
import FlowBanner from '../public/images/homepage.png';

export default function MainImage() {
    return (<Image src={FlowBanner} layout="responsive" priority />)
}