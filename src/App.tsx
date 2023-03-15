import { Outlet } from 'react-router-dom';
import { HeaderResponsive, HeaderResponsiveProps } from './components/Navbar';

function App() {
  const links: HeaderResponsiveProps['links'] = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/store', label: 'Store' },
  ];

  return (
    <div>
      <HeaderResponsive links={links} />
      <main>
        <Outlet />
      </main>
      <footer style={{ height: '1rem' }} />
    </div>
  );
}
export default App;
