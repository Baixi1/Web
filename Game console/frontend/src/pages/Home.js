import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './style/Home.scss';

const Slider = ({ slides }) => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;
  
  let changeTO = null;
  
  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  
  useEffect(() => {
    runAutochangeTO();
    setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);
    
    return () => {
      clearTimeout(changeTO);
    };
  }, []);
  
  const runAutochangeTO = () => {
    changeTO = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO();
    }, AUTOCHANGE_TIME);
  };
  
  const changeSlides = (change) => {
    clearTimeout(changeTO);
    const length = slides.length;
    const prevSlide = activeSlide;
    let newActiveSlide = prevSlide + change;
    if (newActiveSlide < 0) newActiveSlide = length - 1;
    if (newActiveSlide >= length) newActiveSlide = 0;
    setActiveSlide(newActiveSlide);
    setPrevSlide(prevSlide);
  };
  
  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      <p className="slider__top-heading">CONSOLE</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames('slider__slide', {
              's--active': activeSlide === index,
              's--prev': prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h2 className="slider__slide-heading">
              {slide.city.split('').map((l, i) => (
                <span key={i}>{l}</span>
              ))}
              </h2>
              <h3 className="slider__slide-subheading">{slide.Model || slide.city}</h3>
              {/* <p className="slider__slide-readmore">read more</p> */}
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS)].map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }}/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
    </div>
  );
};
//style={{ backgroundImage: `${slide.img}`  }}

const slides = [
  {
    city: 'GEN1 (1970-1980)',
    Model: 'Magnavox Odyssesy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Magnavox-Odyssey-Console-Set.jpg/220px-Magnavox-Odyssey-Console-Set.jpg',
  },
  {
    city: 'GEN2 (1976-1992)',
    Model: 'Atari 2600',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Atari2600a.JPG/200px-Atari2600a.JPG',
  },
  {
    city: 'GEN3 (1983-2003)',
    Model: 'Game Boy',
    img: 'https://images.droidsans.com/wp-content/uploads/2021/09/nintendo-switch-game-boy-color-nso-leak-01.jpg',
  },
  {
    city: 'GEN4 (1987-2004)',
    Model: 'SNES, Genesis',
    img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500,h_215/http://obsoletegamer.com/wp-content/uploads/2011/10/snes-sega1.jpg',
  },
  {
    city: 'GEN5 (1993-2006)',
    Model: 'PlayStation',
    img: 'https://www.techhub.in.th/wp-content/uploads/2018/09/PlayStation-SCPH-1000-with-Controller-696x303.jpg',
  },
  {
    city: 'GEN6 (1998-2013)',
    Model: 'PlayStation 2, Game Boy Advance	',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nintendo-Game-Boy-Advance-Purple-FL.jpg/300px-Nintendo-Game-Boy-Advance-Purple-FL.jpg',
  },
  {
    city: 'GEN7 (2005-2017)',
    Model: 'Nintendo DS, Wii',
    img: 'https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinny/33a47c680c7109b4012158a2633ccc9a.jpg',
  },
  {
    city: 'GEN8 (2012-Present)',
    Model: 'PlayStation 4, Nintendo Switch',
    img: 'https://www.appdisqus.com/wp-content/uploads/2018/10/PS4-Nintendo-Switch.jpg',
  },
  {
    city: 'GEN9 (2020-Present)',
    Model: 'PlayStation 5, Xbox Series X/S',
    img: 'https://api.time.com/wp-content/uploads/2020/11/xbox-playstation-microsoft-sony.jpg?quality=85&w=800',
  },
];

