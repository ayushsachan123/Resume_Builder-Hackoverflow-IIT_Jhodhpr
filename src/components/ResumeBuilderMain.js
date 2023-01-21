import { useEffect } from 'react';
import { ResumeProvider } from '../Context';
import '../App.css';
import Header from './Layouts/Header';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Main from './Main';
import WebFont from 'webfontloader';

function ResumeBuilderMain() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    <>
      <ResumeProvider>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </ResumeProvider>
    </>
  );
}

export default ResumeBuilderMain;
