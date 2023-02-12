import React from 'react';
import { createRoot } from 'react-dom/client';
import NumberBaseball from './NumberBaseball-class';

const root = createRoot(document.querySelector('#root'));
root.render(<NumberBaseball />);