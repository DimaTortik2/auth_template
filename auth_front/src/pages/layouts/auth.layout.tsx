import { Outlet } from 'react-router'
import { MyNotification, NotificationProvider } from '../../shared/notifications'

export function AuthLayout() {



	return (
		<NotificationProvider>
			<div className="relative w-[100vw] h-[100vh] bg-[url('/bg.jpg')] flex items-center justify-center">
				<Outlet />
				<MyNotification/>
			</div>
		</NotificationProvider>
	)
}
