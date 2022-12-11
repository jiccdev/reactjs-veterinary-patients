import React from 'react';
import Title from '../../components/Section/Title/Title';
import PatientCard from '../../components/Patients/PatientCard';
import Alert from '../../components/Alert/Alert';

const PatientList = ({
  patientList,
  deleteItem,
  handleChange,
  onSubmit,
  ...props
}) => {
  return (
    <div className="h-full w-full flex justify-start flex-col items-center w-100">
      <div>
        <Title titleSection="Patient List" />
      </div>
      <div className="w-100 h-[520px] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-500 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {patientList?.length > 0 ? (
          patientList.map((patient, index) => (
            <PatientCard
              key={index}
              patient={patient}
              id={index}
              deleteItem={deleteItem}
              handleChange={handleChange}
              onSubmit={onSubmit}
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
