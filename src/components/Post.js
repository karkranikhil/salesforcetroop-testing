// Post.js
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Post = ({ title, author, date, description, path, fluid }) => (
  <div className="post">
    <Image fluid={fluid} className="thumbnail" alt="image" />
    <h3 className="post-title">{title}</h3>
    <p className="post-description">{description}</p>
    <p className="post-written-by">
      Written by {author} on {date}
    </p>
    <Link to={path}>Read more</Link>
  </div>
)

export default Post
