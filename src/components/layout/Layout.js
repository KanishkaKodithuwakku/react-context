import React from 'react'
import Navbar from './Navbar';
import LayoutBody from './LayoutBody';

const Layout = ({ children}) => { 

    return (
      <>
        {/* <Navbar /> */}
        <LayoutBody>{children}</LayoutBody>
      </>
    );

}


export default Layout;
