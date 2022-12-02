import bannerImage from '../../assets/banners/banner-1.png'
const Hero = () => {
    return (
        <>
        <div style={{width: '100%'}}>
            <img style={{width: '100%', height: 'auto', objectFit: 'cover'}} src={bannerImage} alt="" />
        </div>
        </>
    )
}

export default Hero;