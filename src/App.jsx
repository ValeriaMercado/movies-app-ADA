
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { ContextProvider } from "./provider/ContextProvider";

const App = () => {
  return (
    <ContextProvider>     
      <Home />
      <Footer />
    </ContextProvider>
  );
};

export default App;