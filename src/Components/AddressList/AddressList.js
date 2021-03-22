import React, {useState, useEffect} from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { Row, Col, Space,Spin, Modal,Button } from 'antd';
import {getAllUsersData} from '../../Api/randomUser';
import { useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import DetailModal from '../DetailModal/DetailModal';
import { Link } from 'react-router-dom'

function AddressList(){
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [data,setData] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            //const newUsers = dispatch(getAllUsersData(setData,page));
            const newUsers = await getAllUsersData(page);
            setUsers((prev) => [...prev, ...newUsers]);
            setLoading(false);
        }
        loadUsers();
    }, [page]);

    const loadUsers = async () => {
        setLoading(true);
        //const newUsers = dispatch(getAllUsersData(setData,page));
        const newUsers = await getAllUsersData(page);
        setUsers((prev) => [...prev, ...newUsers]);
        setLoading(false);
    }

    const handleDetails =(id) => {
        setShow(true);

    }
 

    return(
        <>
        {/* <Button onClick={() => {setShow(true)}}>BuTTOn</Button>
        <Modal title="User Details" visible={show} onOk={handleOk} onCancel={handleCancel}>
                <p>Name: </p>
                <p>Age: </p>
                <p>Email: </p>
        </Modal> */}
            <InfiniteScroll dataLength={users.length} next={loadUsers} hasMore={true} loader={<Row justify="center"><Spin tip="Loading..." /></Row>}>
                <Space size={[8,16]} wrap>
                    {users && users.map(user => <div key={user.login.uuid} onClick={() => setShow(true)}><InfoCard src={user.picture.thumbnail} title={user.name.first+" "+user.name.last}/></div>)}
                </Space>
            </InfiniteScroll>
            <DetailModal show={show} handleOk={()=> setShow(false)} handleCancel={()=> setShow(false)}/>
            
        </>
    );
}

export default AddressList;