'use client'

import SectionOne from "./SectionOne/sectionOne";
import SectionTwo from "./SectionTwo/sectionTwo";
import SectionTree from "./SectionTree/sectionTree";
import SectionFor from "./SectionFor/sectionFor";
import SectionFive from "./SectionFive/sectionFive";
import Layout from '../../../components/LandingPage/Layout/layout';

const Eduina = () => {
  return (
  <Layout>
    <SectionOne/>
    <SectionTwo/>
    <SectionTree/>
    <SectionFor/>
    <SectionFive/>
  </Layout>
  )
}

export default Eduina