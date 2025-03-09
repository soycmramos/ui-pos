import Header from '@components/Header'
import Nav from '@components/Nav'

export default function MainLayout({ children }) {
	return (
		<div className='main-layout'>
			<Header />
			<Nav />
			<main>{children}</main>
		</div>
	)
}
