import { useState } from 'react';
import { isEnvBrowser } from './utils/misc';
import { useNuiEvent } from './hooks/useNuiEvent';
import { Button } from '@mui/material';

function App() {
  const [visible, setVisible] = useState(isEnvBrowser());

  useNuiEvent('setVisible', (data: { visible?: boolean }) => {
    setVisible(data.visible || false);
  });

  return (
    <>
      {visible && (
        <Button variant="contained" color="primary">
          Increment
        </Button>
      )}
    </>
  );
}

export default App;
