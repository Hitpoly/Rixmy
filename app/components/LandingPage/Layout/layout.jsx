import React from 'react';
import Nav from '../Nav/nav.jsx';
import Footer from '../Footer/footer.jsx';
import LayoutStile from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div
        className={LayoutStile.contenido}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
