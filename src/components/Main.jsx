import React, { Component } from "react";
import { FaTrash , FaEdit , FaWindowClose } from "react-icons/fa";
import './Main.css'

// comentário


export default class Main extends Component {
    constructor(props) {
        super(props);
      this.state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
      }  
      this.handleChange = this.handleChange.bind(this);
      // this.buttonClick = this.buttonClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.clear = this.clear.bind(this);
    };

    clear(e){
        e.preventDefault();
        this.setState({
            novaTarefa: '',
        })};

handleChange(e){
    this.setState({
        novaTarefa: e.target.value,
    })};

handleSubmit(e){
    e.preventDefault();
    const{ tarefas, index } = this.state;
    let { novaTarefa } = this.state
    novaTarefa = novaTarefa.trim();
    if(tarefas.indexOf(novaTarefa) !== -1) return;
    
    const novasTarefas = [...tarefas];

    if( index === -1){
    this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
    });
    }else{
        novasTarefas[index] = novaTarefa;
        this.setState({
            tarefas: [...novasTarefas],
            index:-1,
            novaTarefa: '',
    });
    }
}

handleEdit(e, index) {
    const { tarefas } = this.state;
    this.setState({
        index,
        novaTarefa: tarefas[index],
    })
    
};

handleDelete(e, index) {
    console.log();
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({
        tarefas:[...novasTarefas],
    })
    
};

refreshpage(){
    window.location.reload();
}
        render() {
        const { novaTarefa, tarefas } = this.state;
                
    return(
    <div className="main">
    <h1>Hello Main Component</h1>
    <h3>Lista de Tarefas</h3>
    <form action="#" className="form" onSubmit={this.handleSubmit}>
        <input 
        type="text" 
        onChange={this.handleChange}
        value={novaTarefa} />
        <button type="submit">Enviar</button>
        <button type="submit" onClick={this.clear}>Limpar</button>
        <button 
        type="reset" 
        onClick={this.refreshpage}>
            <FaTrash className="reset"/>
        </button>
        </form>
        <div>
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (<li key={tarefa}>{tarefa}
            <span>
                <FaEdit 
                className="edit"
                onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose 
                className="delete"
                onClick={(e) => this.handleDelete(e, index)}
                />
            </span>
            </li>))}
        </ul>
        </div>
    </div>
    )    
}
}