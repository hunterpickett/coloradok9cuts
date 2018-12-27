import React, { Component } from 'react';
import '../styles/styles.css';
import { NavBar } from './components/navBar/navBar';
import { HeroText } from './components/heroText';
import { Services } from './components/services/services';
import { Pricing } from './components/pricing';
import { MeetKristen } from './components/meetKristen';
import { Footer } from './components/footer';
import { Content } from './components/content';
import { Gallery } from './components/gallery/gallery';

const Index = () => {
  return (
    <>
      <div className="header-img" style={{ height: 1000 }}>
        <div className="flex container justify-end">
          <NavBar />
        </div>
      </div>
      <div>
        <Content>
          <HeroText />
        </Content>
        <Content className="mt-6">
          <Services />
        </Content>
        <Content dark>
          <Pricing />
        </Content>
        <Content>
          <Gallery />
        </Content>
        <Content dark>
          <MeetKristen />
        </Content>
        <Content>
          <Footer />
        </Content>
      </div>
    </>
  );
};

export default Index;
