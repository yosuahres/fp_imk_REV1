import React from 'react';
import './Landing.css';
import Navbar from '../navbar/NavBar'; 
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <>
       <div className='landing'>
            <Navbar />
            {/* <div className='landing'> */}
                <div className='landing_inner'>
                    <div className='landing_titles'>
                        <div className='landing_title_first'>
                            Boost your
                        </div>
                        <div className='landing_title_second'>
                            Health
                        </div>
                        <button 
                            onClick={() => navigate('/register')} 
                            className='landing_get_started'
                            style={{
                                color: 'white', 
                                backgroundColor: '#ff395c', 
                                padding: '10px 16px',
                                fontSize: '16px', 
                                fontWeight: 'bold', 
                                border: 'none', 
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;