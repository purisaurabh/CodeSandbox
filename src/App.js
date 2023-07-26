import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';



function App() {
  return (
    <>
      <DataProvider props
      >
        <Home />
      </DataProvider>
    </>
    
  );
}

export default App;
