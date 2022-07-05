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

const Contact = () => {

  const contactnumbers = `
  (+233) 0548123221\n\r
  (+233) 0206603011
  `

  return (
    <>
      <Banner img="/about.jpg" />

      <Bannertitle 
        mainheading='Contact' 
        subheading='Get In Touch' 
      />

      <section className="sectiontwo">



        <div className="container">

          <div className="col-5">

          <Sectiontitle 
              mainheading='Contact Details' 
              subheading='Get In Touch' 
            />

            <div className="flex">
            <Contactdetails 
              icons = "fa fa-phone"
              heading = "Contact Numbers​"
              details = {contactnumbers}
            />
            <Contactdetails 
              icons = "fa fa-envelope"
              heading = "Email"
              details = "info@sroofingsystems.com"
            />
            </div>


            <div className="flex">
            <Contactdetails 
              icons = "fa fa-map-marker"
              heading = "Accra"
              details = "Musuku – Kwabenya off Ashongman Estate Road"
            />
            <Contactdetails 
              icons = "fa fa-map-marker"
              heading = "Kumasi"
              details = "Sokoban"
            />
            </div>

            <div className="flex">
            <Contactdetails 
              icons = "fa fa-whatsapp"
              heading = "Whatsapp"
              details = "+233 598775968"
            />
            <Contactdetails 
              icons = "fa fa-map-marker"
              heading = "GPS Code:"
              details = "GE-229-7967"
            />
            </div>

           

          </div>
          <div className="col-3">
          <Requestquote  />
          </div>


          </div>




      </section>



    </>
  )
}

export default Contact
