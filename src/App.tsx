import { QueryClientProvider } from '@tanstack/react-query';
import AppRouterProvider from './AppRouterProvider';
import { queryClient } from './lib/react-query';

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRouterProvider />
      </QueryClientProvider>
    </div>
  );
};

export default App;
