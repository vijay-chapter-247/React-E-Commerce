import React from 'react'
import { useHistory } from 'react-router';
import './profile.scss'

const Profile = () => {
    const history = useHistory();
    const retrievedObject = localStorage.getItem('loginUser');
    const parseObject = JSON.parse(retrievedObject);
    return (
        <>
            {
                localStorage.getItem('loginUser') ?
                    <div className="container profile_container">
                        <div className="box">
                            <div className="image">
                                <img src="/user.jpg" alt="Image_Not_Found" />
                            </div>

                            <h2 className="name_job text-capitalize">{parseObject.name.firstname} {parseObject.name.lastname}</h2>

                            <p className="wrap-text-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, earum illo adipisci consequuntur eum, amet quia repudiandae esse corporis quas expedita necessitatibus harum nobis hic, nesciunt eveniet temporibus eligendi modi debitis dignissimos rem dicta. Itaque eaque eveniet aspernatur vero recusandae beatae, animi voluptates totam quae maiores laboriosam aliquid provident adipisci.</p>
                            <div className="d-flex-profile">
                                <div className="profile_info">{parseObject.email}</div>
                                <div className="profile_info">{parseObject.username}</div>
                                <div className="profile_info">{parseObject.phone}</div>
                            </div>
                            <div className="d-flex-profile">
                                <div className="profile_info text-capitalize">{parseObject.address.number} {parseObject.address.street}, {parseObject.address.city}</div>
                            </div>
                        </div>
                    </div> : history.push('/login')
            }
        </>
    )
}

export default Profile;