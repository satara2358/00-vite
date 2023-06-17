import './App.css'
import TwitterCard from './TwitterCard'
 // Componente es una factoria de elementos q al ejecutarlo devuelve un elemento => react renderiza elementos
export default function App(){
  return(
    <div className='App'>
      <TwitterCard isFollowing userName={'satara2358'}>
        Tecnopolis
      </TwitterCard>
      <TwitterCard isFollowing={false} userName={'priscilla_ricart'}>
        Tesla
      </TwitterCard>
      <TwitterCard isFollowing >
        Ana Sofia Henao
      </TwitterCard>
      <TwitterCard isFollowing userName={'claudiaperlwitz'}>
        Claudia Perwitz
      </TwitterCard>
    </div>
    
  )
}