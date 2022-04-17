import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DnD from 'renderer/Components/Common/DnD'

export default function App() {
  return (
    <div className="App">
      <DnD></DnD>
    </div>
  );
}
