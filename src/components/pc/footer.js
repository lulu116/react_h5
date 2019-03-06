/**
 * @author: lulu
 * @date: 2019/3/5
 * @desc:
 */
import React, {Component} from 'react';
import {Col, Row} from 'antd';
export default class Footer extends Component{
    render() {
        return (
            <div className='footer'>
                <Row className="sitebox">
                    <Col className="left" span={8}>
                        <ul>
                            <li>
                                <img src='../assets/favicon.ico' alt="我的Github"/>
                                <span>我的Github</span>
                            </li>
                            <li>
                                <img src="../assets/favicon.ico" alt="我的微信"/>
                                <span>我的微信</span>
                            </li>
                        </ul>
                    </Col>
                    <Col className="right" span={16}>
                        <h3>站点声明：</h3>
                        <p>1、本站为个人探索前端的成长之路，均为本人独立设计而成.</p>
                        <p>2、所有内容均真实可靠，如有问题请联系: <span>sliusting970@163.com</span></p>
                        <p>Copyright © liuting All Rights Reserved.</p>
                    </Col>
                </Row>
                <div id="top">
                    <a href="#" title='返回顶部'></a>
                </div>
            </div>
        );
    }
}
