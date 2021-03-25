import React, { useState, useEffect, useRef } from 'react';
//import { createBrowserHistory } from '../../utils/History';
import History from "../../utils/History";
import { Link, useHistory } from 'react-router-dom';
import { Row,Col,Form, Input, InputNumber, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { nationalityApi } from '../../Api/nationalityApi';

const Settings = ({location}) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [nationality, setNationality] = useState('');
  const [input, setInput] = useState('');

  const onFinish = async (event) => {
    if(input){
      dispatch(nationalityApi(input));
    }
  }
  const routeChange = () => {
    let path = '/';
    history.push(path);
    if(input){
      dispatch(nationalityApi(input));
    }
  }

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
                <Button onClick={routeChange}>&#11207; Go Back</Button>
            </Col>
        </Row>
    </>
  );
};

export default Settings;