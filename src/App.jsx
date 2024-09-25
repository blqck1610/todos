import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import BaseLayout from './components/layout/BaseLayout'
import Main from './components/main/Main'

function App() {
  return (
    <>
    <Router>
      <Routes>
        

         <Route path="/" element={<BaseLayout />}>
          <Route index element={<Main />} />
          <Route path="/home" element = {<Main/>} />
         </Route>
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
