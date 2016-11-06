import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

import Root from "./components/index"

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);
