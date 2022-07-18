import { gql, useQuery } from '@apollo/client';
//import { useQuery } from '@apollo/client';
import { useEffect/*, useState */} from 'react';
//import { useApolloClient } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { client } from './lib/apollo';
import { Header } from './components/Header';
import { Evento } from './pages/Evento';








function App() {

  return (
    <Evento />
  );
}

export default App
