import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="w-screen">
      <div className="w-[80%] max-w-5xl mx-auto pt-20">
        <p className="text-2xl font-semibold mb-6">All Community Services</p>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <motion.div className="md:p-2 p-1 w-1/2 relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-[25%] left-8 text-white font-semibold text-lg z-10'>Food Distribution</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Providing food to those in need.</p>
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dev5.mannafoodbank.org/wp-content/uploads/2021/09/Volunteer-at-Partner-Agency.jpg" />
            </motion.div>
            <motion.div className="md:p-2 p-1 w-1/2 relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-[25%] left-8 text-white font-semibold text-lg z-10'>Clothing Drive</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Collecting warm clothes for the needy.</p>
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.squarespace-cdn.com/content/v1/5cdd7aacaf46836dba75566b/1584486964297-STTNIW0ESVV1VSCPXKB0/Drives+socks+2.jpg" />
            </motion.div>
            <motion.div className="md:p-2 p-1 w-full relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-1/2 left-8 text-white font-semibold text-lg z-10'>Health Camp</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Free health check-ups for everyone.</p>
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://pbs.twimg.com/media/GAuhC4MbIAAfQbU.jpg:large" />
            </motion.div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <motion.div className="md:p-2 p-1 w-full relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-1/2 left-8 text-white font-semibold text-lg z-10'>Educational Workshops</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Learning sessions for all ages.</p>
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://cdn.eventespresso.com/wp-content/uploads/2023/10/13202202/teacher-professional-development-workshops.jpg" />
            </motion.div>
            <motion.div className="md:p-2 p-1 w-1/2 relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-[25%] left-8 text-white font-semibold text-lg z-10'>Community Cleanup</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Join us in keeping our community clean.</p>
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JdqEW1DCmI8iJV6QIxhqK_Avy8V-R3cneQ&s" />
            </motion.div>
            <motion.div className="md:p-2 p-1 w-1/2 relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-[25%] left-8 text-white font-semibold text-lg z-10'>Tree Plantation</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Planting trees for a greener future.</p>
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.jpg?s=612x612&w=0&k=20&c=kip26_08vy0zT90x2bA9frWUD6ZEuzPkw8_9uv8cfrw=" />
            </motion.div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <motion.div className="md:p-2 p-1 w-1/2 relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-[25%] left-8 text-white font-semibold text-lg z-10'>Blood Donation</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Donate blood, save lives.</p>
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://surgmedia.com/wp-content/uploads/2020/10/2171-blood-donation.jpg" />
            </motion.div>
            <motion.div className="md:p-2 p-1 w-1/2 relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-[25%] left-8 text-white font-semibold text-lg z-10'>Animal Welfare</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Support our furry friends.</p>
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.hillspet.co.nz/content/dam/cp-sites/hills/hills-pet/global/general/thumbnails/HP_about_animalwelfare_section1_md.jpg" />
            </motion.div>
            <motion.div className="md:p-2 p-1 w-full relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-1/2 left-8 text-white font-semibold text-lg z-10'>Mental Health Awareness</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Spreading awareness on mental health.</p>
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://prafultaandheri.org/images/aghai-1.jpeg" />
            </motion.div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <motion.div className="md:p-2 p-1 w-full relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-1/2 left-8 text-white font-semibold text-lg z-10'>Disaster Relief</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Helping those affected by disasters.</p>
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://www.pointsoflight.org/wp-content/uploads/2018/09/mayflower_arizona_disaster_relief.jpg" />
            </motion.div>
            <motion.div className="md:p-2 p-1 w-1/2 relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-[25%] left-8 text-white font-semibold text-lg z-10'>Senior Care</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Providing support for senior citizens.</p>
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUe1cjRLDIB8cen0Bp3yG_3T73rkDvP_ucA&s" />
            </motion.div>
            <motion.div className="md:p-2 p-1 w-1/2 relative transition-transform duration-300 hover:scale-105 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <p className='absolute top-[25%] left-8 text-white font-semibold text-lg z-10'>Fitness Programs</p>
              <p className='absolute bottom-1/4 left-8 text-white font-medium text-md z-10'>Promoting health through fitness.</p>
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://blog.afaa.com/hs-fs/hubfs/how-to-design-group-fitness-program.jpg?width=600&name=how-to-design-group-fitness-program.jpg" />
            </motion.div>
          </div>
        </div>
        <Link to='/report' >
          <button className='flex justify-end items-center w-full my-4 text-xl underline underline-offset-4'>
            <div className='hover:scale-110 flex hover:duration-300 hover:transition-all'>
            Report an Issue 
            <span className='mx-2 '>
            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right"/>
            </span>
            </div>
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
