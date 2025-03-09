import Container from '@components/Container'
import { Link } from 'react-router-dom'

export default function Customers() {
  document.title = 'Customers'

  return (
    <section className='py-12'>
      <Container>
        <Link to='/customers/new' className='bg-green-700 px-4 py-2 text-white'>
          Agregar nuevo cliente
        </Link>
      </Container>
      <Container className='py-12'>
        <table className='block w-1/2 bg-amber-200 px-12 py-4'>
          <thead>
            <tr className='bg-red-300'>
              <th>Nombre</th>
              <th>Identificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carlos Mario Ramos Pérez</td>
              <td>1007743188</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </section>
  )
}