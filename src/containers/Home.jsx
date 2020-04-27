import React, { useRef }  from 'react';
import { connect } from 'react-redux'
import {updateContent,updateId} from '../actions'
import { Badge,Container,Row,Col,InputGroup,FormControl,Button } from 'react-bootstrap';
//import logo from '../assets/static/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/containers/Home.css"


const Home = ({id,content,updateContent,updateId}) => {
  
  const inputref = useRef(null)
  
  return(
    <div className="App">
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <h1>
            Fast react project starter <Badge variant="secondary">Version 1.0</Badge>
          </h1>
          <p></p>
        </div>
        <Container>
          <Row className="justify-content-md-center">
           <Col>
            <p>
              The redux store have the initialState values 
            </p>
            <p>
            <Badge variant="secondary">id</Badge> : {id} 
            <Badge variant="secondary">content</Badge> : {content}
          </p> 
        <div>
          <InputGroup >
            <FormControl 
              placeholder="Add values to store"
              aria-label="Add values to store"
              aria-describedby="basic-addon2"
              ref={inputref}
           />
            <InputGroup.Append>
              <Button onClick={() => {updateContent(inputref.current.value)}} variant="outline-secondary">Foo</Button>
              <Button onClick={() => {updateId(inputref.current.value)}}variant="outline-secondary">Id</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
          </Col>
            <Col>
            <h6 >
              Get Started with react Immediately. You don't need to install 
              or configure tools like webpack or Babel. this proyect is
              preconfigured with react-bootstrap, react-router , react-redux 
              "store/reducers/actions" include REDUX_DEVTOOLS_EXTENSION configuration
            </h6>  
            <h3>Start to coding your components immediately</h3>
          </Col>
          </Row>
          </Container>
                  
            <a
              className="App-link"
              href="https://github.com/jasseral"
              target="_blank"
              rel="noopener noreferrer"
              >
                 github.com@jasseral
            </a>
        </header>
      </div>
    )
  }
  
  const mapStateToProps = state => {
    return {
      id : state.id,
      content : state.content
    }
  }
  
  export default connect(mapStateToProps,{updateContent,updateId})(Home)
  