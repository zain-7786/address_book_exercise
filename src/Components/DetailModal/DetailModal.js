import React from 'react';
import { Modal } from 'antd';

function DetailModal({ show, handleOk, handleCancel,name}) {
    return (
            <Modal title="User Details" visible={show} onOk={handleOk} onCancel={handleCancel}>
                <p>Name: {name}</p>
                <p>Age: </p>
                <p>Email: </p>
            </Modal>
    )
}

export default DetailModal
