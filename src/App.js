import {Routes , Route} from 'react-router-dom';
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/nav.component";
import Authentication from "./routes/Authentication/authentication.component";


const Shop = () =>
{
  return(
    <>
    <p>I'm a shop page</p>
    </>
  );
}
function App()
 {

  return(
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
