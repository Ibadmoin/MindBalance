
import React from 'react';
import {ThreeDCard} from '../components/ThreeDCard';
import featureData from '../data/featureData';

const FeatureHighlight = () => {
  return (
<section className="w-full py-6 bg-gray-900 text-white">
  <div className=" mx-auto px-2">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-5">Features</h2>
    <div className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-2 mb-5">
        {featureData.map((feature, index) => (
          <div key={index} className="p-1">
            <ThreeDCard
              title={feature.title}
              subtext={feature.subtext}
              imageUrl={feature.imageUrl}
              tryNowLink={feature.tryNowLink}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default FeatureHighlight;
