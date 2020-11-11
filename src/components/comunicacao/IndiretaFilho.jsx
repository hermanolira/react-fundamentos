import React from 'react'

export default props => {
    
    const cb = props.quandoClicar
    const min = 40
    const max = 60
    const gerarIdade = _ => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = _ => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('Hermano', gerarIdade(), gerarNerd())}>
                Fornecer Informações
        </button>
        </div>
    )
}