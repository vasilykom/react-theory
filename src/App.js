import React,{Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component{

    state ={
        cars:[
            {name:'Ford', year:2019},
            {name:'Mazda', year:2019},
            {name:'Porche', year:2019},
        ],
        pageTitle:'Best Cars list'
    };

    changeTitleHandler=(newTitle)=>{
        this.setState({
            pageTitle: newTitle
        })
    };

    handleInput =(event)=>{
        this.setState({
            pageTitle: event.target.value
        })
    };
    render() {
        const divStyle ={
            textAlign: 'center'
        };
        //const cars=this.state.cars;
        //const title=this.state.pageTitle;

        return(
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <input type="text" onChange={this.handleInput}/>
                <button onClick={this.changeTitleHandler.bind(this, 'Changed title' )}>Change Title</button>
                {this.state.cars.map((car, index)=>{
                    return(
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeTitle={()=>this.changeTitleHandler(car.name)}
                        />
                    )
                })}
           {/*     <Car
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
                />
                <Car
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle={()=>this.changeTitleHandler(cars[1].name)}
                />
                <Car
                name={cars[2].name}
                year={cars[2].year}
                onChangeTitle={this.changeTitleHandler.bind(this, cars[2].name)}
            />*/}

            </div>
        )
    }
}
/*
function App() {
  const divStyle={
    textAlign:'center'
  };
  return (
    <div style={divStyle} >
      <h1>Privet</h1>
      <Car name={'ford'} year={2019}/>
      <Car name={'ford'} year={2019}/>

    </div>
  );
}
*/

export default App;
