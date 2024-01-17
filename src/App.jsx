import './App.css';
import LeftPanel from './Components/LeftPanel/LeftPanel';
import RightPanel from './Components/RightPanel/RightPanel';
import Dock from './Components/dock/Dock';
import Home from './Components/home/Home';


function App() {
  return (
    <div className='App'>
    <LeftPanel/>
    <Home/>
    <RightPanel/>
    <Dock/>
    </div>
  );
}

export default App;
