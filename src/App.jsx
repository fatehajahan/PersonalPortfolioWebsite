import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './App.css'
import firebaseConfig from "./component/Authentication/firebase.config";
// import firebaseConfig from './components/Authentication/firebase.config';
import Homepage from "./component/Homepage/Homepage";
import AboutMe from "./component/AboutMe/AboutMe";
import Projects from "./component/Projects/Projects";
import Navbar from "./component/Navbar/Navbar";
import Contactme from "./component/Contactme/Contactme";
import AdminPanel from "./component/AdminPanel/AdminPanel";
import LoginAdmin from "./component/LoginAdmin/LoginAdmin";
// import MyServices from "./component/MyServices/MyServices";
import ScrollTop from "./component/ScrollTop/ScrollTop";

const Layout = () => {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contactme" element={<Contactme />} />
      <Route path="/admin" element={<AdminPanel />} /> {/* Admin Panel Route */}
      <Route path="/adminlogin" element={<LoginAdmin />} />
      {/* <Route path="/myServices" element={<MyServices />} /> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
