import React, { Fragment } from 'react';
import {REMOVE_TASK,COMPLETE_TASK,CHANGE_FILTER} from './Redux/Constants/Constants'

const App = () => (
  <Fragment>
    {`${REMOVE_TASK}, ${COMPLETE_TASK},${CHANGE_FILTER}`}
  </Fragment>
)

export default App;



 