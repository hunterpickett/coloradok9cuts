import React from 'react';

export const Pricing = () => {
  return (
    <section id="pricing">
      <div className="text-center font-sans p-6">
        <h2 className="text-2xl md:text-4xl font-sans mb-3 font-light">
          Pricing
        </h2>
        <h3 className="text-xl md:text-3xl mb-6 font-light">
          Pricing is dependant on breed, weight, hair type, temperament, and
          condition of coat
        </h3>
        <h3 className="text-xl md:text-3xl text-base text-grey-dark italic font-serif mb-2">
          To get a quote please text or email me with breed, size, weight, and
          desired service
        </h3>
        <div className="flex justify-around text-xl md:text-3xl leading-normal mt-4">
          <p>720-593-1742</p>
          <a className="text-black" href="mailto:coloradok9cuts@gmail.com">
            ColoradoK9Cuts@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
