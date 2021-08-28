import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/GithubProvider';

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
