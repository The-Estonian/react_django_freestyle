import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import MainPage from './components/MainPage';
import ReceiveFromServer from './components/ReceiveFromServer';
import SendToServer from './components/SendToServer';

import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback='TODO...'>
            <Menu/>
          </Suspense>
        }
      >

      <Route index element={<MainPage />} />
      <Route path='/sender' element={<SendToServer />} />
      <Route path='/receiver' element={<ReceiveFromServer />} />
      </Route>
    </Routes>
  );
}

export default App;
