import { BrowserRouter, Route, Routes } from "react-router-dom";
// import FilterData from "./Debouncing/filter";
import Debounce from "./debounce/Debounce";
import Todo from "./todo/Todo";

const AppRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/filter" element={<FilterData />} /> */}
          <Route path="/debounce" element={<Debounce />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouting;
