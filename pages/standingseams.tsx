import '@madzadev/image-slider/dist/index.css';
import Bannertitle from '../components/Bannertitle';
import Banner from '../components/Banner';
import Description from '../components/products/Description';
import Freeestimate from '../components/products/Freeestimate';
import Productone from '../components/products/Productone';

const Standingseams = () => {
  function details() {
    return (
      <ol className="pl-0 ml-1">
        <li>It is aesthetically appealing</li>
        <li>It boosts the structures curb appeal</li>
        <li>It is affordable</li>
      </ol>
    );
  }

  const images = [
    { url: '/standingseam2.jpg' },
    { url: '/standingseam3.jpg' },
    { url: '/standingseam4.jpg' },
  ];

  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/whychooseus.jpeg" />

        <Bannertitle
          mainheading="Standing Seams"
          subheading="Our IBR Sheets are unique"
        />
      </div>

      <Productone img="standingseam1.jpg" details={details()} />

      <Freeestimate />

      <section className="sectionone">
        <Description
          title="GENERAL DESCRIPTION"
          img={images}
          text="WESTCOAST Stone coated Tiles has Proven in performance both Ghana and West Africa sub-Region . The roof is to resist leaking and other elements from above wind included. At its location up there, the exposure gives a harsh environment that leaves many roofing materials deteriorating with time. On the contrary, stone coated tiles remain intact and even improve with time. These tiles can resist high pressures of the wind and heavy rain. Wind uplift is well prevented using the horizontal fastening of these tiles. Panels will interlock fully leaving no weak points. Even when you want to move the tiles, it is super easy. For sure, WESTCOAST stone coated roof tiles are considered the best for what they are. They surpass other roofing tiles and materials in aspects of durability, aesthetics, performance, maintenance and sustainability."
        />
      </section>
    </>
  );
};

export default Standingseams;
