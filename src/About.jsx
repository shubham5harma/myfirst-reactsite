import React from 'react'
import Common from './Common';
import web from '../src/images/img3.svg';

const About = () => {
  return (
    <>
      <Common
        name='This is about Page'
        img={web}
        visit='/contact'
        btnName='Contact Us Now'
      />
    </>
  );
};

export default About;