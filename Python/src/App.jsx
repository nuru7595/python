import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar.jsx';
import Details from "./components/Details";
import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Chapter4 from "./components/Chapter4";

function App() {
    return (
        <>
            <Header />
            <main className="mx-2 md:flex gap-2">
                <div className="hidden md:block w-1/4">
                    <Sidebar />
                </div>
                <div className="md:w-3/4">
                    <Details />
                    <Chapter4 />
                    <Chapter3 />
                    <Chapter2 />
                    <Chapter1 />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
