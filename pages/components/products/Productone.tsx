import Link from 'next/link'
import Image from 'next/image'

type Det = {
    img: string
}

const Productone = ({img}: Det) => {

    return (
        <section className="productone">
        <div className="container">
            <div className="col-5">
                <div className="prodimg">

                </div>
            </div>
            <div className="col-2">
                <div className="prodBx">
                    <h4>Advantages</h4>
                    <div>
 
                            1. It has an Aluzinc metal base and a stone coated finish.
                            <br />
                            2. It is lighter and and easier to handle.
                            <br />
                            3. It is designed to to be installed on a 2×2 battern system purlins.
        
             
                    </div>

                    <Link href="/contact">
                    <a>Get Quote</a>
                    </Link>

                </div>
            </div>
        </div>

        <style jsx>
            {
                `
                    .prodimg{
                        background-image: url('/${img}');
                        background-size: cover;
                        background-position: center;
                    }
                
                `
            }

        </style>

        </section>
    )
    
}

export default Productone