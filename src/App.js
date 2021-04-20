import { QueryClient, QueryClientProvider } from 'react-query';
import AutoComplete from "./components/AutoComplete";
import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AutoComplete />
      </QueryClientProvider>
    </div>
  );
}

export default App;
