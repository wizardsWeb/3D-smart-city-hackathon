import React, { useState } from 'react';

function Updates() {

  const [alerts] = useState([
    {
      id: 1,
      title: 'Severe Thunderstorm Warning',
      description: 'A severe thunderstorm warning has been issued for the following counties: Orange, Lake, and Volusia. Take shelter immediately.',
      issuedAt: '2024-09-22T12:00:00Z',
    },
    {
      id: 2,
      title: 'Flash Flood Warning',
      description: 'Flash flooding is expected in the downtown area due to heavy rains. Evacuate low-lying areas immediately.',
      issuedAt: '2024-09-21T11:15:00Z',
    },
    {
      id: 3,
      title: 'Hurricane Watch in Effect',
      description: 'A hurricane watch has been issued for coastal regions. Prepare for high winds, heavy rain, and potential evacuation.',
      issuedAt: '2024-09-20T16:45:00Z',
    },
    {
      id: 4,
      title: 'Tornado Warning',
      description: 'A tornado has been spotted near the eastern region. Take immediate cover in a basement or interior room.',
      issuedAt: '2024-09-19T14:30:00Z',
    },
    {
      id: 5,
      title: 'Heat Advisory',
      description: 'Temperatures are expected to reach 105°F today. Limit outdoor activities and stay hydrated.',
      issuedAt: '2024-09-18T09:00:00Z',
    },
    {
      id: 6,
      title: 'Winter Storm Warning',
      description: 'Significant snowfall and icy conditions are expected overnight. Avoid unnecessary travel and keep emergency supplies ready.',
      issuedAt: '2024-09-17T19:00:00Z',
    },
    {
      id: 7,
      title: 'Amber Alert',
      description: 'An Amber Alert has been issued for a missing child in the area. Be on the lookout for a blue sedan, license plate XYZ-1234.',
      issuedAt: '2024-09-16T15:30:00Z',
    },
    {
      id: 8,
      title: 'Air Quality Alert',
      description: 'Due to wildfires in nearby regions, the air quality index has reached unhealthy levels. Minimize outdoor activities.',
      issuedAt: '2024-09-15T08:45:00Z',
    },
    {
      id: 9,
      title: 'Boil Water Notice',
      description: 'A boil water notice has been issued for the downtown area. Boil tap water for at least 1 minute before use.',
      issuedAt: '2024-09-14T18:00:00Z',
    },
    {
      id: 10,
      title: 'Power Outage Alert',
      description: 'A widespread power outage is affecting several neighborhoods due to a storm. Crews are working to restore power.',
      issuedAt: '2024-09-13T12:30:00Z',
    },
  ]);

  return (
    <div className='container mx-auto p-6'>
      <header className='mb-8 text-center'>
        <h1 className='text-4xl font-bold text-gray-800'>Local News and Emergency Alerts</h1>
        <p className='text-gray-500 mt-2'>Stay informed with the latest updates in your area</p>
      </header>
      <section>
        <h2 className='text-2xl font-semibold mb-6'>Emergency Alerts</h2>
        <ul className='space-y-8'>
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <li key={alert.id} className='p-6 bg-red-100 rounded-lg shadow-md'>
                <h3 className='text-2xl font-semibold text-red-900 mb-2'>{alert.title}</h3>
                <p className='text-gray-700 mb-4'>{alert.description}</p>
                <div className='flex justify-between items-center'>
                  <p className='text-sm text-gray-400'>
                    Issued on: {new Date(alert.issuedAt).toLocaleDateString()}
                  </p>
                  <a href='#' className='text-red-600 font-medium hover:text-red-800'>
                    More details
                  </a>
                </div>
              </li>
            ))
          ) : (
            <p>No emergency alerts at the moment.</p>
          )}
        </ul>
      </section>
    </div>
  );
}

export default Updates;
