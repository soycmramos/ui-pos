import { twMerge } from 'tailwind-merge'

export default function Container({ children, className, ...res }) {
	return (
		<div
			className={twMerge('container px-4 m-auto max-w-7xl', className)}
			{...res}
		>
			{children}
		</div>
	)
}
