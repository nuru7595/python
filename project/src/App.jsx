import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/Details';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
      <Details />

      <Chapter3 />
      <Chapter2 />
      <Chapter1 />
      </main>
      <Footer />
    </>
  )
}

export default App
