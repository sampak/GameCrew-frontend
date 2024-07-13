import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import { IUser } from './dto/base/IUser';
import './translation/i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
function App() {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <RouterProvider router={router} />
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
