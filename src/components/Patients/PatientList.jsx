import React from 'react';
import Title from '../../components/Section/Title/Title';
import PatientCard from '../../components/Patients/PatientCard';
import Alert from '../../components/Alert/Alert';

const PatientList = ({ patientList, deleteItem, ...props }) => {
  return (
    <div className="h-full w-full flex justify-start flex-col items-center w-100">
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
          <Alert>No patients found</Alert>
        )}
      </div>
    </div>
  );
};

export default PatientList;
