import React from 'react';
import { createRoot } from 'react-dom/client';
import Lotto from './Lotto-class';

const root = createRoot(document.querySelector('#root'));
root.render(<Lotto />);