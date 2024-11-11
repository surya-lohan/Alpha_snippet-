import React from 'react'
const community = () => {

  const data = [
    {
      title: 'Learn',
      description: 'Learn from the best teachers in the world.',
      image: ''
    },
    {
      title: 'Connect',
      description: 'Connect with fellow learners and share your knowledge.',
      image: 'https://images.unsplash.com/photo-1601930147590-3f1d2f5a7c2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Grow',
      description: 'Grow your knowledge and become an expert.',
      image: 'https://images.unsplash.com/photo-1601930147590-3f1d2f5a7c2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }]

  return (
    <div className='w-screen h-screen bg-[#09141B] p-4'>
        <div className='w-screen text-white'>
          <h1 className='text-6xl font-semibold text-center '>Join Our Learning</h1>
          <h1 className='text-6xl font-semibold text-center'>Community</h1>
          <h2 className='text-2xl text-center my-4'>Discover a world of knowledge and connect with fellow learners.</h2>
        </div>
        <div className='my-[9%]'>
          <div className='flex items-center justify-evenly '>
            {data.map((item, index) => (
              <div key={index} className='bg-white hover:scale-[1.1] duration-300 w-[20vw] h-[35vh] p-4 shadow-xl hover:shadow-white rounded-md'>
                <img src={item.image} alt={item.title} className='w-full mb-12 h-24 object-cover' />
                <h3 className='text-2xl font-semibold my-2'>{item.title}</h3>
                <p className='text-gray-600 text-base'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default community