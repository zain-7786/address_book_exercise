import React, {useState, useEffect} from 'react';
import { Row,Input } from 'antd';
import AddressList from '../Components/AddressList/AddressList';
import InfoCard from '../Components/InfoCard/InfoCard';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
      };

    useEffect(() => {
        const results = users.filter(item =>
            item.name.first.toLowerCase().includes(searchTerm)
          );
          setFilteredUsers(results);
    }, [searchTerm]);
    return (
        <Row className="search-bar__main">
            <Input placeholder="Search Users" enterButton size="large" value={searchTerm} onChange={handleChange}/>
            {filteredUsers.map(item => (
                
                <InfoCard src={item.picture.thumbnail} title={item.name.first+" "+item.name.last} />
            ))}

        </Row>
    )
}

export default SearchBar
