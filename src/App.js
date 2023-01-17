import { Fragment } from 'react';
import {
  createBrowserRouter,
  Link,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import './App.scss';
import Navbar from './components/NavBar/Navbar';
import SiteFooter from './components/SiteFooter';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Error from './pages/Error';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Root from './pages/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about-us', element: <AboutUs /> },
        {
          path: 'services',
          element: <Link to="/services/portfolio">View Portfolio</Link>,
          // children: [{ path: '/services/portfolio', element: <Portfolio /> }],
        },
        { path: 'blog', element: <Blog /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* 
      <Routes>
        <Route path="/" element={<Navigate replace to="index" />} />
        <Route path="/index" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Portfolio />}></Route>
        <Route path="/blog" element={<Blog />} />
        <Route
          path="*"
          element={
            <Fragment>
              <div className="notfound">
                <h3>Error 404. Page Not Found!</h3>
                <p>
                  Click <Link to="index">Here</Link> to go to Home Page
                </p>
              </div>
              <SiteFooter />
            </Fragment>
          }
        />
      </Routes> */}
    </div>
  );
}

export default App;
