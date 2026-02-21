// src/App.jsx
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import GeneralPrivacyPage from './pages/GeneralPrivacyPage';
// ... بقية الاستيرادات

function App() {
  const path = window.location.pathname;

  const renderPage = () => {
    switch(path) {
      case '/general-privacy': return <GeneralPrivacyPage />;
      case '/specific-privacy': return <SpecificPrivacyPage />;
      case '/privacy-terms': return <PrivacyTermsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <LanguageProvider>
      {renderPage()}
    </LanguageProvider>
  );
}

export default App;