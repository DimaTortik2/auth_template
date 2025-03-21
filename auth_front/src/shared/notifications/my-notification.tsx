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
		<div className='w-full absolute top-0 flex justify-center'>
			<div
				className={clsx(
					styles[notificationType],
					'w-full min-[400px]:w-[400px] py-[15px] px-[50px] text-xl text-white rounded-b-2xl text-center opacity-85',
					className
				)}
			>
				{notificationText}
			</div>
		</div>
	)
}
