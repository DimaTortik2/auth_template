import clsx from 'clsx'
import { useContext } from 'react'
import { NotificationContext } from './notification-provider'

interface IProps {
	className?: string
}

export function MyNotification({ className }: IProps) {
	const { notificationText, notificationType } = useContext(NotificationContext)

	if (!notificationText) return null

	const styles = {
		error: 'bg-red-400',
		success: 'bg-green-400',
		loading: 'bg-gray-500',
	}

	return (
		<div
			className={clsx(
				'py-[15px] px-[50px] text-xl text-white rounded-tl-2xl absolute bottom-0 right-0',
				styles[notificationType],
				className
			)}
		>
			{notificationText}
		</div>
	)
}
