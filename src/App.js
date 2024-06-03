import './App.css';
import TopSection from "./Components/TopSection/TopSection";
import FormSection from './Components/FormSection/FormSection';
import Certificate from './Components/CertificateSection/Certificate';
import Footer from './Components/BottomSection/Footer';
import ApplySection from './Components/ApplySection/ApplySection';

function App() {
  return (
    <div className='app-container'>
      <TopSection />
      <FormSection />
      <ApplySection />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
