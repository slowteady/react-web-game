import React from 'react';
import { createRoot } from 'react-dom/client';
import MineSearch from './MineSearch';

const root = createRoot(document.querySelector('#root'));
root.render(<MineSearch />);