import { booksData } from '../data/books'


const Books = () => {
	const firstFiveElements=booksData.slice(0,5)
	return(
		<>
			<h2>Books</h2>
			<div className="proSection">
				{
					firstFiveElements.map((item) => {
						return (
							<div className="imgBox">
								<img className="proImage" src={item.image} alt=" " />
							</div>
						)
					})
				}

			</div>
		</>
	)
}
export default Books