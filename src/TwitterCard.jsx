import { useState } from "react"

export default function TwitterCard ({ userName = 'unknow', children}){

  const [isFollowing, setIsFolloeiong] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'article-buttonTw is-following'
    : 'article-buttonTw'
  
  const handleClick = () =>{
    setIsFolloeiong(!isFollowing)
  }

  return(
    <article className='articleTw'>
    <header className="article-headerTw">
      <img
        className="article-imgTw"
        alt="Avatar"
        src={`https://unavatar.io/${userName}`}/>
      <div className="article-header-divTw">
        <strong>{children}</strong>
        <span className="article-header-spanTw">@{userName}</span>
      </div>
    </header>
    <aside>
      <button className={buttonClassName} onClick={handleClick}>
        <span className="article-buttonTw-text">{text}</span>
        <span className="article-buttonTw-stopFollow">Dejar de seguir</span>
      </button>

    </aside>
  </article>
  )
}