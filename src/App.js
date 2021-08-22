// import logo from './logo.svg';
import './App.css';
// import {Landing} from "./Component/Landing/Landing";
import {Home} from "./Component/Home";
import {Provider} from "react-redux"
import {configStore} from "./Component/state/store/configStore";
// import {getProducts} from "./Component/service/products";


function App() {
  const localStore=configStore();
  
  return (
    
      <Provider store={localStore}>
      <Home/>
      </Provider>
    
  );
}

export default App;
