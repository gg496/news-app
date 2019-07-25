import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import News from './Components/News';
import NavApp from './Components/NavApp';
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
var url;
class  App extends Component {
  state = {  
    articles:[]
  }
  doclickHandler=(val)=>{
    if(val==="search"){
      console.log(document.getElementById("search").value)
      url='https://newsapi.org/v2/everything?' +
      'q=' +document.getElementById("search").value+
      '&apiKey=ffa26a3482be457bb6e96a98aad11f34';
      // url='https://newsapi.org/v2/top-headlines?' +
      // 'country=us&' +
      // 'apiKey=ffa26a3482be457bb6e96a98aad11f34';
    }
    else if(val!==" "&&val!=='home'){
       url = "https://newsapi.org/v2/top-headlines?" +
      'country=us&category='+ val+
      '&apiKey=ffa26a3482be457bb6e96a98aad11f34';
    }
     
    else{
      url='https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=ffa26a3482be457bb6e96a98aad11f34';
    }
    
    fetch(url)
      .then((response)=> {
          //console.log(response.json());
          //this.state.articles=response.json()
        //   this.setState({
        //     // articles:JSON.parse(this.state.articles)
        //     articles:response.json().articles
        //    })
          return response.json();
          
          //console.log(this.state.articles);
      })
      .then((json)=>{
        this.setState({
            // articles:JSON.parse(this.state.articles)
            articles:json.articles
           })
           console.log(this.state.articles);
      })
}
// dosearchHandler=()=>{

// }
componentDidMount=()=>{
        this.doclickHandler(" ");
    //var req = new Request(this.state.urlc);
    
     }

    //  componentDidUpdate(prevProps, prevState) {
    //     if(prevState.urlc !== this.state.urlc){
    //         // console.log("i am re-rendering");
    //         this.loaddata();
    //     }
    //   } 


  render() { 
    return ( <div>
      <NavApp  clickhandler={this.doclickHandler} />
       <News articles={this.state.articles}/>
    </div> );
  }
}
 
export default App;
