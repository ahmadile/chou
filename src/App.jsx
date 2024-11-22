

import './App.css'
import Article from './components/Articles'
import Footer from './components/Footers'
import { Header } from './components/Headers'

function App() {
  

  return (
    <>
     <Header/>
    <Article/>
    <Footer/>
   
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p> {new Date().getFullYear()} - Realiser de ❤️ Deenka</p>
  </aside>
</footer>
      
    </>
  )
}













export default App
