import React from 'react';
import { Modal } from 'antd';
import { useSelector } from "react-redux"; 

function DetailModal(props) {
    //console.log("props", props);
    const data = useSelector(state => state.singleUser.thisUser);

    return (
            <Modal title={`${data && data.name.first} ${data && data.name.last}`} visible={props.show} onOk={props.handleOk} onCancel={props.handleCancel}>
                <p>Street: {data && data.location.street.number+" "+data && data.location.street.name}</p>
                <p>City: {data && data.location.city}</p>
                <p>State: {data && data.location.state}</p>
                <p>Postcode: {data && data.location.postcode}</p>
                <p>Phone: {data && data.phone+" cell:"+data && data.cell}</p>
            </Modal>
    )
}

export default DetailModal
