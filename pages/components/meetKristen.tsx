import React from 'react';

export const MeetKristen = () => {
  return (
    <div className="text-center font-serif font-light p-6">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl font-sans mb-3 sm:text-5xl font-light">
          Meet Kristen
        </h1>
        <img
          className="h-32 w-32 md:h-48 md:w-48 rounded-lg my-1"
          src="/static/kristen.jpg"
        />
      </div>
      <h2 className="text-lg text-left md:text-2xl leading-normal mb-3 ">
        Hello, my name is Kristen Nail and I have been grooming since 2010. I
        have always loved animals and I love that I get to work with them
        everyday. I have a Rhodesian Ridgeback named Tucker and a Mastiff /
        Boxer mix named Indy (yes, Indiana Jones). My goal as a groomer is to
        make both clients and their pets feel comfortable with the grooming
        process. My animals are my family, and as a groomer I treat my four
        legged clients as family too.
      </h2>
    </div>
  );
};
