import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact={true} path="/" element={<LandingPage />} />
        </Routes>
    </Router>
  )
}

export default App;
