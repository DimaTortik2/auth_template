import { useMemo, useState } from 'react'
import { instance } from '../shared/api'

export function MePage() {
	const [data, setData] = useState({ email: '', roles: [] })

	useMemo(() => {
		instance.get('/user/me').then(resp => {
			setData(resp.data)
			console.log(resp.data)
		})
	}, [])

	const email = data.email
	const roles = data.roles

	return (
		<div>
			<p>email: {email}</p>
			<p>roles: {roles.join(' ')}</p>
		</div>
	)
}
