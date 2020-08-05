import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import './Header.css'
const Header = () => {

  /*const toLogin = (props) =>{
    this.props.history('')
  }*/

  return (
    <>
      <Navbar style={{backgroundColor:'#F5F5F5'}} >
        <Navbar.Brand  href="#home">RMU<span style={{color:'#CC0033'}}>T</span><span style={{color:'#33FF66'}}>R</span></Navbar.Brand>
        <Nav className="mr-auto nav">
          <Nav.Link href="#home">ลงทะเบียนรับทุน</Nav.Link>
          <Nav.Link href="#features">ตรวจสอบ</Nav.Link>
          <Nav.Link href="#pricing">ประกาศผลทุนการศึกษา</Nav.Link>
        </Nav>
        <Form inline>
        <Button variant="outline-success">เข้าสู่ระบบ</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default Header