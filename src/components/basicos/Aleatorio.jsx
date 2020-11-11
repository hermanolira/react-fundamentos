import React from 'react'

export default props => {
    
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <div>
            <h1>Valor Aleatorio</h1>
            <p>Valor mínimo { min }</p>
            <p>Valor máximo { max }</p>
            <p>Valor escolhido { aleatorio }</p>
        </div>
    )
}