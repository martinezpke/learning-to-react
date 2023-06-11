export function TwitterFollowCard( {UserName = "unknown", name, isFollowing, NameImg} ) {
	

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
				<button className='tw-followCard-button'>Seguir</button>
			</aside>
		</article>
	);
}