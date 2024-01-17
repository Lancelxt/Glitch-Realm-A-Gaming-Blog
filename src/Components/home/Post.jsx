import React from 'react'
import { useEffect,useState } from 'react';
import './Post.css'
// import thumbnail from '../../assets/image.png'

function Post(props) {

    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDate(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
      }, 1000); // Update every second
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className='post'>
        <div className="thumbnail">
            <img src={props.img} alt=""/>
        </div>
        <div className="content">
            <div className="date">
                {currentDate}
            </div>
            <div className="post-name">
                <a href={props.url}>{props.postName}</a>
            </div>
        </div>
    </div>
  )
}

export default Post