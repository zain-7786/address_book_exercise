import React, {useState, useEffect} from 'react';
import { Row,Col,Input, Space, Card } from 'antd';
import InfoCard from '../Components/InfoCard/InfoCard';
import { useDispatch, useSelector } from 'react-redux';
//import {getAllUsersData, randomUser} from '../Services/randomUser';
import DetailModal from '../Components/DetailModal/DetailModal';
import { fetchSingleUserData } from '../Redux/actions/userApiAction';

function SearchBar() {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const userData = useSelector(state =>state.userData.users);
    const nationalityFilter = useSelector(state=> state.natUsers.nationalUsers);
    const [searchTerm, setSearchTerm] = useState("");
    const [show, setShow] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
      };

    useEffect(() => {
        const results = userData && userData.filter(item =>
            (item.name.first.toLowerCase()+" "+item.name.last.toLowerCase()).includes(searchTerm.toLowerCase())
          );
          setFilteredUsers(results);
          console.log("filter",searchTerm)
    }, [searchTerm]);

    const handleDetails =(event) => {
        console.log(event.login.uuid);
        dispatch(fetchSingleUserData(event));
        setShow(true);
    }
    return (
        <Row className="search-bar__main">
            <Input placeholder="Search Users" enterButton size="middle" value={searchTerm} onChange={handleChange}/>
            <Space size={[8,16]} wrap>
            {nationalityFilter ?
                    nationalityFilter && nationalityFilter.map((user,index) => 
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
            
            :filteredUsers && filteredUsers.map(item => (
                <Col onClick={() => handleDetails(item)}  key={item.login.uuid} id={item.login.uuid}><InfoCard src={item.picture.thumbnail} title={item.name.first+" "+item.name.last} /></Col>
            ))}
            </Space>
            <DetailModal show={show} handleOk={()=> setShow(false)} handleCancel={()=> setShow(false)}/>
        </Row>
    )
}

export default SearchBar
