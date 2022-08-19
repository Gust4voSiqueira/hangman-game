import { GameScreen, HomeScreen } from "./ui/screens";

import { Route, Routes, BrowserRouter } from 'react-router-dom' 


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/game" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
