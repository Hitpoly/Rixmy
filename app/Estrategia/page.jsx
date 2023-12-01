
import React from 'react';
import SectionOne from './SectionOne/sectionOne';
import SectionTwu from './SectionTwu/sectionTwu';
import SectionThree from './SectionThree/sectionThree';
import SectionFor from './SectionFor/sectionFor';
import Layout from '../components/LandingPage/Layout/layout';

const Estrategia = () => {

  return (
    <Layout>
        <div>
           <SectionOne/>
           <SectionTwu/>
           <SectionThree/>
           <SectionFor/>
        </div>
    </Layout>
  );
};

export default Estrategia;
