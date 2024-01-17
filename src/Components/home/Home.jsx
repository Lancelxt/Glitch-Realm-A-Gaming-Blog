import React from 'react'
import './Home.css'
import Post from './Post'
import porsche from '../../assets/porsche.png'
import thumbnail from '../../assets/image.jpg'

function Home() {
  return (
    <div className='home'>
        <div className='wrapper'>
            <div className="heading">Trending Now</div>
            <div className="post-cards">
                <Post img={thumbnail}
                postName = "This is Assassin's Creed Unity's snapshot revamped and upscaled to 4K using AI"
                url = "google.com"/> 
                <Post
                img={porsche}
                postName = "Porsche dominating other car giants in NFS Heat"/> 
                <Post img={thumbnail}
                postName = "This is Assassin's Creed Unity's snapshot revamped and upscaled to 4K using AI"
                url = "google.com"/> 
                <Post
                img={porsche}
                postName = "Porsche dominating other car giants in NFS Heat"/> 
                <Post img={thumbnail}
                postName = "This is Assassin's Creed Unity's snapshot revamped and upscaled to 4K using AI"
                url = "google.com"/> 
                <Post
                img={porsche}
                postName = "Porsche dominating other car giants in NFS Heat"/> 
                <Post img={thumbnail}
                postName = "This is Assassin's Creed Unity's snapshot revamped and upscaled to 4K using AI"
                url = "google.com"/> 
                <Post
                img={porsche}
                postName = "Porsche dominating other car giants in NFS Heat"/> 
                <Post img={thumbnail}
                postName = "This is Assassin's Creed Unity's snapshot revamped and upscaled to 4K using AI"
                url = "google.com"/> 
                <Post
                img={porsche}
                postName = "Porsche dominating other car giants in NFS Heat"/> 
                <Post img={thumbnail}
                postName = "This is Assassin's Creed Unity's snapshot revamped and upscaled to 4K using AI"
                url = "google.com"/> 
                <Post
                img={porsche}
                postName = "Porsche dominating other car giants in NFS Heat"/> 
                <Post img={thumbnail}
                postName = "This is Assassin's Creed Unity's snapshot revamped and upscaled to 4K using AI"
                url = "google.com"/> 
                <Post
                img={porsche}
                postName = "Porsche dominating other car giants in NFS Heat"/> 
                <Post img={thumbnail}
                postName = "This is Assassin's Creed Unity's snapshot revamped and upscaled to 4K using AI"
                url = "google.com"/> 
                <Post
                img={porsche}
                postName = "Porsche dominating other car giants in NFS Heat"/> 
                
                
                 

            </div>
        </div>
    </div>
  )
}

export default Home