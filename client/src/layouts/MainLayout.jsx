import Navbar from "../components/Navbar";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="main-layout">
        {children}
      </main>
    </>
  );
}

export default MainLayout;