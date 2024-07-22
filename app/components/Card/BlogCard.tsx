import React from 'react'
import { FaUser } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ key, id, title, author, postDate, content, summary, image, className, ...props }) => {
  return (
    <div key={key}  className={`w-full max-w-3xl mx-auto ${className}`}>
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="Blog Post Image"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaUser className='text-white' />
              <span className="text-sm font-medium">{author}</span>
            </div>
            <span className="text-sm text-muted-foreground">{postDate}</span>
          </div>
          <h2 className=" text-xl font-bold mt-4">{title}</h2>
          <p className="text-lg mt-2">
            {summary}
          </p>
        <p className='mt-2'>
          <Link href={`/blog/${id}`}>
          <span className='hover:text-gray-200 text-sm font-semibold'>
          Read now &rarr;
          </span>
          </Link>
          </p>
        </div>
      </div>
      {/* <div className='mt-4 text-read' dangerouslySetInnerHTML={{ __html: content }} /> */}
    </div>
  )
}

export default BlogCard