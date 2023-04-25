import { useState } from "react";

export function TwitterFollowCard ({userName, name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) 

    const buttonStyle = isFollowing
        ? 'tw-followCard-button following' 
        : 'tw-followCard-button'
        
    const text = isFollowing ? 'siguiendo' : 'seguir';

    const imageSrc = `https://unavatar.io/${userName}`;

    const handleClick = () => {
        setIsFollowing (!isFollowing)
    }

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="Avatar de luquita" src={imageSrc}/>
            <div className='tw-followCard-info'> 
                <strong>{name}</strong>
                <span className='tw-followCard-UserName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonStyle} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>

    </article>
    )
}