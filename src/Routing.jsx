import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterData from "./Debouncing/filter";

const AppRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/filter" element={<FilterData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouting;
