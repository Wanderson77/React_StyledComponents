import React, {
  Component
} from "react";

import {
  Title,
  TitleSmall
} from "./styles";

class App extends Component {
  render() {
    return ( <
      div >
      <
      Title fontSize = {
        30
      } >
      Hello World <
      span > texto menor < /span> < /
      Title >

      <
      TitleSmall > Menorzinho < /TitleSmall> < /
      div >
    );
  }
}

export default App;