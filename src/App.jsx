import { BrowserRouter} from 'react-router-dom';
import './styles/App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
