export default function TwitterCard ({ userName = 'unknow', children, isFollowing }){
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
      <button className="article-buttonTw">
        Seguir
      </button>
    </aside>
  </article>
  )
}