import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import siteLogo from './assets/sitelogo.png';

// Import global styles
import './index.css'

// Import our custom CSS structure
import './css/index.css'

createRoot(document.getElementById("root")!).render(<App />);
