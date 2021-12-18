import Header from "./components/header/Header";
import PaymentPage from "./pages/PaymentPage";
import WishlistPage from "./pages/WishlistPage";
import { Main } from './components/Carousel/Main'


const App = () => {
  return <div className="App">
    <PaymentPage />
    <Header />
    <Main />
    <WishlistPage />
  </div>;
};

export default App;
