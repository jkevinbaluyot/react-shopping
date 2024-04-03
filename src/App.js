import logo from './logo.svg';
import './App.css';
import { ShoppingList } from './views/shopping/';
import { Topbar } from './components/';

function App() {
  return (
    <div className="App">
      <Topbar />
      <ShoppingList />
    </div>
  );
}

export default App;
