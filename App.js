import {AuthProvider} from './src/contexts/AuthContext';
import AppNavigation from './AppNavigation';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
