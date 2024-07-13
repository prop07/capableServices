import React from 'react'
import { FaUser } from 'react-icons/fa'

const BlogCard = ({key, title, author, date, content, summary, className, ...props }) => {
  return (
    <div key={key} className={` ${className} `}>
        <div className=" p-6 text-white bg-gray-500 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaUser />
              <span className="text-sm font-medium">{author}</span>
            </div>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          <h2 className="md:text-3xl text-xl font-bold mt-4">{title}</h2>
          <p className="text-lg mt-2">
            {summary}
          </p>
        </div>
      <div className="mt-2 prose prose-gray dark:prose-invert text-read px-2">
        {content}
      </div>
    </div>
  )
}

export default BlogCard