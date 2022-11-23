import './App.css';
import { Navbar } from './Components/Navbar';

import SidebarWithHeader from "./Components/Sidebar";
function App() {
  return (
    <div className="App">
      <SidebarWithHeader/>
      <Navbar/>
    </div>
  );
}

export default App;
