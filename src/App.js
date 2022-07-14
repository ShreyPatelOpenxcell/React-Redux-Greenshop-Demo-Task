import './App.css';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import NavBar from 'src/components/navigationBar';
import { ROUTES } from 'src/routes';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <main>
          <Routes>
            {
              ROUTES.map((item) => {
                return (
                  <Route path={item.path} element={
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





