import './Campos.css'

function Campos(props){

    const { valor, aoAlterado, endereco } = props;

    function aoDigitado(evento){
        aoAlterado(evento.target.value)
    }

    return(
        <section className='campo'>
            <label>
                Digite um CEP:
                <input 
                    type='text'
                    value={valor}
                    onChange={aoDigitado}
                    required
                    placeholder='Digite o CEP'
                />
            </label>
        </section>
    )
}

export default Campos