import React from 'react';
import './App.css';
import Carlist from './components/carList/Carlist';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater'


function App(props) {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  return (
    <div>
      <div className="App">
        <Carlist/>
      </div>
      {newServiceWorkerDetected ? (
                <div style={{ backgroundColor: 'red', width: '80vw', margin: 'auto', padding: '10px' }}>
                    <h3>Nueva Actualizacion !</h3>
                    <button onClick={onLoadNewServiceWorkerAccept}>Actualizar ahora</button>
                </div>
            ) : null}
    </div>
  );
}

export default withServiceWorkerUpdater(App);
