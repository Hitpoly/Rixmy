'use client'

import SectionOne from "./SectionOne/sectionOne";
import SectionTwo from "./SectionTwo/sectionTwo";
import SectionTree from "./SectionTree/sectionTree";
import SectionFor from "./SectionFor/sectionFor";
import SectionFive from "./SectionFive/sectionFive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import  Style  from "./pagestyle.module.css";
import Link from "next/link";

const Eduina = () => {
  return (
 <div>
    <SectionOne/>
    <SectionTwo/>
    <SectionTree/>
    <SectionFor/>
    <SectionFive/>
    <Link href="https://api.whatsapp.com/send?phone=584241246388" className={Style.enlace}>
        <FontAwesomeIcon icon={faWhatsapp} className={Style.iconowhatsapp}/>
    </Link>
 </div>


  )
}

export default Eduina