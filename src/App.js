import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state={
      gambarprofil:'',
      inputnama:''
    }
  }

  render() {

    let klik = (e)=>{

    
      // let nama= document.getElementById('inputan').value
    
      this.setState({
        gambarprofil: `https://robohash.org/${this.state.inputnama}`
      })
    }
  


    return (
      <div class="container-fluid grid">
      <div class="row">
          <div class="col-12 text-center">

              <center>

              </center>
          </div>
      </div>

      <div class="row ">
          <div class="col-12 p-0  text-center">
          <input id="inputan" type="text" onChange={(e)=>{this.setState({inputnama: e.target.value})}}></input>
          <br/>
          <br/>
          <button className="btn btn-success" onClick={klik}>Klik</button>
          <div className="gambar">
       <img className="satu" src={this.state.gambarprofil}/>
       </div>

          </div>

        
</div>
      </div>
    );
  }
}

export default App;
