import './App.css'
import Navigation from './components/navigation/Navigation.jsx';
import ContactHeader from './components/ContactHeader/ContactHeader.jsx';
import ContactForm from './components/contactForm/contactform.jsx'

function App() {
  return (
    <>
      <Navigation />
      <main className="main_container" >
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  )
}

export default App
