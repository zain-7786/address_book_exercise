import React, { useState, useEffect } from 'react';
//import { createBrowserHistory } from '../../utils/History';
import History from "../../utils/History";
import { Link } from 'react-router-dom';
import { Row,Col,Form, Input, InputNumber, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';

const Settings = ({location}) => {
  const [nationality, setNationality] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const nat = params.get('nat');
    setNationality(nat ? nat : 'US');
  }, []);

  const onFinish = (e) => {
    setNationality(input);
    History.push('https://randomuser.me/api/?nat=' + input);
    setInput('');
  };

  return (
    <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}  align="middle">
            <Col span={6} push={2}>
            <h1><SettingFilled/> Settings </h1>
            </Col>
            
            <Col span={12} pull={1}>
            <Form name="nest-messages" onFinish={onFinish}>
                <Form.Item >
                    <Input value={input} onChange={(e) => setInput(e.target.value) }/>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                Search
                </Button>
            </Form>
            </Col>
            <Col>
                <Link to='/'>&#11207; Go Back</Link>
            </Col>
        </Row>
    </>
  );
};

export default Settings;