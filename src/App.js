import React, { Fragment } from 'react';
import Form from './components/Forms'

function App() {
  return (
    <Fragment>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Form/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            Column 2  
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
