import logo from './assets/lendlord.png'
import './App.css';
import EnhancedTable from './PersonTable';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width={'200px'} alt={'logo'} />
      </header>
      <EnhancedTable />
    </div>
  );
}

export default App;
