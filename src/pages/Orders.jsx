import { UserIcon, CalendarIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Orders() {
	document.title = 'Orders'

	const date = new Date().toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	})

	const arr = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0]

	return (
		<section className='h-full p-4'>
			<ul className='w-fit p-4 flex flex-col gap-y-4 rounded-lg border bg-white border-gray-300'>
				<li className='flex items-center justify-between'>
					<img src="https://avatar.iran.liara.run/public" alt="Avatar" className='size-14 mr-2' />
					<div className='flex flex-col'>
						<div className='flex justify-between'>
							<span className='text-title-color'>Carlos Ramos</span>
							<span className='text-green-500'>Completada</span>
						</div>
						<div className='flex justify-between'>
							<span className='text-sm'>{date}</span>
							<span className='text-lg'>$ 12500</span>
						</div>
					</div>
				</li>
				<li className='flex items-center justify-between'>
					<img src="https://avatar.iran.liara.run/public" alt="Avatar" className='size-14 mr-2' />
					<div className='flex flex-col'>
						<div className='flex justify-between'>
							<span className='text-title-color'>John Doe</span>
							<span className='text-green-500'>Pendiente</span>
						</div>
						<div className='flex justify-between'>
							<span className='text-sm'>{date}</span>
							<span className='text-lg'>$ 12500</span>
						</div>
					</div>
				</li>
			</ul>
		</section>
	)
}
