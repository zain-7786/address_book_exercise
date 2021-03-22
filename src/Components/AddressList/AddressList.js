import React, {useState, useEffect} from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { Row, Col, Space,Spin, Modal,Button, Card } from 'antd';
import {getAllUsersData, randomUser} from '../../Api/randomUser';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import DetailModal from '../DetailModal/DetailModal';
import { Link } from 'react-router-dom'

function AddressList(){
    const { Meta } = Card;
    const userData = useSelector(state =>state.userData.products);
    //const eachDetail = useSelector(state => state.userData.products.find(item=>item.login.uuid))
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [data,setData] = useState([]);

    useEffect(() => {
        dispatch(randomUser(page));
    }, []);

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            //const newUsers = dispatch(getAllUsersData(setData,page));
            const newUsers = await getAllUsersData(page);
            console.log("newUsers", newUsers)
            const cacheUsers = await getAllUsersData(page+1);
            console.log("cacheUsers", cacheUsers);
            setUsers((prev) => [...prev, ...newUsers, ...cacheUsers]);
            setLoading(false);
        }
        loadUsers();
    }, [page]);

    const loadUsers = async () => {
        setLoading(true);
        //const newUsers = dispatch(getAllUsersData(setData,page));
        const newUsers = await getAllUsersData(page);
        const cacheUsers = await getAllUsersData(page+1);
        setUsers((prev) => [...prev, ...newUsers, ...cacheUsers]);
        setLoading(false);
    }

    const handleDetails =(event) => {
        console.log("err");
        console.log(event.target.id);
        //setShow(true);
        
    }
 
    return(
        <>
            <InfiniteScroll dataLength={users.length} next={loadUsers} hasMore={true} loader={<Row justify="center"><Spin tip="Loading..." /></Row>}>
                <Space size={[8,16]} wrap>
                    {users && users.map((user,index) => 
                        <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<img alt="example" src={user.picture.thumbnail} />}
                            justify="space-around"
                            id={index}
                            key={user.login.uuid}
                            onClick={handleDetails}
                        >
                            <Meta title={user.name.first+" "+user.name.last} />
                        </Card>
                    )}
                </Space>
            </InfiniteScroll>
            <DetailModal show={show} handleOk={()=> setShow(false)} handleCancel={()=> setShow(false)}/>
            {/* <InfoCard src={user.picture.thumbnail} title={user.name.first+" "+user.name.last} onClick={handleDetails}/> */}
        </>
    );
}

export default AddressList;