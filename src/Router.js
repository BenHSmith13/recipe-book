import React from 'react';
import { Router } from '@reach/router';

import Home from 'Components/View/Home';

export default function AppRouter() {
  return (
    <Router>
      <Home path='/' />
    </Router>
  )
}
