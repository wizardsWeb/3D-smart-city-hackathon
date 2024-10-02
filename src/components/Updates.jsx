import React, { useState } from 'react';

function Updates() {
  const [news] = useState([
    {
      id: 1,
      title: 'TechCrunch: Latest Tech News',
      summary: 'Stay updated with the latest trends in the tech industry. TechCrunch covers breaking technology news, startup updates, and more.',
      publishedAt: '2024-09-22T10:30:00Z',
    },
    {
      id: 2,
      title: 'Apple Unveils iPhone 15',
      summary: 'Apple has officially launched the iPhone 15, boasting new features like an advanced camera and faster processing.',
      publishedAt: '2024-09-20T14:00:00Z',
    },
    {
      id: 3,
      title: 'Google AI Breakthrough Announced',
      summary: 'Google announces a groundbreaking improvement in natural language processing, revolutionizing how AI interacts with humans.',
      publishedAt: '2024-09-19T09:45:00Z',
    },
    {
      id: 4,
      title: 'Microsoft Teams Introduces New Features',
      summary: 'Microsoft has rolled out updates to Teams, offering more collaborative tools and increased integration with Office 365.',
      publishedAt: '2024-09-18T13:20:00Z',
    },
    {
      id: 5,
      title: 'Tesla Launches New Model S',
      summary: 'Tesla’s new Model S comes with extended battery life and cutting-edge autonomous driving features.',
      publishedAt: '2024-09-17T08:30:00Z',
    },
    {
      id: 6,
      title: 'Facebook Rebrands to Meta',
      summary: 'Facebook rebrands its parent company as "Meta," focusing on building the metaverse to enhance virtual experiences.',
      publishedAt: '2024-09-16T11:15:00Z',
    },
    {
      id: 7,
      title: 'Samsung Galaxy Fold 3 Review',
      summary: 'The latest Galaxy Fold 3 review reveals improved durability and seamless multitasking, setting new standards for foldable phones.',
      publishedAt: '2024-09-15T16:05:00Z',
    },
    {
      id: 8,
      title: 'Amazon Expands Drone Delivery Service',
      summary: 'Amazon’s drone delivery service is expanding to more cities, aiming to deliver packages within 30 minutes.',
      publishedAt: '2024-09-14T12:40:00Z',
    },
    {
      id: 9,
      title: 'Netflix Introduces Interactive Shows',
      summary: 'Netflix announces new interactive content, allowing users to choose how stories unfold in real-time.',
      publishedAt: '2024-09-13T15:25:00Z',
    },
    {
      id: 10,
      title: 'Zoom Introduces End-to-End Encryption',
      summary: 'Zoom has introduced end-to-end encryption for video calls, ensuring higher privacy for users worldwide.',
      publishedAt: '2024-09-12T07:55:00Z',
    },
  ]);

  return (
    <div className='container mx-auto p-6'>
      <header className='mb-8 text-center'>
        <h1 className='text-4xl font-bold text-gray-800'>Local News and Emergency Alerts</h1>
        <p className='text-gray-500 mt-2'>Stay informed with the latest updates in your area</p>
      </header>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-6'>Local News</h2>
        <ul className='space-y-8'>
          {news.length > 0 ? (
            news.map((article) => (
              <li key={article.id} className='p-6 bg-white rounded-lg shadow-md'>
                <h3 className='text-2xl font-semibold text-gray-900 mb-2'>{article.title}</h3>
                <p className='text-gray-700 mb-4'>{article.summary}</p>
                <div className='flex justify-between items-center'>
                  <p className='text-sm text-gray-400'>
                    Published on: {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                  <a href='#' className='text-blue-600 font-medium hover:text-blue-800'>
                    Read more
                  </a>
                </div>
              </li>
            ))
          ) : (
            <p>No local news available at the moment.</p>
          )}
        </ul>
      </section>
    </div>
  );
}

export default Updates;
