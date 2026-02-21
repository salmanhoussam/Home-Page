// src/components/layout/Footer.jsx
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-purple-900/30 py-8">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p>© {new Date().getFullYear()} SalmanSaaS</p>
        <div className="flex gap-6">
          <a href="/general-privacy">{t.footerPrivacy}</a>
          <a href="/specific-privacy">{t.footerSpecific}</a>
          <a href="/privacy-terms">{t.footerTerms}</a>
        </div>
      </div>
    </footer>
  );
};