import Bannertitle from '../components/Bannertitle';
import Quote from '../components/Quote';
import Banner from '../components/Banner';

const Testimonials = () => {
  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/testimonials.jpg" />

        <Bannertitle
          mainheading="Testimonials"
          subheading="We Put Smiles On The Faces Of Our Clients"
        />
      </div>

      <section className="sectiontwo">
        <div className="container mob-container">
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
              text="What I really like about Smart Roofing Systems is I didn’t have to be present before estimates would be carried out and guess what I paid nothing. It was all done for free. They have excellent customer service and support. I am very glad I contacted them."
              name="Dr. Douglas Sarpong"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
