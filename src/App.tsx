import { Outlet } from 'react-router-dom';
import { HeaderResponsive, HeaderResponsiveProps } from './components/Navbar';
import { FooterCentered } from './components/T101Footer';

function App() {
  const headerLinks: HeaderResponsiveProps['links'] = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/store', label: 'Store' },
  ];

  const footerLinks = [
    { link: '/terms-of-service', label: 'Terms of Service' },
    { link: '/privacy-policy', label: 'Privacy Policy' },
    { link: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <div>
      <HeaderResponsive links={headerLinks} />
      <Outlet />
      <FooterCentered links={footerLinks} />
    </div>
  );
}
export default App;
