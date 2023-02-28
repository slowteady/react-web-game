import React from 'react';
import { createRoot } from 'react-dom/client';
import Games from './Games';

const root = createRoot(document.querySelector('#root'));
root.render(<Games />);