import React, { Fragment } from 'react';
import { Notification, Section } from 'rbx';
import './App.scss';

function App() {
  return (
    <Fragment>
      <Section>
        <Notification color="success">
          Javascript Notes!
        </Notification>
      </Section>
    </Fragment>
  );
}

export default App;
