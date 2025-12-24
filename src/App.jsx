import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rahbariyat from './components/Rahbariyat'
import TashkiliyTuzilma from './components/TashkiliyTuzilma'
import MarkazVazifalari from './components/MarkazVazifalari'
import Bolimlar from './components/Bolimlar'
import Aloqa from './components/Aloqa'
import Vakansiya from './components/Vakansiya'
import News from './components/News'
import Systems from './components/Systems'
import Services from './components/Services'
import Courses from './components/Courses'
import Footer from './components/Footer'
import AxborotTizimlari from './components/AxborotTizimlari'
import Sharhlar from './components/Sharhlar'
import Korrupsiya from './components/Korrupsiya'
import OchiqMalumotlar from './components/OchiqMalumotlar'
import Xizmatlar from './components/Xizmatlar'
import Normativ from './components/Normativ'
import Yangiliklar from './components/Yangiliklar'
import Savollar from './components/Savollar'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'rahbariyat':
        return <Rahbariyat setCurrentPage={setCurrentPage} />
      case 'tashkiliy-tuzilma':
        return <TashkiliyTuzilma setCurrentPage={setCurrentPage} />
      case 'markaz-vazifalari':
        return <MarkazVazifalari setCurrentPage={setCurrentPage} />
      case 'bolimlar':
        return <Bolimlar setCurrentPage={setCurrentPage} />
      case 'aloqa':
        return <Aloqa setCurrentPage={setCurrentPage} />
      case 'vakansiya':
        return <Vakansiya setCurrentPage={setCurrentPage} />
      case 'axborot-tizimlari':
        return <AxborotTizimlari setCurrentPage={setCurrentPage} />
      case 'oquv-kurslar':
        return <Courses setCurrentPage={setCurrentPage} />
      case 'sharhlar':
        return <Sharhlar setCurrentPage={setCurrentPage} />
      case 'korrupsiya':
        return <Korrupsiya setCurrentPage={setCurrentPage} />
      case 'ochiq-malumotlar':
        return <OchiqMalumotlar setCurrentPage={setCurrentPage} />
      case 'xizmatlar':
        return <Xizmatlar setCurrentPage={setCurrentPage} />
      case 'normativ':
        return <Normativ setCurrentPage={setCurrentPage} />
      case 'yangiliklar':
        return <Yangiliklar setCurrentPage={setCurrentPage} />
      case 'savollar':
        return <Savollar setCurrentPage={setCurrentPage} />
      case 'home':
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <News setCurrentPage={setCurrentPage} />
            <Services />
          </>
        )
    }
  }

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
