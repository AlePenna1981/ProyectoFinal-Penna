import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItmDeatailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import app from "./data/firebase";

const App = () => {
  //
  console.log("Init firebase", app);
  // getProducts();
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/type/:type" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          {/* <Route path="/item/:id" element={<ItemDetail />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
