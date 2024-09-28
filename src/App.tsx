import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter />
            <Analytics />
        </div>
    );
}

export default App;
