import * as React from 'react';

const BusyContext = React.createContext({
  busyState: 'false',
  setBusyState: () => {},
});

export default BusyContext;
