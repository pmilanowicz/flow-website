import Image from 'next/image';

export default function MainImage({ imgSrc }) {
    return (<Image src={imgSrc} layout="responsive" priority />)
}