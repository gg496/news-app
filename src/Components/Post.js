import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button,Image ,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import ReactDOM from 'react-dom';
class Post extends Component {
    constructor(props){
        super(props);
     }
    state = { 
        content:this.props.content,
        author:this.props.author,
        description:this.props.description,
        img:this.props.img,
        url:this.props.url
     }
    render() { 
        return ( <div style={{backgroundColor:"grey",
        textDecorationColor:"black",
       fontSize:20
        
        }}>
            
            <p>DESCRIPTION:{this.state.description}</p>
            <p>AUTHOR:{this.state.author}</p>
           {/* <p>IMAGE:<img src={this.state.img}></img></p> */}
           <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={this.state.img} fluid/>
    </Col>
    
  </Row>
</Container>
            <a href={this.state.url}><button type="button" class="btn btn-primary">READ MORE</button></a>
            <br />
            <br />
            <br />
        </div> );
    }
}
 
export default Post;
