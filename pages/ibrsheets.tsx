import type { NextPage } from 'next'
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import Sectiontitle from './components/Sectiontitle';
import Articlebox from './components/Articlebox';
import Bannertitle from './components/Bannertitle';
import Contactdetails from './components/Contactdetails';
import Quote from './components/Quote';
import Requestquote from './components/Requestquote';
import Image from 'next/image'
import Banner from './components/Banner';
import Description from './components/products/Description';
import Freeestimate from './components/products/Freeestimate';
import Productone from './components/products/Productone';

const Ibrsheets = () => {

  const images = [
    { url: "/slider1.jpg" },
    { url: "/slider2.jpg" },
    { url: "/slider3.jpg" },
  ];

  return (
    <>
      <Banner img="/whychooseus.jpeg" />

      <Bannertitle 
        mainheading='IBR Sheets' 
        subheading='Our IBR Sheets are unique' 
      />



      <Productone img="ibr1.jpg" />


      <Freeestimate />


      <section className="sectionone">

        <Description title="GENERAL DESCRIPTION" img={images} text="WESTCOAST Stone coated Tiles has Proven in performance both Ghana and West Africa sub-Region . The roof is to resist leaking and other elements from above wind included. At its location up there, the exposure gives a harsh environment that leaves many roofing materials deteriorating with time. On the contrary, stone coated tiles remain intact and even improve with time. These tiles can resist high pressures of the wind and heavy rain. Wind uplift is well prevented using the horizontal fastening of these tiles. Panels will interlock fully leaving no weak points. Even when you want to move the tiles, it is super easy. For sure, WESTCOAST stone coated roof tiles are considered the best for what they are. They surpass other roofing tiles and materials in aspects of durability, aesthetics, performance, maintenance and sustainability." />

      </section>








    </>
  )
}

export default Ibrsheets