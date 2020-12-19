import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Cite from './components/Cite'

function App() {

  const [cites, saveCites] = useState([]);

  const createCite = cite => {
    saveCites([
      ...cites,
      cite
    ]);
  }

  const deleteCite = id => {
    const newCites = cites.filter(cite => cite.id !== id);
    saveCites(newCites)
  }

  return (
    <Fragment>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Form
            createCite={createCite}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>Administra tus citas</h2>
            {cites.map(cite => (
            <Cite
              key={cite.id}
              cite={cite}
              deleteCite={deleteCite}/>
            ))} 
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
