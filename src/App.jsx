import "./App.css";
import ContactForm from "./assets/components/ContactForm/ContactForm";

import ContactHeader from "./assets/components/ContactHeader/ContactHeader";
import Navigation from "./assets/components/Navigation/Navigation";
import { Fragment } from "react";

function App() {
  return (
  
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
      <ContactForm />
      </main>
    </div>
  
  );
}

export default App;