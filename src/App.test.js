import React from 'react';
import ReactDOM from 'react-dom';
import RocprDemo from './RocprDemo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RocprDemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
