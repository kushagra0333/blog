import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  client from "../sanityClient";
import "./home.css";

const Home = () => {
    const [HomeData, setHomeData] = useState(null)

    useEffect(() => {
        client.fetch(
            `*[_type == 'post']{title, slug, mainImage{asset->{_id, url}}}`)
            .then(data => setHomeData(data))
            .catch(err => console.error(err))
        },[])
    return (
        <div className="main p-4">
            <div className="heading ">
                <h1 className="heading-1">Blog</h1>
                <h3 className="heading-2 p-2">Welcome To My Blog</h3>
            </div>
            <div className="blog p-4 ">
                {HomeData && HomeData.map((post, index) => (
                    <Link className="link" to={'/' + post.slug.current} key={post.slug.current}>
                        <span className="container" key={index}>
                            <img className="image"  src={post.mainImage.asset.url} alt={post.title} />
                            <div className="title ">{post.title}</div>
                        </span>
                    </Link>
                ))}
            </div>
        
        </div>
    );
}
export default Home;