import React from 'react'
import SearchBar from '../../utils/SearchBar';
import { Row, Col,Space } from 'antd';
//import InfiniteScrolling from '../utils/InfiniteScrolling';
import AddressList from '../AddressList/AddressList';
import { Layout } from 'antd';
import { Link } from "react-router-dom";

export function HomePage() {
    const { Content } = Layout;
    return (  
        <Content> 
            <Space direction="vertical">
            <Row align="middle" justify="center" >  
                <Col ><SearchBar /></Col>
            </Row>
            <AddressList />
            </Space> 
        </Content>
    )
}
