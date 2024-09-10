import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { PI as numeroPI, elem } from './ts/teste.ts';
// exportacao padrao
import XPOT from './ts/nome.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {numeroPI + ' outro ' + elem}
    {' e tambem ' + XPOT.length}
    <App />
  </StrictMode>
)
