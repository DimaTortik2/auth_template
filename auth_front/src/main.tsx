import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { LoginPage } from './pages/login-page'
import { AuthLayout } from './pages/layouts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RegisterPage } from './pages/register-page'
import { MePage } from './pages/me-page'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes location={location}>
					<Route element={<AuthLayout />}>
						<Route path='/' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/me' element={<MePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>
)
