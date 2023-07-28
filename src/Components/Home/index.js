import Lateral from '../Lateral'
import Mapa from '../Mapa'
import './Home.css'

function Home(){
    return(
        <main className='home'>
            <Lateral />
            <Mapa />
        </main>
    )
}

export default Home