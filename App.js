import React, {useState, useEffect} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Loading from './screens/LoadingScreen';
import Login from './screens/LoginScreen';
import BeforeLogin from './screens/BeforeLogin';

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
          key="beforeLogin"
          component={BeforeLogin}
          initial={true}
          hideNavBar={true}
          title="BeforeLogin"
        />

        <Scene key="login" component={Login} title="Login" hideNavBar={true} />
      </Stack>
    </Router>
  );
}
