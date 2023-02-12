const React = require('react');
const { createRoot } = require('react-dom/client');
const WordRelay = require('./WordRelay-function');

const root = createRoot(document.querySelector('#root'));
root.render(<WordRelay />);