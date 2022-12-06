import React, { Fragment } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import PatientList from './components/Patients/PatientList';

const App = () => {
  return (
    <div className="container-lg w-100 h-screen flex justify-center items-center">
      <Layout>
        {/* <Header /> */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Form />
          <PatientList />
        </div>
      </Layout>
    </div>
  );
};

export default App;
