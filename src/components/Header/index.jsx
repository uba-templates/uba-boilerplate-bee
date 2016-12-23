import React, { Component } from 'react';
import { Navbar,FormControl, Badge, Icon } from 'tinper-bee';

import './index.css';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;
const SideContainer = Navbar.SideContainer;

class MyHeader extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	expanded : false,
	    	current : 1
	    }
	}
	onToggle(value) {
		this.setState({expanded:value});
	}
	handleClick(e) {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	}
	render(){
		return(
			<div id="demo6">
				<Navbar expanded={this.state.expanded} onToggle={this.onToggle.bind(this)} fluid={true}>
				   	<Toggle show/>
				    <Header>
					    <Brand>
					        	<a href="#"><img style={{width:140}} src="http://design.yyuap.com/logos/logox.png"/></a>
					    </Brand>
				    </Header>

					    <Nav pullRight>
					    	<NavItem eventKey={1}><FormControl type="text" placeholder="Search" /></NavItem>
						    <NavItem eventKey={2} href="#"><Badge dataBadge="4" colors="warning"><Icon type="bell-musical-tool"></Icon></Badge></NavItem>
						    <NavItem eventKey={3} href="#"><Icon type="comments"></Icon></NavItem>
						    <Menu mode="horizontal" className="dropdown">
						        <SubMenu title={<span>刘认华<Icon type="caret-down"></Icon></span>}>
						        	<Menu.Item key="setting:1">Option 1</Menu.Item>
						            <Menu.Item key="setting:2">Option 2</Menu.Item>
						            <Menu.Item key="setting:3">Option 3</Menu.Item>
						            <Menu.Item key="setting:4">Option 4</Menu.Item>
						        </SubMenu>
						      </Menu>
					    </Nav>
				</Navbar>
				<SideContainer onToggle={this.onToggle.bind(this)} expanded={this.state.expanded}>
					<Menu onClick={this.handleClick.bind(this)}
				        style={{ width: 240 }}
				        defaultOpenKeys={['demo3sub1']}
				        selectedKeys={[this.state.current]}
				        mode="inline"
				      >
				        <SubMenu key="demo3sub1" title={<span><span>Navigation One</span></span>}>
				          <MenuItemGroup title="Item 1">
				            <Menu.Item key="1">Option 1</Menu.Item>
				            <Menu.Item key="2">Option 2</Menu.Item>
				          </MenuItemGroup>
				          <MenuItemGroup title="Item 2">
				            <Menu.Item key="3">Option 3</Menu.Item>
				            <Menu.Item key="4">Option 4</Menu.Item>
				          </MenuItemGroup>
				        </SubMenu>
				        <SubMenu key="demo3sub2" title={<span><span>Navigation Two</span></span>}>
				          <Menu.Item key="5">Option 5</Menu.Item>
				          <Menu.Item key="6">Option 6</Menu.Item>
				          <SubMenu key="demo3sub3" title="Submenu">
				            <Menu.Item key="7">Option 7</Menu.Item>
				            <Menu.Item key="8">Option 8</Menu.Item>
				          </SubMenu>
				        </SubMenu>
				        <SubMenu key="demo3sub4" title={<span><span>Navigation Three</span></span>}>
				          <Menu.Item key="9">Option 9</Menu.Item>
				          <Menu.Item key="10">Option 10</Menu.Item>
				          <Menu.Item key="11">Option 11</Menu.Item>
				          <Menu.Item key="12">Option 12</Menu.Item>
				        </SubMenu>
				    </Menu>
				</SideContainer>
			</div>
		)
	}
}



export default MyHeader;
