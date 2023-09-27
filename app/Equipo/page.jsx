
import React from 'react';
import SectionOne from './SectionOne/sectionOne';
import SectionTwu from './SectionTwu/sectionTwu';
import Layout from '../components/LandingPage/Layout/layout';

const Servicios = () => {

  return (
    <Layout>
      <div>
        <SectionOne />
        <SectionTwu />
      </div>
    </Layout>
  );
};

export default Servicios;
