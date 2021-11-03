import Image from 'next/image';
import FlowBanner from '../public/images/homepage.jpeg';

export default function MainImage() {
    return (<Image src={FlowBanner} layout="responsive" priority />)
}