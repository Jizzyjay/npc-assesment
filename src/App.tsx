import "./App.css";
import About from "./components/molecules/About";
import Astro from "./components/molecules/Astro";
import Navbar from "./components/molecules/Navbar";

function App() {
  const navItems = [
    { id: '1', label: "Home", href: "/" },
    { id: '2', label: "About", href: "/about" },
    { id: '3', label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <Navbar items={navItems} />
      <About />
      <Astro />
    </>
  );
}

export default App;
