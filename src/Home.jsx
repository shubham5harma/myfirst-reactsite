import React from 'react'
import Common from './Common';
import web from '../src/images/img2.svg';

const Home = () => {
  return (
    <>
      {/* <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            
            </div>
          </div>
        </div> */}
      <Common
        name="That's my first ReactSite"
        img={web}
        visit='/services'
        btnName='Get Started'
      />
    </>
  );
};

export default Home;