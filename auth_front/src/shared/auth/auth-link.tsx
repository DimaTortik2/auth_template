import clsx from 'clsx'
import { Link } from 'react-router'

interface IProps {
	type: 'login' | 'register'
	className?: string
}

export function AuthBackLink({ type, className }: IProps) {
	return (
		<div className={clsx(className,'inline-block')}>
			{type === 'login' && (
				<Link className='p-0 m-0' to={'/'}>
					Войти
				</Link>
			)}
			{type === 'register' && (
				<Link className='p-0 m-0' to={'/register'}>
					Создать
				</Link>
			)}
		</div>
	)
}
