import { BrowserRouter, Route, Routes } from "react-router-dom";
// import FilterData from "./Debouncing/filter";
import Debounce from "./debounce/Debounce";

const AppRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/filter" element={<FilterData />} /> */}
          <Route path="/debounce" element={<Debounce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouting;