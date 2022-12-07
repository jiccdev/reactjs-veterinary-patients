import React from 'react';
import Title from '../../components/Section/Title/Title';
import PatientCard from '../../components/Patients/PatientCard';

const PatientList = ({ patientList, deleteItem, ...props }) => {
  return (
    <div>
      <div>
        <Title titleSection="Patient List" />
      </div>
      <div className="w-full h-96 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-500 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {patientList?.length > 0 ? (
          patientList.map((patient, index) => (
            <PatientCard
              key={index}
              patient={patient}
              id={index}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <p className="text-white">Not records yet!</p>
        )}
      </div>
    </div>
  );
};

export default PatientList;
