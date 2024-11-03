import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProjects from './components/MyProjects/MyProjects';
import Preview from './components/Preview/Preview';
import { useState } from "react";

export default function App() {
  const [langv, setLangv] = useState('RU')

  return <>
    <Header langv={langv} setLangv={setLangv} />
    <main>
      <Preview langv={langv} />
      <About langv={langv} />
      <Experience langv={langv} />
      <MyProjects langv={langv} />
    </main>
    <Footer langv={langv} />
  </>
}