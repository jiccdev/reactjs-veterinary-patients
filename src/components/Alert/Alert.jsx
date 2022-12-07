import React from 'react';
import { Icon } from '..//Icon/index';

const Alert = ({
  children,
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
}) => {
  const { AiOutlineInfoCircle } = Icon;
  return (
    <div
      class={`flex items-center justify-center text-center text-sm font-bold px-4 py-3 ${bgColor} ${textColor}`}
      role="alert"
    >
      <span className="pr-1">
        <AiOutlineInfoCircle />
      </span>
      <p className="text-center">{children}</p>
    </div>
  );
};

export default Alert;
