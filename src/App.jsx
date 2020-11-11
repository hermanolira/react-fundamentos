import './App.css'

import React from "react"

import Card from './components/layout/Card'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtde={8} />
            </Card>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#050">
                <Input />
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#0C00F0">
                <IndiretaPai />
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#6BBCC5">
                <DiretaPai />
            </Card>
            <Card titulo="#08 - Condicional" color="#6BB005">
                <ParOuImpar numero={22} />
                <UsuarioInfo usuario={{ nome: "Hermano" }} />
                <UsuarioInfo usuario={{ email: 'herm@no.com' }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#6A3005">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 - Repetição" color="#6A3FF5">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#6A3955">
                <Familia sobreNome="Lira">
                    <FamiliaMembro nome="Hermano" />
                    <FamiliaMembro nome="Hayanne" sobreNome="Matos" />
                    <FamiliaMembro nome="Gabriel" />
                    <FamiliaMembro nome="Bernardo" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Hermano"
                    nota={9.8} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
