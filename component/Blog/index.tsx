import React from 'react';
import { FC } from 'react';
import { IBlogProps } from '@lib/types';


export const Blog: FC<IBlogProps> = ({ title, content, author, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-2">By {author} on {date}</p>
      <div className="prose max-w-none">
        <p>{content}</p>
      </div>
    </div>
  );
};
