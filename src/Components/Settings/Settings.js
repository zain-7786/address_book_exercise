import React, { useState, useEffect } from 'react';
//import { createBrowserHistory } from '../../utils/History';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Form, Input, InputNumber, Button } from 'antd';

const Settings = () => {
    let history = useHistory();
  const [nationality, setNationality] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('nat');
    setNationality(nat ? nat : 'US');
  }, []);

  const onFinish = (e) => {
    e.preventDefault();
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
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input value={input} onChange={(e) => setInput(e.target.value) }/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                Search
                </Button>
                </Form.Item>
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