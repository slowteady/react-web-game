import React from 'react';
import { createRoot } from 'react-dom/client';
import ResponseCheck from './ResponseCheck-function';

const root = createRoot(document.querySelector('#root'));
root.render(<ResponseCheck />);