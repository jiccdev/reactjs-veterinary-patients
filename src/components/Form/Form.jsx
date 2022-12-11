import React, { useState } from 'react';
import PatientList from '../Patients/PatientList';

const Form = () => {
  const [patientList, setPatientList] = useState([]);
  const [formData, setFormData] = useState({
    petName: '',
    ownerName: '',
    email: '',
    discharged: new Date(),
    symptoms: '',
  });

  /** Handle input form values */
  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /** Reset Form */
  const resetForm = () => {
    setFormData({
      petName: '',
      ownerName: '',
      email: '',
      discharged: new Date(),
      symptoms: '',
    });
  };

  /** Add new item */
  const onSubmit = (ev) => {
    ev.preventDefault();
    setPatientList([...patientList, formData]);
    resetForm();
  };

  const deleteItem = (id) => {
    const itemSelected = patientList.filter((item, index) => index !== id);
    setPatientList(itemSelected);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2 justify-items-center place-items-center rounded-md p-5 relative px-4 py-10 bg-slate-900 shadow-lg sm:rounded-3xl sm:p-10 bg-clip-padding bg-opacity-40 border border-slate-600">
      <form
        className="w-full max-w-md p-2 d-flex justify-center"
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-2/4 px-3 my-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="petName"
            >
              Pet Name
            </label>
            <input
              className="appearance-none block w-full border-2 rounded py-3 px-4 mb-3 leading-tight bg-transparent text-white focus:outline-none focus:border-2 focus:border-indigo-500"
              id="petName"
              name="petName"
              value={formData?.petName}
              onChange={handleChange}
              type="text"
              placeholder="Enter Pet Name"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 my-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="ownerName"
            >
              Owner Name
            </label>
            <input
              className="appearance-none block w-full border-2 rounded py-3 px-4 mb-3 leading-tight bg-transparent text-white focus:outline-none focus:border-2 focus:border-indigo-500"
              id="ownerName"
              name="ownerName"
              value={formData?.ownerName}
              onChange={handleChange}
              type="text"
              placeholder="Enter Owner Name"
            />
          </div>

          <div className="w-full md:w-100 px-3 my-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full border-2 rounded py-3 px-4 mb-3 leading-tight bg-transparent text-white focus:outline-none focus:border-2 focus:border-indigo-500"
              id="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              type="email"
              placeholder="ex: uwnername@email.com"
            />
          </div>

          <div className="w-full md:w-100 px-3 my-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="discharged"
            >
              Discharged Date
            </label>
            <input
              className="appearance-none block w-full border-2 rounded py-3 px-4 mb-3 leading-tight bg-transparent text-white focus:outline-none focus:border-2 focus:border-indigo-500"
              id="discharged"
              name="discharged"
              value={formData?.discharged}
              onChange={handleChange}
              type="date"
            />
          </div>

          <div className="w-full md:w-100 px-3 my-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="symptoms"
            >
              Symptoms
            </label>
            <textarea
              className="appearance-none block w-full border-2 rounded py-3 px-4 mb-3 leading-tight bg-transparent text-white focus:outline-none focus:border-2 focus:border-indigo-500"
              id="symptoms"
              name="symptoms"
              value={formData?.symptoms}
              onChange={handleChange}
              placeholder="Enter Symptoms"
              rows={5}
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="w-full font-bold py-3 px-4 m-3 rounded bg-indigo-600 hover:bg-indigo-800 text-white"
            >
              Create
            </button>
          </div>
        </div>
      </form>
      <PatientList
        patientList={patientList}
        handleChange={handleChange}
        deleteItem={deleteItem}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Form;
