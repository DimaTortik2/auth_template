import { createContext, ReactNode, useState } from 'react'
import { INotificationType } from './notification.interface'

interface NotificationContextType {
	notificationText: string | null
	showNotification: ({
		message,
		type,
	}: {
		message: string
		type: INotificationType
	}) => void
	notificationType: INotificationType
}

export const NotificationContext = createContext<NotificationContextType>({
	notificationText: null,
	showNotification: () => {},
	notificationType: 'loading',
})

export function NotificationProvider({ children }: { children: ReactNode }) {
	const [notificationText, setNotificationText] = useState<string | null>(null)
	const [notificationType, setNotificationType] =
		useState<INotificationType>('loading')

	const showNotification = ({
		message,
		type,
	}: {
		message: string
		type: INotificationType
	}) => {
		setNotificationText(message)
		setNotificationType(type)
		setTimeout(() => setNotificationText(null), 5000)
	}

	return (
		<NotificationContext.Provider
			value={{ notificationText, showNotification, notificationType }}
		>
			{children}
		</NotificationContext.Provider>
	)
}
