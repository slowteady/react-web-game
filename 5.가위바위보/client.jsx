import React from 'react';
import { createRoot } from 'react-dom/client';
import RSP from './RSP-function';

const root = createRoot(document.querySelector('#root'));
root.render(<RSP />);