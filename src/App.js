import logo from './logo.svg';
import './App.css';
import ReadData from "./components/ReadData";

function App() {

  return (
    <div id="container">
        <ReadData
            title='Загрузка данных (DATA)'
            url='http://localhost:7070/data'
            opts=''
        />
        <ReadData
            title='Загрузка данных (ERROR)'
            url='http://localhost:7070/error'
            opts=''
        />
        <ReadData
            title='Загрузка данных (LOADING)'
            url='http://localhost:7070/loading'
            opts=''
        />
    </div>
  );
}

export default App;
