import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Topbar from './components/topBar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  let router = useRoutes(routes)
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        {router}
      </div>
    </div>
  );
}

export default App;
