import { Outlet } from 'react-router-dom';
import { HeaderResponsive, HeaderResponsiveProps } from './components/Navbar';

function App() {
  const links: HeaderResponsiveProps['links'] = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/store', label: 'Store' },
    { link: '/admin', label: 'Admin' },
  ];

  return (
    <div>
      <HeaderResponsive links={links} />
      <Outlet />
    </div>
  );
}
export default App;
