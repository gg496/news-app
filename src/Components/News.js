import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class News extends Component {
    constructor(props) {
        super(props);
        
      }
    



  printNewsFeed(){
      return (
        <div>
           
        {this.props.articles.map(article=>
            <div>
                {                        
                   <Post content={article.content}
               author={article.author} description={article.description}
               url={article.url} key={article.source.id} img={article.urlToImage} />
               
            
               }
           </div>)}
          </div>
      );
}
// clickhandler=(clickText)=>{
//     console.log("button clicked")
//     if(clickText === 'home'){
//         this.setState({urlc: url});
//         console.log("home");
//     }
//     else{
//         console.log(clickText);
//         this.setState({
//             urlc:"https://newsapi.org/v2/top-headlines?country=us&category="+clickText+"&apiKey=ffa26a3482be457bb6e96a98aad11f34"
            
//         })
//         console.log(this.state.urlc);
//     }
// }

    render() { 
        return ( 
            <div >
            
            {this.printNewsFeed()}
            
            </div>
             //<div></div>
        );
    }
}
 
export default News;