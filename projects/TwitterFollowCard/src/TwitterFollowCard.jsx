import { useState } from 'react';

export function TwitterFollowCard({ UserName = "unknown", name, NameImg, initialIsFollowing }) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

	const text = isFollowing ? 'Siguiendo' : 'Seguir';
	const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';


	const handleClick = () => {
		setIsFollowing(!isFollowing);
	}

	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img
					className='tw-followCard-avatar'
					src={`https://pbs.twimg.com/profile_images/${NameImg}.jpg`}
					alt={name} />
				<div className='tw-followCard-info'>
					<strong>{name}</strong>
					<span className='tw-followCard-infoUserName'>@{UserName}</span>
				</div>


			</header>

			<aside>
				<button className={buttonClass} onClick={handleClick}>
					<span className='tw-followCard-text'>{text}</span> 
					<span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
				</button>
			</aside>
		</article>
	);
}