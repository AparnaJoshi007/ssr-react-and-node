import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import { indexHtml } from './indexHtml';

export const app = express();

// Serve generated assets
app.use(express.static(path.resolve(__dirname, '../build')));
app.use((req, res) => {
  const markup = ReactDOMServer.renderToString(<App />);
  const fullMarkup = indexHtml({
    markup,
  });
  res.status(200).send(fullMarkup);
});