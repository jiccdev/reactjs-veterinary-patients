import React, { Fragment } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import PatientList from './components/Patients/PatientList';

const App = () => {
  return (
    <div className="container-lg w-100 h-screen bg-white">
      <Layout>
        <Header />
        <Form />
        <PatientList />
      </Layout>
    </div>
  );
};

export default App;
