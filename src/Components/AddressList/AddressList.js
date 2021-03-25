import React, {useState, useEffect} from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { Row, Col, Space,Spin, Modal,Button, Card } from 'antd';
import {getAllUsersData, randomUser} from '../../Api/randomUser';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import DetailModal from '../DetailModal/DetailModal';
import { Link } from 'react-router-dom';
import { fetchSingleUserData } from '../../actions/userApiAction';
import SearchBar from '../../utils/SearchBar';


function AddressList(){
    const { Meta } = Card;
    const userData = useSelector(state =>state.userData.users);
    //const eachDetail = useSelector(state => state.userData.products.find(item=>item.login.uuid))
    const nationalityFilter = useSelector(state=> state.natUsers.nationalUsers);
    console.log("nationalityfilters: ", nationalityFilter);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [detail,setDetail] = useState({});

    useEffect(() => {
        dispatch(randomUser(page));
    }, []);

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            //const newUsers = dispatch(getAllUsersData(setData,page));
            const newUsers = await getAllUsersData(page);
            const cacheUsers = await getAllUsersData(page+1);
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
        console.log(event.login.uuid);
        //setDetail(event);
        dispatch(fetchSingleUserData(event));
        setShow(true);
    }
    return(
        <>
<<<<<<< HEAD
        { nationalityFilter ?
            (<InfiniteScroll dataLength={nationalityFilter.length} next={loadUsers} hasMore={true} loader={<Row justify="center"><Spin tip="Loading..." /></Row>}>
=======
            <Row align="middle" justify="center" >  
                <Col ><SearchBar show={show} setShow={setShow}/></Col>
            </Row>
            <InfiniteScroll dataLength={users && users.length} next={loadUsers} hasMore={true} loader={<Row justify="center"><Spin tip="Loading..." /></Row>}>
>>>>>>> 9eb3378e6642fe5257e73162f386be406fe20fed
                <Space size={[8,16]} wrap>
                    
                    {nationalityFilter && nationalityFilter.map((user,index) => 
                        <Col onClick={() => handleDetails(user)}  key={user.login.uuid} id={user.login.uuid}>
                            <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<img alt="example" src={user.picture.thumbnail} />}
                            justify="space-around" 
                            >
                            <Meta title={user.name.first+" "+user.name.last} />
                            </Card> </Col>
                )}
                </Space>
            </InfiniteScroll>)
                    :
            (<InfiniteScroll dataLength={users.length} next={loadUsers} hasMore={true} loader={<Row justify="center"><Spin tip="Loading..." /></Row>}>
                <Space size={[8,16]} wrap>        
                    {users && users.map((user,index) => 
                        <Col onClick={() => handleDetails(user)}  key={user.login.uuid} id={user.login.uuid}>
                            <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<img alt="example" src={user.picture.thumbnail} />}
                            justify="space-around" 
                            >
                            <Meta title={user.name.first+" "+user.name.last} />
                            </Card> </Col>
                    )
                    }
                </Space>
            </InfiniteScroll>)}
            <DetailModal show={show} handleOk={()=> setShow(false)} handleCancel={()=> setShow(false)} />
            {/* <InfoCard src={user.picture.thumbnail} title={user.name.first+" "+user.name.last} onClick={handleDetails}/> */}
        </>
    );
}

export default AddressList;