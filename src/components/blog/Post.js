import React from "react"
import { Link } from "gatsby"

const Post = ({ data }) => {
  let article = data.data
  if (!article.content) return null
  console.log("article", article)

  const author = article.author.document.data

  const calcTimeToRead = string => {
    const wordsPerminute = 200
    const words = string.split(/\s/g).length
    const minutes = words / wordsPerminute
    const readTime = Math.ceil(minutes)
    return `${readTime} min read`
  }

  const ttr = calcTimeToRead(article.content.text)

  return (
    <Link to={`/blog/${data.uid}/`} className="pb-3">
      <article className="Post__inner">
        <div className="mt-3">
          <h2 className="text-h6 mb-0">{article.title1.text}</h2>
          <div className="font-mono text-grey font-normal mt-2 text-sm flex  items-center ">
            <time className="">{article.date}</time>
            <div className="text-h3 mx-2 leading-none">&middot;</div>
            <div>{ttr}</div>
          </div>
        </div>
        <div className="text-grey flex items-center mt-4">
          <Img
            className="rounded-default"
            alt={author.image.alt}
            fixed={author.image.fixed}
          />
          <div className="ml-2">by {author.name.text}</div>
        </div>
      </article>
    </Link>
  )
}

export default Post
