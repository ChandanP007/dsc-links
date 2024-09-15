// import React from 'react';
import '../phone.css'
import data from '../data.json'

function Phone(){
    return (
        <>
        <div className='brand'>
            <h1>Google Developers Group <br/>On Campus</h1>
            <h2>Jis University, Kolkata</h2>
        </div> 
        <div className="container">

        <div className="accounts">
            <div className="item">
                <a href={data.community.url}>
                <img src={data.community.src} alt=""/>
                <h6>{data.community.name}</h6>
                </a>
            </div>
            <div className="item">
                <a href={data.discord.url}>
                <img src={data.discord.src} alt="" />
                <h6>{data.discord.name}</h6>
                </a>
            </div>
            <div className="item">
                <a href={data.whatsapp.url}>
                <img src={data.whatsapp.src} alt="" />
                <h6>{data.whatsapp.name}</h6>
                </a>
            </div>
            <div className="item">
                <a href={data.instagram.url}>
                <img src={data.instagram.src} alt="" />
                <h6>{data.instagram.name}</h6>
                </a>
            </div>
            <div className="item">
                <a href={data.linkedin.url}>
                <img src={data.linkedin.src} alt="" />
                <h6>{data.linkedin.name}</h6>
                </a>
            </div>
            <div className="item">
                <a href={data.twitter.url}>
                <img src={data.twitter.src} alt="" />
                <h6>{data.twitter.name}</h6>
                </a>
            </div>
            <div className="item">
                <a href={data.facebook.url}>
                <img src={data.facebook.src} alt="" />
                <h6>{data.facebook.name}</h6>
                </a>
            </div>
            
        </div>

        <h4 className='footer'>Connect | Learn | Grow</h4>
        <h6 className='copyright'>Organiser : Ankita Chakraborty</h6>
        </div>
        </>
    )
}

export default Phone