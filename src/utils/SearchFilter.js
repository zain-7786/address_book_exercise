// import React, {useState, useEffect} from 'react';
// //import 'antd/dist/antd.css';
// import { Row,Input } from 'antd';
// import AddressList from '../Components/AddressList';

// function SearchBar() {
//     const [search, setSearch] = useState("");
//     const [filteredUsers, setFilteredUsers] = useState([]);
//     const [users, setUsers] = useState([]);
//     const { Search } = Input;
//     const onSearch = value => console.log(value);

//     useEffect(() => {
//         setFilteredUsers(
//             users.filter((user) => user.name.first.toLowerCase().includes(search.toLowerCase())
//             )
//         );
//         debugger;
//     }, [search, users]);
//     return (
//         <Row className="search-bar__main">
//             <Search placeholder="Search Users" onSearch={onSearch} enterButton size="large" onChange={(e) => setSearch(e.target.value)}/>
//             {filteredUsers.map((user, idx) => (
//                 <AddressList key={idx} {...user} />
//             ))}

//         </Row>
//     )
// }

// export default SearchBar


import React from 'react'

function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={(e) => { setSearchTerm(e.target.value)
            }} />
            {JSONDATA.filter((val) => {
                if(searchTerm == "") {
                    return val
                } else if(val.name.first.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val, key) => {
                return (
                    <div key={key}>
                        <p>{val.name.first}</p>
                    </div>
                );
            })}      
        </div>
    )
}

export default SearchFilter
