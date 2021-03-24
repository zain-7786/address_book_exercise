import React, {useState, useEffect} from 'react';
import { Row,Col,Input, Space } from 'antd';
import AddressList from '../Components/AddressList/AddressList';
import InfoCard from '../Components/InfoCard/InfoCard';
import { useDispatch, useSelector } from 'react-redux';
import {getAllUsersData, randomUser} from '../Api/randomUser';
import DetailModal from '../Components/DetailModal/DetailModal';
import {Link} from "react-router-dom";

function SearchBar({show,setShow}) {
    const dispatch = useDispatch();
    const userData = useSelector(state =>state.userData.users);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
      };

    // useEffect(() => {
    //     dispatch(randomUser());
    // }, [])  

    useEffect(() => {
        const results = userData && userData.filter(item =>
            (item.name.first.toLowerCase()+" "+item.name.last.toLowerCase()).includes(searchTerm.toLowerCase())
          );
          setFilteredUsers(results);
          console.log("filter",searchTerm)
    }, [searchTerm]);
    return (
        <Row className="search-bar__main">
            <Input placeholder="Search Users" enterButton size="middle" value={searchTerm} onChange={handleChange}/>
            <Space size={[8,16]} wrap>
            {filteredUsers && filteredUsers.map(item => (
                <Col onClick={() => setShow(true)}><InfoCard src={item.picture.thumbnail} title={item.name.first+" "+item.name.last} /></Col>
            ))}
            </Space>
            <DetailModal show={show} handleOk={()=> setShow(false)} handleCancel={()=> setShow(false)}/>
        </Row>
    )
}

export default SearchBar
