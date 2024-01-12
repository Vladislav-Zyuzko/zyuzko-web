import { Routes, Route, Outlet} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import FindDoctor from "./pages/FindDoctor";
import Apps from "./pages/Apps";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <Outlet />
          </>
        }>
          <Route index element={<Home />} />
          <Route path="find-doctor" element={<FindDoctor />}/>
          <Route path="apps" element={<Apps />}/>
          <Route path="testimonials" element={<Testimonials />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
