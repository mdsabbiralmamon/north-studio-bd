
import React from 'react';
import './Parallax.css';
import { FaHome } from 'react-icons/fa';

interface ParallaxProps {
  backgroundImage: string;
  title?: string;
  content?: string;
  info1?: { icon: JSX.Element; count: string; title: string };
  info2?: { icon: JSX.Element; count: string; title: string };
  info3?: { icon: JSX.Element; count: string; title: string };
  info4?: { icon: JSX.Element; count: string; title: string };
}

const Parallax: React.FC<ParallaxProps> = ({  backgroundImage, title, content, info1, info2, info3, info4  }) => {
  return (
    <div className="parallax-container">
      <div
        className="parallax-background"
        style={{
            backgroundImage: `linear-gradient(180deg, rgba(3, 7, 18, 0.50) 70%, rgba(3, 7, 18, 0.00) 100%), url(${backgroundImage})`
          }}
      ></div>
      <div className="parallax-content">
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {info1 && (
            <div className='flex flex-col justify-center items-center'>
              {info1.icon}
              <h2 className='text-5xl font-extrabold my-4'>{info1.count}</h2>
              <p>{info1.title}</p>
            </div>
          )}
          {info2 && (
            <div className='flex flex-col justify-center items-center'>
              {info2.icon}
              <h2 className='text-5xl font-extrabold my-4'>{info2.count}</h2>
              <p>{info2.title}</p>
            </div>
          )}
          {info3 && (
            <div className='flex flex-col justify-center items-center'>
              {info3.icon}
              <h2 className='text-5xl font-extrabold my-4'>{info3.count}</h2>
              <p>{info3.title}</p>
            </div>
          )}
          {info4 && (
            <div className='flex flex-col justify-center items-center'>
              {info4.icon}
              <h2 className='text-5xl font-extrabold my-4'>{info4.count}</h2>
              <p>{info4.title}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Parallax;
