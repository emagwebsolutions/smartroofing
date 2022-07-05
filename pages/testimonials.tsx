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

const Testimonials = () => {

  return (
    <>
        <Banner img="/testimonials.jpg" />

      <Bannertitle 
        mainheading='Testimonials' 
        subheading='We Put Smiles On The Faces Of Our Clients' 
      />

    <section className="sectiontwo">

    <div className="container">
      <div>
        <Quote 
          text="What I really like about Smart Roofing Systems is I didn’t have to be present before estimates would be carried out and guess what I paid nothing. It was all done for free. They have excellent customer service and support. I am very glad I contacted them."
          name="Mrs. Theresa Tetteh"
        />
      </div>
      <div>
      <Quote 
          text="I was sceptical when I was introduced to Smart Roofing Systems especially when I had to contact them electronically. I got the shock of my life. They replied swiftly in just a matter of minutes. I received my quotation. They are what they say they are."
          name="Mr. Ofori Atta"
        />
      </div>
      <div>
      <Quote 
          text="What I really like about West Coast Roofing is I didn’t have to be present before estimates would be carried out and guess what I paid nothing. It was all done for free. They have excellent customer service and support. I am very glad I contacted them."
          name="Dr. Douglas Sarpong"
        />
      </div>
    </div>


    </section>

    </>
  )
}

export default Testimonials
