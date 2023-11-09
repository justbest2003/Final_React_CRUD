import './App.css'
import { AddCar, EditCar, CarDetail, CarList } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="Container">
      <h1>028 Angkan Baitoey</h1>
      <h1>React.js CRUD Opetation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarList />}></Route>
          <Route path="/car/create" element={<AddCar />}></Route>
          <Route path="/car/edit/:id" element={<EditCar />}></Route>
          <Route path="/car/detail/:id" element={<CarDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
