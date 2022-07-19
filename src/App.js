import './App.css';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import NavBar from 'src/components/navigationBar';
import { ROUTES } from 'src/routes';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './routes/protectedRoute';
const Home = lazy(() => import('src/pages/home'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" exact element={
              <Suspense fallback='...Loading'>
                <Home />
              </Suspense>
            } />
            {
              ROUTES.map((item, index) => {
                if (item.path === '/cart') {
                  return (
                    <Route key={index} path={item.path} element={
                      <ProtectedRoute>
                        <item.element />
                      </ProtectedRoute>
                    } />)
                }
                return (
                  <Route key={index} path={item.path} element={
                    <Suspense fallback='...Loading'>
                      <item.element />
                    </Suspense>
                  } />
                )
              })
            }
          </Routes>
          <br />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;





