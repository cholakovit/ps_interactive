// Hooks
import React, { useState, useMemo } from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Context for the Theme
import { ColorModeContext } from './helper/Context'

// MUI Elements
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { PsTheme } from './helper/psTheme'

// Pages
import HomeView from './pages/Home'

// Components
import HeaderView from './components/Header/HeaderView'

function App() {

  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
  }),[])
  
  const theme = PsTheme(mode)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <HeaderView />
          <Router>
            <Routes>
              <Route path='/'>
                <Route index element={<HomeView />} />

                {/* Catch all - replace with 404 component if you want */}
                <Route path='*' element={<Navigate to='/' replace />} />
              </Route>
            </Routes>
          </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
