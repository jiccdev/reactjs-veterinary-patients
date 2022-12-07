import React from 'react';
import { Icon } from '../../Icon';

const Title = ({ titleSection, subTiteSection, span, ...props }) => {
  const { MdOutlinePets } = Icon;
  return (
    <div className="rounded-md flex justify-center items-center relative bg-slate-900 mb-3 shadow-lg sm:rounded-lg bg-clip-padding pl-4 py-1 bg-opacity-40 border border-slate-600">
      <h2 className="flex flex-row items-center font-black text-center text-white text-xl xl:text-2xl">
        <span>{titleSection}</span>
        <span>
          <MdOutlinePets className="text-gray-300 ml-1 rotate-17" />
        </span>
      </h2>
      <p className="text-center my-5 mx-2 text-base xl:text-lg">
        {subTiteSection} <span className="text-indigo-500">{span}</span>
      </p>
    </div>
  );
};

export default Title;
