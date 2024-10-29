import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProjects from './components/MyProjects/MyProjects';
import Preview from './components/Preview/Preview';

export default function App() {

  return <>
    <Header />
    <main>
      <Preview />
      <About />
      <Experience />
      <MyProjects />
    </main>
    <Footer />
  </>
}