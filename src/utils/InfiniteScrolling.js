import React, {useState, useEffect} from 'react';
import InfoCard from '../Components/InfoCard';
import { Row, Col, Space,Spin } from 'antd';
import {getAllUsersData} from '../Api/randomUser';
import InfiniteScroll from 'react-infinite-scroll-component';
import DetailModal from '../Components/DetailModal';
import { Link } from 'react-router-dom'

function InfiniteScrolling(){
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    const handleScroll = e => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        
        if(scrollHeight - scrollTop === clientHeight) {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            const newUsers = await getAllUsersData(page);
            setUsers((prev) => [...prev, ...newUsers]);
            setLoading(false);
        }

        loadUsers();
    }, [page]);

    const loadUsers = async () => {
        setLoading(true);
        const newUsers = await getAllUsersData(page);
        setUsers((prev) => [...prev, ...newUsers]);
        setLoading(false);
    }
    const handleModalOpen = () => {
        setShow(true);
    }

    return(
        <>
            <InfiniteScroll dataLength={users.length} next={loadUsers} hasMore={true} loader={<Row justify="center"><Spin tip="Loading..." /></Row>}>
                <Space size={[8,16]} wrap>
                    {users && users.map(user => <Link onClick={handleModalOpen}><InfoCard src={user.picture.thumbnail} title={user.name.first+" "+user.name.last} /></Link>)}
                </Space>
            </InfiniteScroll>
            <DetailModal show={show} handleOk={()=> setShow(false)} handleCancel={()=> setShow(false)}/>
        </>
    );
}

export default InfiniteScrolling;