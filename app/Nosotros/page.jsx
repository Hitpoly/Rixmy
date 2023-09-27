
import React from 'react';
import SectionOne from './SectionOne/sectionOne';
import SectionTwu from './SectionTwu/sectionTwu';
import SectionThree from './SectionThree/sectionThree';
import SectionFor from './SectionFor/sectionFor';
import SectionFive from './SectionFive/sectionFive';
import Layout from '../components/LandingPage/Layout/layout';

const Nosotros = () => {

  return (
    <Layout>
        <div>
           <SectionOne/>
           <SectionTwu/>
           <SectionThree/>
           <SectionFor/>
           <SectionFive/>
        </div>
    </Layout>
  );
};

export default Nosotros;
