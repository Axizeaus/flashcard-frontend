import MainPage from "./components/MainPage";
import { AppProvider } from "./components/AppContext";

export default function App() {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}
