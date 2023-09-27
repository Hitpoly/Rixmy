
import React from 'react';
import PageStyle from './pageServicios.module.css';
import SectionOne from './SectionOne/sectionOne';
import SectionTwu from './SectionTwu/sectionTwu';
import SectionThree from './SectionThree/sectionThree';
import SectionFor from './SectionFor/sectionFor';
import SectionFive from './SectionFive/sectionFive';
import SectionSix from './SectionSix/sectionSix';
import SectionSeven from './SectionSeven/sectionSeven';
import SectionEight from './SectionEight/sectionEight';
import SectionNine from './SectionNine/sectionNine';
import SectionTen from './SectionTen/sectionTen';
import SectionEleven from './SectionEleven/sectionEleven';
import SectionTwelve from './SectionTwelve/sectionTwelve';
import Layout from '../components/LandingPage/Layout/layout';

const Servicios = () => {

  return (
    <Layout>
      <div>
        <SectionOne />
        <div className={PageStyle.elemento}>
          <img src="./images/elemento1section.png" alt="elemento" width={100} height={100} />
        </div>
        <SectionTwu />
        <SectionThree />
        <SectionFor />
        <SectionFive />
        <div className={PageStyle.elemento2Caja}>
          <SectionSix />
          <div className={PageStyle.elemento2}>
            <img src="./images/elemento1section.png" alt="elemento" width={100} height={100} />
          </div>
        </div>
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <div className={PageStyle.elemento2Caja}>
          <SectionTen />
          <div className={PageStyle.elemento2}>
            <img src="./images/elemento1section.png" alt="elemento" width={100} height={100} />
          </div>
        </div>
        <SectionEleven />
        <SectionTwelve />
      </div>
    </Layout>
  );
};

export default Servicios;
