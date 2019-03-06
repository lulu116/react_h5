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
            <Row className='header'>
                <Col span={5}>
                    dddd
                </Col>
                <Col span={19}>
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
        );
    }
}
