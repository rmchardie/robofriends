import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5'>
			<img alt='Robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div className='tc'>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>	
		);
}

export default Card;