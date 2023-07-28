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
          element: <Portfolio />,
          // <Link to="portfolio">View Portfolio</Link>,
          // children: [{ path: 'portfolio', element: <Portfolio /> }],
        },
        { path: 'blog', element: <Blog /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
