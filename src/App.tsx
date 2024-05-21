import { Provider } from "./contexts";
import Principal from "./pages/Principal";
import Site from "./components";
export default function App() {
  return (
    <Provider>
      <Site />
    </Provider>
  );
}
