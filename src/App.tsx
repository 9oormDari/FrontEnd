import React from 'react';
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {   //{: React.FC는 없어도 잘 동작합니다. }
  return (
    <div className="App">
      <BrowserRouter />
    </div>
  );
}

export default App;