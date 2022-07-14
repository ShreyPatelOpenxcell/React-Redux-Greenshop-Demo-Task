import './App.css';
import Footer from 'src/components/footer';
import Header from 'src/components/header';
import NavBar from 'src/components/navigationBar';
import { ROUTES } from 'src/routes';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <BrowserRouter>
      <main>
      <Routes>
          {
            ROUTES.map((item) => {
              return (
                <Route path={item.path} element={<item.element />} />
              )
            })
          }
      </Routes>
      </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;





