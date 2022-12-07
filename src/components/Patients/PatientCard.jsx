import React from 'react';
import { Icon } from '../Icon/index';

const PatientCard = ({ patient, id, deleteItem }) => {
  const {
    FaDog,
    FaUserClock,
    HiPencil,
    MdAlternateEmail,
    BsCalendarCheck,
    AiFillEdit,
    AiFillDelete,
  } = Icon;
  return (
    <div className="flex justify-center m-3 w-96 h-50">
      <div className="flex flex-col w-full md:flex-row md:max-w-xl rounded-lg relative shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-40 border border-slate-600 bg-slate-900">
        <div className="p-6 flex flex-col justify-start w-full">
          <h5 className="flex items-center text-slate-100 text-lg font-medium mb-2 border-b border-slate-600 pb-3">
            <span className="pr-2">
              <FaDog />
            </span>
            <span className="text-slate-200"> {patient?.petName}</span>
          </h5>

          <p className="flex items-center text-slate-100 text-lg font-base mb-2 border-b border-slate-600 pb-3">
            <span className="pr-2">
              <FaUserClock />
            </span>
            <span className="text-slate-200"> {patient?.ownerName}</span>
          </p>

          <p className="flex items-center text-slate-100 text-lg font-base mb-2 border-b border-slate-600 pb-3">
            <span className="pr-2">
              <HiPencil />
            </span>
            <span className="text-slate-200"> {patient?.symptoms}</span>
          </p>

          <p className="flex items-center text-slate-100 text-lg font-base mb-2 border-b border-slate-600 pb-3">
            <span className="pr-2">
              <MdAlternateEmail />
            </span>
            <span className="text-slate-200"> {patient?.email}</span>
          </p>

          <p className="flex items-center text-slate-100 text-lg font-base mb-2 border-b border-slate-600 pb-3">
            <span className="pr-2">
              <BsCalendarCheck />
            </span>
          </p>

          <div className="flex items-center justify-between">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              <AiFillEdit />
            </button>
            <button
              onClick={() => deleteItem(id)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
