/**
 * @file:   文件描述
 * @author: lulu
 * @date:   2019/3/5
 */
import React, {Component} from 'react';
import {Header, Footer, Content} from '../../components/pc'
import {Button} from 'antd';
export default class PC extends Component{
    render() {
        return (
            <div className='app-pc'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
