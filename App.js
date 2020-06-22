// import React, { useState } from 'react';
// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
// import { ApolloProvider, graphql } from 'react-apollo';
// import Login from './screens/Login';
// import {Router, Stack, Scene} from 'react-native-router-flux';

// import Loading from './screens/LoadingScreen';
// import ListPatients from './screens/ListPatients';
// import MedicalCard from './screens/MedicalCard';
// import Record from './screens/Record';

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://eu1.prisma.sh/iryna-sirenko-681f78/prisma-tutorial/dev',
//     headers: {
//       authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJwcmlzbWEtdHV0b3JpYWxAZGV2Iiwicm9sZXMiOlsiYWRtaW4iXX0sImlhdCI6MTU5MjE1NDI1OCwiZXhwIjoxNTkyNzU5MDU4fQ.R3LgW07LNp-e4nxufeLPZsAHLPvl-YP_-X1VncTCpzU"
//     }
//   }),
//   cache: new InMemoryCache()
// });

// // const client = new ApolloClient({
// //   link: new HttpLink({
// //     uri: 'http://localhost:4000/',

// //   }),
// //   cache: new InMemoryCache()
// // });

// export default function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <Stack key="root">
//           <Scene
//             key="loading"
//             component={Loading}
//             initial={true}
//             hideNavBar={true}
//             title="Loading"
//           />
//           <Scene
//             key="listPatients"
//             component={ListPatients}
//             hideNavBar={true}
//             title="ListPatients"
//           />
//           <Scene
//             key="medicalCard"
//             component={MedicalCard}
//             hideNavBar={true}
//             title="MedicalCard"
//           />

//           <Scene
//             key="login"
//             component={Login}
//             title="login"
//             hideNavBar={true}
//           />
//            <Scene
//             key="record"
//             component={Record}
//             title="record"
//             hideNavBar={true}
//           />
//         </Stack>
//       </Router>
//     </ApolloProvider>
//   );
// }

import React, {useState} from 'react';
// import Wallet from './screens/Wallet';PinguinAnimation
import PinguinAnimation from './screens/PinguinAnimation';
// import LiquidSwipe from './screens/LiquidSwipe';

export default function App() {
  return <PinguinAnimation />;
}
