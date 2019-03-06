/**
 * @author: lulu
 * @date: 2019/3/5
 * @desc:
 */
import React, {Component} from 'react';
import { Menu, Icon, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Header extends Component{
    render() {
        return (
           <div className='header'>
               <Row className='header-inner'>
                   <Col span={5} className='logo' >
                       <span>探索前端之路的小白--lalala</span>
                   </Col>
                   <Col span={18} offset={1}>
                       <Menu
                           mode="horizontal"
                       >
                           <Menu.Item key="mail">
                               <Icon type="mail" />Navigation One
                           </Menu.Item>
                           <Menu.Item key="mail1">
                               <Icon type="mail" />Navigation One
                           </Menu.Item>
                           <Menu.Item key="mail2">
                               <Icon type="mail" />Navigation One
                           </Menu.Item>
                       </Menu>
                   </Col>
               </Row>
           </div>
        );
    }
}
