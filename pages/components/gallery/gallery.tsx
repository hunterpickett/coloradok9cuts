import React from 'react';

export const Gallery = () => {
  return (
    <section id="gallery">
      <div className="text-center font-sans p-6">
        <h1 className="text-3xl mb-3 sm:text-5xl font-light">Gallery</h1>

        <div className="hidden lg:inline-block">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <img className="gallery-puppy" src="/static/0.jpg" />
            <img className="gallery-puppy" src="/static/1.jpg" />
            <img className="gallery-puppy" src="/static/2.jpg" />
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <img className="gallery-puppy" src="/static/3.jpg" />
            <img className="gallery-puppy" src="/static/4.jpg" />
            <img className="gallery-puppy" src="/static/5.jpg" />
          </div>
        </div>
        <div className="inline-block lg:hidden">
          <div className="flex flex-col md:flex-row items-center md:justify-between ">
            <img className="gallery-puppy" src="/static/0.jpg" />
            <img className="gallery-puppy" src="/static/1.jpg" />
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <img className="gallery-puppy" src="/static/2.jpg" />
            <img className="gallery-puppy" src="/static/3.jpg" />
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <img className="gallery-puppy" src="/static/4.jpg" />
            <img className="gallery-puppy" src="/static/5.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};
