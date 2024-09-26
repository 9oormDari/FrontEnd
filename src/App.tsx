import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <div className="App">
            <BrowserRouter />
            <Analytics />
        </div>
    );
}

export default App;
