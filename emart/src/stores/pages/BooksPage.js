import React from 'react'
import {booksData} from '../data/books'

const BooksPage=()=>{
	return(
		<>
			<div className='pageSection'>
				{
					booksData.map((i) => {
						return (
							<div>
								<div className="pageImg">
									<img className="books" src={i.image } alt=""/>
								</div>
								<div>books page content</div>
								<div className="proModel">
									{i.title},{i.author }
								</div>
							</div>

						)
					})
				}
			</div>
		</>
	)
}
export default BooksPage