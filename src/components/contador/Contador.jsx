import './Contador.css'

import React from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 5
        }
        this.inc = this.inc.bind(this)
    }

    // função inc usando sintaxe padrão de function
    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    // função dec usando sintaxe arrow function
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes onInc={this.inc} onDec={this.dec} />
            </div>
        )
    }
}

export default Contador