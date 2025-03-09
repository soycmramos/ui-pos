import Container from '@components/Container'
import { useLocation } from 'react-router-dom'

export default function Header() {
	const { pathname } = useLocation()
	const titles = {
		'/orders': 'Órdenes',
		'/products': 'Productos',
		'/customers': 'Clientes'
	}

	return (
		<header className='sticky top-0 bg-white border-b border-gray-300'>
			<Container className={`flex justify-between items-center h-full`}>
				<h1 className='text-3xl'>{titles[pathname]}</h1>
			</Container>
		</header>
	)
}
