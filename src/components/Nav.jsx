import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Link, useLocation } from 'react-router-dom'
import { ClipboardIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Nav() {
	const { pathname } = useLocation()

	const NavItem = ({ icon, to, text }) => {
		return (
			<li>
				<Link
					to={to}
					className={twMerge(clsx('px-4 py-2 flex items-center gap-1 hover:bg-green-500/10', {
						'bg-green-500/10 border-r-green-700/50 border-r-4 text-green-700 font-semibold': pathname == to
					}))}
				>
					{icon}
					{text}
				</Link>
			</li>
		)
	}

	return (
		<nav className='fixed w-1/6 h-full border-r-2 border-gray-200'>
			<div className='h-header-height p-4 flex items-center justify-center'>
				<Link to={'/'} className='text-xl font-semibold'>IL Caffe</Link>
			</div>
			<ul className='flex flex-col gap-1'>
				<NavItem icon={<ClipboardIcon className={'size-5'} />} to={'/orders'} text={'Órdenes'} />
				<NavItem icon={<ShoppingCartIcon className={'size-5'} />} to={'/products'} text={'Productos'} />
				<NavItem icon={<UserIcon className={'size-5'} />} to={'/customers'} text={'Clientes'} />
			</ul>
		</nav>
	)
}
