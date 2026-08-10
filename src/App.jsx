import Produtos from "./pages/Produtos/Produtos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <Routes>
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
