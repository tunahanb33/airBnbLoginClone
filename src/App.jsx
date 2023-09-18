import HeroBody from "./components/HeroBody";
import NavFilters from "./components/NavFilters";
import PriceFilter from "./components/PriceFilter";
import TheHeader from "./components/TheHeader";
import LoginModal from "./partials/LoginModal";

function App() {
  return ( 
    <div className="xxl:px-20 sm:px-10 px-6 w-full h-screen bg-gray-200">
      <TheHeader />
      <NavFilters />
      <PriceFilter />
      <HeroBody />
      <LoginModal />
    </div>
   );
}

export default App;