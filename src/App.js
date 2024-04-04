import {Footer , Blog , Possibility , Features , WhatGPT3 , Header } from  './containers'
import {CTAA , Brand , Navbar} from './components'
import './App.css';
function App() {
  return (
  
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
        
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTAA></CTAA>
      <Blog></Blog>
      <Footer> </Footer>
    </div>
  );
}

export default App;