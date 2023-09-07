import React from 'react';
import '../desktop.css'
import data from '../data.json'
import  '../index.css'
function Desktop(){
    return(
        <>
          <div className='brand'>
            <h1>Google Developer Student's Club</h1>
            <h2>Jis University, Kolkata</h2>
        </div>
        <div className="container">

        <div className="accounts">
            <div className="item">
                <img src={data.community.src} alt=""/>
                <a href={data.community.url}><h6>{data.community.name}</h6></a>
            </div>
            <div className="item">
                <img src={data.discord.src} alt="" />
                <a href={data.discord.url}><h6>{data.discord.name}</h6></a>
            </div>
            <div className="item">
                <img src={data.whatsapp.src} alt="" />
                <a href={data.whatsapp.url}><h6>{data.whatsapp.name}</h6></a>
            </div>
            <div className="item">
                <img src={data.instagram.src} alt="" />
                <a href={data.instagram.url}><h6>{data.instagram.name}</h6></a>
            </div>
            <div className="item">
                <img src={data.linkedin.src} alt="" />
                <a href={data.linkedin.url}><h6>{data.linkedin.name}</h6></a>
            </div>
            <div className="item">
                <img src={data.twitter.src} alt="" />
                <a href={data.twitter.url}><h6>{data.twitter.name}</h6></a>
            </div>
            <div className="item">
                <img src={data.facebook.src} alt="" />
                <a href={data.facebook.url}><h6>{data.facebook.name}</h6></a>
            </div>
            
        </div>

        <h4 className='footer'>Connect | Learn | Grow</h4>
        <h6 className='copyright'>Created by Chandan with ❤️</h6>
        </div>
        </>
    );
}

export default Desktop