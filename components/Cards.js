'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { useRouter } from "next/navigation";

function Cards() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/blogs');
  };
  const handleClick1 = () => {
    router.push('/chainpharmacy');
  };

  const handleClick2 = () => {
    router.push('/drogapharma');
  };

  const handleClick3 = () => {
    router.push('/emaethiopia');
  };

  const handleClick4 = () => {
    router.push('/trustethio');
  };

  const handleClick5 = () => {
    router.push('/drogapysio');
  };

  const handleClick6 = () => {
    router.push('/drogasomaliland');
  };

  const handleClick7 = () => {
    router.push('/drogarwanda');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


    return (
      <div className=" px-20 slider-container">
        <Slider {...settings}>
        <div>
          <button className="button" onClick={handleClick}>
            <img className=" rounded-md image" src="/image/henok.jpg" width={300} height={275} alt="Sunset in the mountains" />
            <p className="caption">Group CEO</p>
          </button>
        </div>
        <div>
          <button className=" rounded-md button" onClick={handleClick2}>
            <img className="image" src="/image/Droga.jpg" width={300} height={275} alt="Sunset in the mountains" />
            <p className="caption">Droga Pharma</p>
          </button>
        </div>
        <div>
          <button className="button" onClick={handleClick3}>
            <img className="rounded-md  image" src="/image/ema.jpg" width={300} height={275} alt="Sunset in the mountains" />
            <p className="caption">Ema Ethiopia</p>
          </button>
        </div>
        <div>
          <button className="button" onClick={handleClick4}>
            <img className="rounded-md  image" src="/image/trust.jpg" width={300} height={275} alt="Sunset in the mountains" />
            <p className="caption">Trust Ethiopharma</p>
          </button>
        </div>
        <div>
          <button className="button" onClick={handleClick5}>
            <img className="rounded-md image" src="/image/physio.jpg" width={300} height={275} alt="Sunset in the mountains" />
            <p className="caption">Droga pyshiotherapy</p>
          </button>
        </div>
        <div>
          <button className="button" onClick={handleClick1}>
            <img className="rounded-md image" src="/image/chainpharma.jpg" width={300} height={275} alt="Sunset in the mountains" />
            <p className="caption">Droga Chain Pharmacy</p>
          </button>
        </div>
        <div>
          <button className="button" onClick={handleClick6}>
            <img className="rounded-md image" src="/image/somaliland.jpg" width={300} height={275} alt="Sunset in the mountains" />
            <p className="caption">Droga Somaliland</p>
          </button>
        </div>
        <div>
          <button className="button" onClick={handleClick7}>
            <img className="rounded-md image" src="/image/Droga.jpg" width={300} height={275} alt="Sunset in the mountains" />
            <p className="caption">Droga Rwanda</p>
          </button>
        </div>
      </Slider>
    </div>
  );
}

export default (Cards);