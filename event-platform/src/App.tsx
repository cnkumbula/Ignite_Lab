import { ApolloProvider, gql, useQuery } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import { Header } from './components/Header';
import { Evento } from './pages/Evento';
import { Router } from './Router';


function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App
