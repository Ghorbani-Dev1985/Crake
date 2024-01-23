import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Login from "./Components/Pages/Panel/Login";
import Panel from "./Components/Pages/Panel/Panel";
import Testimonial from "./Components/Pages/Panel/Testimonial";
import { ShowRealtimeDatasProvider } from "./Contexts/ShowRealtimeDatasContext";

function App() {
  return (
    <>
      <Toaster />
      <ShowRealtimeDatasProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </ShowRealtimeDatasProvider>
    </>
  );
}

export default App;
