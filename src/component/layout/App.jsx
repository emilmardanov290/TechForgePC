import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import { useState } from "react"

function App() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <Header cartItems={cartItems} />
            <main>
                <Outlet context={{ cartItems, setCartItems }}/>
            </main>
            <Footer />
        </>
    );
}

export default App;