import React, { Fragment } from 'react';
import Layout from './components/Layout/Layout';
import Form from './components/Form/Form';
import PatientList from './components/Patients/PatientList';

const App = () => {
  return (
    <div className="container-lg w-100 h-screen flex justify-center items-center">
      <Layout>
        <Form />
      </Layout>
    </div>
  );
};

export default App;