const slides1 = [
  {
    city: 'PlayStation',
    Model: '1995',
    img: 'https://www.techhub.in.th/wp-content/uploads/2018/09/PlayStation-SCPH-1000-with-Controller-696x303.jpg',
  },
  {
    city: 'PlayStation 2',
    Model: '2000',
    img: 'https://m.media-amazon.com/images/I/61pETE6v4vL._SX425_.jpg',
  },
  {
    city: 'PlayStation Portable',
    Model: '2004',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Psp-1000.jpg/220px-Psp-1000.jpg',
  },
  {
    city: 'PlayStation 3',
    Model: '2006',
    img: 'https://www.dailygizmo.tv/wp-content/uploads/2017/05/121220092755-playstation-3-slim-1440x907.jpg',
  },
  {
    city: 'PlayStation Vita',
    Model: '2012',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PlayStation-Vita-1101-FL.jpg/220px-PlayStation-Vita-1101-FL.jpg',
  },
  {
    city: 'PlayStation 4',
    Model: '2013',
    img: 'https://media-cdn.bnn.in.th/265614/Sony-PlayStation-4-Slim-1TB-2-square_medium.jpg',
  },
  {
    city: 'PlayStation 5',
    Model: '2020',
    img: 'https://media-cdn.bnn.in.th/274185/Sony-PlayStation-5-Two-DualSense-Bundle-5.jpg',
  },
];

const slides2 = [
  {
    city: 'nintendo color ty-game',
    Model: '1977',
    img: 'http://4.bp.blogspot.com/-A7oecZwnPxI/TaiP7XF__6I/AAAAAAAAAkY/c1yKqGWhONY/s400/beforemario_dot_com_nintendo_tv_games_01.JPG',
  },
  {
    city: 'nintendo family computer',
    Model: '1983',
    img: 'https://filebroker-cdn.lazada.co.th/kf/Sf312d051c5784dfd8d89c9edaad84dccs.jpg',
  },
  {
    city: 'nintendo super Famicom',
    Model: '1990',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/SNES-Mod1-Console-Set.jpg',
  },
  {
    city: 'nintendo 64',
    Model: '1996',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Nintendo-64-wController-L.jpg/1200px-Nintendo-64-wController-L.jpg',
  },
  {
    city: 'nintendo game cube',
    Model: '2001',
    img: 'https://i.etsystatic.com/22609217/r/il/dbdfe3/3763911120/il_fullxfull.3763911120_r99p.jpg',
  },
  {
    city: 'nintendo wii',
    Model: '2006',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnVh4-mbRnRis8nheUH_lGSYmdaHkxbo5hQ&usqp=CAU',
  },
  {
    city: 'nintendo wii U',
    Model: '2012',
    img: 'https://www.techmoblog.com/uploads/content_images/201302/images_13600614341.jpg',
  },
  {
    city: 'nintendo switch',
    Model: '2017',
    img: 'https://media.studio7thailand.com/21160/Switch-H-New-Nintendo-Switch-Console-Neon-Red-Blue-1-square_medium.jpg',
  },
];

const slides3 = [
  {
    city: 'X box',
    Model: '2001',
    img: 'https://1.bp.blogspot.com/-Rc8WL7Xp5AM/YZjxZOSNKpI/AAAAAAAAZd4/jTPlF_ZOSAgXlhHL0ETRgJWzo3NrUMjQwCLcBGAsYHQ/s2268/microsoft-xbox-1.jpg',
  },
  {
    city: 'X box 360',
    Model: '2005',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Xbox-360-Elite-wController.jpg/401px-Xbox-360-Elite-wController.jpg',
  },
  {
    city: 'X box one',
    Model: '2013',
    img: 'https://wpadmin.gamefever.co/wp-content/uploads/2018/06/Xbox_One_X_Screenshot_05.0.jpg',
  },
  {
    city: 'X box series X/S',
    Model: '2020',
    img: 'https://compass-ssl.xboxlive.com/assets/cc/db/ccdb1fe7-83e1-4f7f-bbc2-7b52239506e6.png?n=MSXC-XboxSeriesXS-HeroAndImageCard-large-l-794x447-16x9-01.png',
  },
];

const Home = () => {
  return (
    <>
    <Slider slides={slides} />
    <br style={{ borderRadius: '25px' }}></br>
    <Slider slides={slides1} />
    <br style={{ borderRadius: '25px' }}></br>
    <Slider slides={slides2} />
    <br style={{ borderRadius: '25px' }}></br>
    <Slider slides={slides3} />
    </>
  )
}

export default Home;