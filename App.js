import React, {useState, useEffect} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Loading from './screens/LoadingScreen';
import Login from './screens/Login';
import ListPatients from './screens/ListPatients';

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="loading"
          component={Loading}
          initial={true}
          hideNavBar={true}
          title="Loading"
        />
        <Scene
          key="listPatients"
          component={ListPatients}
          hideNavBar={true}
          title="ListPatients"
        />

       
        <Scene
          key="login"
          component={Login}
          title="login"
          hideNavBar={true}
        />
      </Stack>
    </Router>
  );
}
