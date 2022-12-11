import React, { Fragment, useState } from 'react';

const Modal = ({ data, openModal, setOpenModal, handleChange, onSubmit }) => {
  const handleModal = () => setShowModal(!showModal);

  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Modal Title</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => handleModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
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
                      className="appearance-none block w-full border-2 rounded py-3 px-4 mb-3 leading-tight bg-transparent text-slate-800 focus:outline-none focus:border-2 focus:border-indigo-500"
                      id="petName"
                      name="petName"
                      defaultValue={data?.petName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Pet Name"
                    />
                  </div>

                  {/* <div className="w-full md:w-1/2 px-3 my-3">
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
                  </div> */}

                  {/* <div className="w-full md:w-100 px-3 my-3">
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
                  </div> */}

                  {/* <div className="w-full md:w-100 px-3 my-3">
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
                  </div> */}

                  {/* <div className="w-full md:w-100 px-3 my-3">
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
                  </div> */}

                  <div className="w-full flex justify-center items-center">
                    <button
                      type="submit"
                      className="w-full font-bold py-3 px-4 m-3 rounded bg-indigo-600 hover:bg-indigo-800 text-white"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModal(!openModal)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  );
};

export default Modal;
