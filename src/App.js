import logo from './logo.svg';
import './App.css';
import Layer3 from './components/Layers/Layer3';
import CounterCards from './components/cards/CounterCards';
import TodoCard from './components/cards/TodoCard';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Section/Navbar';
function App() {
    return(
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="path1" element={<CounterCards/>}/>
                    <Route path="path2" element={<TodoCard/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;