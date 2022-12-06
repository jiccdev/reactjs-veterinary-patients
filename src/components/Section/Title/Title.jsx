import React from 'react';

const Title = ({ titleSection, subTiteSection, span, ...props }) => {
  return (
    <div>
      <h2 className="font-black text-center text-xl xl:text-2xl">
        {titleSection}
      </h2>
      <p className="text-center my-5 mx-2 text-base xl:text-lg">
        {subTiteSection} <span className="text-indigo-500">{span}</span>
      </p>
    </div>
  );
};

export default Title;
