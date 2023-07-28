import { useState } from 'react'
import Campos from '../Campos'
import Rodape from '../Rodape'
import './Lateral.css'

function Lateral(){

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState([])

    function manipulaEndereco (evento){

        const cep = evento.target.value

        setEndereco({
            cep
        })
        if(cep && cep.length === 8){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => resposta.json())
            .then(dados => {
                setEndereco(enderecoAntigo => {
                    return{
                        ...enderecoAntigo,
                        rua: dados.logradouro,
                        bairro: dados.bairro,
                        cidade: dados.localidade,
                    }
                })
            })
        }
        console.log(endereco)
    }

    return(
        <aside className='lateral'>
            <h1>Address Finder</h1>
            <section>
                <Campos 
                  valor={cep}
                  aoAlterado={valor => setCep(valor)}
                  endereco={manipulaEndereco} 
                />
            </section>
            <Rodape />
        </aside>
    )
}

export default Lateral