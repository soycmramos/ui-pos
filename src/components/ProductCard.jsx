export default function ProductCard({ name, price }) {
	return (
		<article>
			<h2>{name}</h2>
			<span>{price}</span>
		</article>
	)
}
