import  Link  from 'next/link'
import Hamburgeropen from './Hamburgeropen'
import Hamburgerclose from './Hamburgerclose'
import React, { useRef,useEffect } from 'react'
import Image from 'next/image'

import { useInView } from 'react-intersection-observer';


const Nav = ()=>{

    const { ref: navElem, inView: navElemVal } = useInView({
        /* Optional options */
        threshold: 0,
      });

    const nav = useRef<HTMLElement>(null)
    const navwrapper = navElemVal ? 'nav-wrapper' : 'navanim'

    console.log(navwrapper)

    const opennav = ( e:React.MouseEvent<HTMLDivElement> )=>{
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'false'){
            cur && cur.setAttribute('data-nav', 'true')
        }
    }

    const closenav = ( e:any) => { 
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'true'){
            cur && cur.setAttribute('data-nav', 'false')
        }
    }

    useEffect(() => {
        const onclick = (ev: any) => {
            if(ev.target.matches('nav')){
                ev.target.setAttribute('data-nav', 'false')
            }
        }
          
        window.addEventListener('click', onclick);
    
        return () => {
          window.removeEventListener('click', onclick);
        }
      }, []);


        return (
            <div className="navbar" ref={navElem}> 

            <Hamburgeropen opennav = {opennav}  name="Smart Roofing Systems" />
    
            <nav data-nav="false" ref={nav} className="nav">
       

                <div className={navwrapper}>

                <Hamburgerclose closenav = {closenav}  />
                {/* 
                <Image src="/logo.jpg"  width="6" height="4" alt="" layout="responsive" />
            
                 */}

                <ul>
                    <li className="logo-img-bx">
                        <Link href="/">
                            <a onClick={closenav}>
                                <Image width="4" height="2" layout="responsive" src="/logo.jpg" alt="" />
                            </a>
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="/whychooseus">
                            <a onClick={closenav}>Why choose Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/testimonials">
                            <a onClick={closenav}>Testimonials</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <a onClick={closenav}>Products </a>
                        </Link>
                        <ul>
                                <li>
                                    <Link href="/ibrsheets">
                                        <a>
                                        IBR Sheets
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/selflocksheets">
                                        <a>
                                        Selflock Sheets
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/standingseams">
                                        <a>
                                        Standing Seams
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/eurotiles">
                                        <a>
                                        Euro Tiles
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shingles">
                                        <a>
                                        Shingles
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/steptiles">
                                        <a>
                                        Step Tiles
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/raingutters">
                                        <a>
                                        Rain Gutters
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/valleys">
                                        <a>
                                        Valleys
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sidetrims">
                                        <a>
                                        Side Trims
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/trusses">
                                        <a>
                                        Trusses
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/eavetrims">
                                        <a>
                                        Eave Trims
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                    </li>
                    <li>
                        <Link href="/#">
                            <a onClick={closenav}>Projects</a>
                        </Link>
                        {/* <ul>
                            <li>
                                <Link href="/">
                                    <a>
                                        IBR Sheets
                                    </a>
                                </Link>
                            </li>
                        </ul> */}
                    </li>
                    <li className="about">
                        <Link href="/about">
                            <a onClick={closenav}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a onClick={closenav}>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq">
                            <a onClick={closenav}>FAQ</a>  
                        </Link>
                    </li>
                </ul>
                </div>

            </nav>

            </div>
        )


}








export default Nav