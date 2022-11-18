import * as React from 'react';
import { useContext } from 'react';
import './BusySpinner.css';
import BusyContext from '../../context/BusyContext';

export default function BusySpinner() {
  const { busyState, setBusyState } = useContext(BusyContext);
  console.log('BusySpinner state = ', busyState);
  const busyStyle =
    busyState === 'true'
      ? {
          display: 'block',
        }
      : {
          display: 'none',
        };

  return (
    <div style={busyStyle} className="spinner-mask">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
