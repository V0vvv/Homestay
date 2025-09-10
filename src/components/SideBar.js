import React from 'react';
import comfortImg from '../assets/logo/1.png';
import modernImg from '../assets/logo/3.png';
import availableImg from '../assets/logo/4.png';
import luxuryImg from '../assets/logo/Untitled.png';
import backgroundImg from '../assets/logo/2.png';

const features = [
  {
    title: 'Ẩm Thực',
    text: '',
    image: comfortImg,
    link: '/comfortable'
  },
  {
    title: 'Văn Hóa',
    text: '',
    image: modernImg,
    link: '/modern'
  },
  {
    title: 'Sản Phẩm',
    text: '',
    image: availableImg,
    link: '/available'
  },
  {
    title: 'Lưu trữ',
    text: '',
    image: luxuryImg,
    link: '/luxury'
  }
];

const SideBar = () => {
  return (
    <div style={{
      height: '30vh',
      width: '100%',
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '3vh',
      paddingBottom: '3vh',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        color: 'white'
      }}>
        {features.map((item, index) => (
          <div key={index} style={{
            textAlign: 'center',
            width: '22%'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0 auto 10px'
            }} />
            <a href={item.link} style={{
              display: 'block',
              fontWeight: 'bold',
              margin: '5px 0',
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = '#c084fc'}
              onMouseLeave={e => e.target.style.color = 'white'}
            >
              {item.title}
            </a>
            <p style={{
              fontSize: '0.8rem',
              margin: 0,
              padding: 0
            }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
