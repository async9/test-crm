import { Route, Routes } from 'react-router-dom';

import { ProtectedRoutes } from './routes/ProtectedRoutes';

import Layout from './components/Layout/Layout';
import Auth from './components/View/Auth/Auth';
import NotFound from './components/View/NotFound';
import Offers from './components/View/Offers/Offers';

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Offers />} />
        </Route>
        <Route path='/login' element={<Auth />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
