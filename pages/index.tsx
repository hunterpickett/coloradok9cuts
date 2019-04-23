import React, { Component } from 'react';
import Head from 'next/head';
import '../styles/styles.css';
import { NavBar } from './components/navBar/navBar';
import { HeroText } from './components/heroText';
import { Services } from './components/services/services';
import { Pricing } from './components/pricing';
import { MeetKristen } from './components/meetKristen';
import { Footer } from './components/footer/footer';
import { Content } from './components/content';
import { Gallery } from './components/gallery/gallery';

const Index = () => {
  return (
    <>
      <Head>
        <title>title" content="Colorado K9 Cuts | Professional, Experienced Mobile Dog Grooming"</title>
        <meta
          name="description"
          content="Colorado K9 Cuts provides mobile dog grooming services in the Colorado Springs area. Services offered include full service grooming, nail trims, and baths."
        />
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <meta
          name="keywords"
          content="Dog, Puppy, Mobile Dog Grooming, Colorado, Colorado Springs, Monument, Fountain, Nail Trim, Dog Haircut, Dog Bath, Puppy Bath"
        />
      </Head>
      <div className="header-img">
        <NavBar />
      </div>
      <div>
        <Content>
          <HeroText />
        </Content>
        <Content className="mt-6">
          <Services />
        </Content>
        <Content>
          <Pricing />
        </Content>
        <Content>
          <Gallery />
        </Content>
        <Content>
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
