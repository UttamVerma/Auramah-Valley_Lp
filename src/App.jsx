import "./App.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoutes from "./routes/AllRoutes";
import { HelmetProvider } from "react-helmet-async";
import PopupForm from "./components/PopupForm";
import WaitingLoader from "./components/WaitingLoader";

function App() {
  return (
    <>
      <div id="auramah_valley">
        <ToastContainer />
        <HelmetProvider>
          <AllRoutes />
        </HelmetProvider>
        <PopupForm />
        <WaitingLoader />
      </div>
    </>
  );
}

export default App;
