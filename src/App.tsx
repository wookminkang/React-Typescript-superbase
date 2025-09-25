// app.tsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Portfolios } from './pages/Portfolios'
import { PostExample } from './pages/post/PostExample'
import { ThemeProvider } from './components/ThemeProvider'
import { AnimatePresence } from 'framer-motion'
function AppRoutes() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location } | undefined;
  const background = state?.backgroundLocation ?? null;

  return (
    <>
      <Routes>
        <Route index element={<Portfolios />} />
        {/* 직접 URL 접근 시엔 풀페이지 상세 */}
        <Route path="post/:id" element={<Portfolios />} />
      </Routes>

      
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </ThemeProvider>
  )
}
