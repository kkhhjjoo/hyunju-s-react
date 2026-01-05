import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> { /* 자식 컴포넌트 */}
      <Footer />
    </>
  );
}

export default Layout;