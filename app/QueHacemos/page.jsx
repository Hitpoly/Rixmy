
import React from 'react';
import PageStyle from './pageServicios.module.css';
import SectionOne from './SectionOne/sectionOne';
import SectionTwu from './SectionTwu/sectionTwu';
import SectionThree from './SectionThree/sectionThree';
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
      </div>
    </Layout>
  );
};

export default Servicios;
