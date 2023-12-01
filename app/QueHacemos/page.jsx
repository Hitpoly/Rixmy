
import React from 'react';
import PageStyle from './queHacemos.module.css';
import SectionOne from './SectionOne/sectionOne';
import SectionTwu from './SectionTwu/sectionTwu';
import SectionThree from './SectionThree/sectionThree';
import Layout from '../components/LandingPage/Layout/layout';
import Image from 'next/image';

const Servicios = () => {

  return (
    <Layout>
      <div>
        <div className={PageStyle.sectionOne} >
          <SectionOne />
          <Image src="/images/elemento1section.png" alt="elemento" width={1200} height={400} className={PageStyle.image} />
        </div>
        <SectionTwu />
        <SectionThree />
      </div>
    </Layout>
  );
};

export default Servicios;
