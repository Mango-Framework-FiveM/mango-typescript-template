import { useState } from 'react';
import { isEnvBrowser } from './utils/misc';
import { useNuiEvent } from './hooks/useNuiEvent';
import { Button } from 'primereact/button';

function App() {
  const [visible, setVisible] = useState(isEnvBrowser());

  useNuiEvent('setVisible', (data: { visible?: boolean }) => {
    setVisible(data.visible || false);
  });

  return (
    <>
      {visible && (
        <Button>Test</Button>
      )}
    </>
  );
}

export default App;
