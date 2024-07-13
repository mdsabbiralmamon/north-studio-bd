import React from 'react';

interface BannerProps {
    banner_title: string;
    bannerImg: any;
}

const Banner: React.FC<BannerProps> = (props) => {
    const { banner_title, bannerImg } = props;

    const bannerStyle: React.CSSProperties = {
        backgroundImage: `linear-gradient(180deg, rgba(3, 7, 18, 0.90) 0%, rgba(3, 7, 18, 0.50) 100%), url(${bannerImg.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div>
            <h2 className='h-[545px] text-white flex justify-center items-center text-5xl font-extrabold' style={bannerStyle}>{banner_title}</h2>
        </div>
    );
};

export default Banner;
