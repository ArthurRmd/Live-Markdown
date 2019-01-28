import React, { Component } from 'react';
import './App.css';

import marked from 'marked'
class App extends Component {

  
  state = {

    base : " # Bonjour \n ## Bienvenue sur Live-Markdown  \n ",
    texte: ""

  }


  handleChange = event => {
    const texte = event.target.value
    this.setState({texte})
  }

  textToMark = texte =>{
   const html  = marked(texte, {sanitize: true})
   return { __html : html}
  }

  componentDidMount () {
   const texte = localStorage.getItem('texte')

   if ( texte === "") {
    console.log("Je suis vide")
    const base = this.state.base
    this.state.texte = this.state.base
    this.setState({base})
   }
   else {
    this.setState({texte})
   }
    
    console.log("Je suis monté")

  }

  componentDidUpdate (){
    const texte  = this.state.texte
    localStorage.setItem('texte', texte)
    console.log("Il y a eu une mise a jour")
  }

  render() {
    return (


      <div className="appli">


        <h1 className="text-center titre"> Live Markdown</h1>
      <div className="container">

        <div className="row">
      
          <div className="col-sm-6 zone-texte">
          <textarea  value={this.state.texte} onChange={this.handleChange}  className='form-control aera'>
            
          </textarea>
          </div>

          <div className="col-sm-6 zone-texte">
            <div dangerouslySetInnerHTML={this.textToMark(this.state.texte)}/>           
          </div>
      
        </div>


      </div>

      </div>
    );
  }
}

export default App;
