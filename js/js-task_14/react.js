//const ReactElement = React.createElement("button", null, "My button from class component")
//  function ReactComponent( {text} ) {

//     function clickHandler(name) {
//         alert(`Hello ${name}`)
//     }
//     function changeHandler(event) {
//         console.log(event.currentTarget.value)
//     }

//     return (
//         <div>
//             <button onClick={() => clickHandler(name: 'Jhone')}>{text}</button>
//             <input onChange={changeHandler} type="text"/>
//         </div>
//         )
// }
class ReactComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={text: `default text`}

        this.clickHandler=this.clickHandler.bind(this)
        this.changeHandler=this.changeHandler.bind(this)
    }

    clickHandler(name) {
        alert(`Hello ${name}`)
    }
    changeHandler(event) {
        this.setState({text: event.currentTarget.value})
        console.log(event.currentTarget.value)
    }
        
    render(){
        return(
        <div>
            <button onClick={() =>this.clickHandler(name: 'Jhone')}>{this.props.text}</button>
            <input onChange={this.changeHandler} type="text"/><br/>
            {this.state.text}
       </div>
        )
    }
}

ReactDOM.render(<ReactComponent text='name from props'/>, document.getElementById("root"))
