import Header from "./components/header/Header";
import PaymentPage from "./pages/PaymentPage";
import WishlistPage from "./pages/WishlistPage";
import { Main } from './components/Carousel/Main'
import { MobilePaymentModal } from "./components/PaymentPageComponents/MobilePaymentModal";


const App = () => {
  return <div className="App">
    <PaymentPage />
    {/* <MobilePaymentModal /> */}
    <Header />
    <Main />
    <WishlistPage />
  </div>;
};

export default App;
