import './App.css';
import elephant from "./images/elephant.jpeg";
import "./style.css"


function App(props) {
  // code here
  const data = props.name

  return <div>
    <h1 className='text'>Kalvium Gallary</h1>
    <div className='main-container'>
      {
        data.map((ele, idx, data) =>{
          return <div key={ele.id}>
            <img src={ele.img} alt="" />
          </div>
        })
      }
    </div>
  </div>
}

export default App;