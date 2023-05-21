import React from 'react'
import { blogItems } from '../Components/blogItems'

const Blogs = () => {
  return (
    <section className="section sec4 " id="blogs">
            <div className="blogs-content">
                <div className="main-title">
                    <h2>My <span>Blogs</span><span className="bg-text">My Blogs</span></h2>
                </div>
                <div className="blogs">
                    {blogItems.map((blog, index) => (
                        <div className="blog" key={index}>
                        <img src={blog.image} alt="blog iphone"/>
                        <div className="blog-text">
                            <h4>
                                {blog.text}
                            </h4>
                            <p>{blog.info}</p>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </section>
  )
}

export default Blogs