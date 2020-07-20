import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      {/* exact prop을 붙여주면 URL 경로 값이 <Route>의 path 값과 완벽히 전체가 일치해야 매치되는 것으로 처리 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
