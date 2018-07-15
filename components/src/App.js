import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import State from './components/state';
import List from './components/list';
import Hover from './components/hover';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <State initialState={{ loading: false, data: null }} >
            {
              ({ state, setState }) => {
                return (
                  <div>
                    <div>Reusable State Component Examples </div>
                    <div>{JSON.stringify(state)}</div>
                    <div style={{ cursor: 'pointer', backgroundColor: 'gray', color: 'white', padding: 20 }}
                      onClick={() => setState({ loading: !state.loading })} >Toggle loading</div>
                  </div>
                )
              }
            }
          </State>
          <State initialState={{ counter: 0 }} >
            {
              ({ state, setState }) => {
                return (
                  <div>
                    <div>Reusable State Component Examples 1 </div>
                    <div>{JSON.stringify(state)}</div>
                    <div style={{ cursor: 'pointer', backgroundColor: 'gray', color: 'white', padding: 20 }}
                      onClick={() => setState({ counter: state.counter + 1 })} >Increament</div>
                    <div style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', padding: 20 }}
                      onClick={() => setState({ counter: state.counter - 1 })} >Decrement</div>
                  </div>
                )
              }
            }
          </State>

          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />

          <List initial={['Apple', 'Mango', 'Banana']} >
            {({ list, push, pull }) => (
              <div>
                <div>TodoList reuseable component</div>
                <div>{JSON.stringify(list)}</div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  push(this.textRef.value)
                  this.textRef.value = "";
                }} >
                  <input type='text' ref={(node) => this.textRef = node} />
                  <button>Add</button>
                </form>
                <ol>
                  {
                    list.map((v, i) => {
                      return (
                        <li onClick={() => {
                          pull((listItem, index) => {
                            // console.log(i === index, i, index)
                            return i === index
                          })
                        }} key={i} >{v}</li>
                      )
                    })
                  }
                </ol>
              </div>
            )}
          </List>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />


<Hover>
  {
    ({hovered, bind}) => (
      <section>
        <div {...bind} >Hover Me</div>

        {
          hovered ?  'Hovering' : 'notHovering'
        }
        <button style={{backgroundColor: hovered ? 'green' : 'blue', color: 'white'}} {...bind} >2ndHover Me</button>

        {
          hovered ?  '2Hovering' : '2notHovering'
        }
      </section>
    )
  }
</Hover>

        </div>
      </div>
    );
  }
}

export default App;
