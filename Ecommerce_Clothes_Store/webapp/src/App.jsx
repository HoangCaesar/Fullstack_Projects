import { Home, ProductsPage, ProductDetail, Register, Login, Cart, Success } from './pages'
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/product-list/" element={<ProductsPage />}>
                <Route path=":category" element={<ProductsPage />}/>
            </Route>
            <Route path="/product-detail/" element={<ProductDetail />}>
                <Route path=":id" element={<ProductDetail />}/>
            </Route>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/success" element={<Success />}/>
        </Routes>
    );
}

export default App;
