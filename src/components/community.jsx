import React from 'react'
const community = () => {

  const data = [
    {
      title: 'Learn',
      description: 'Learn from the best teachers in the world.',
      image: 'https://plus.unsplash.com/premium_vector-1698192041909-3a5a4a6ee089?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Connect',
      description: 'Connect with fellow learners and share your knowledge.',
      image: 'https://plus.unsplash.com/premium_vector-1682298696622-3001b576c9a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
    },{
      title: 'Grow',
      description: 'Grow your knowledge and become an expert.',
      image: 'https://plus.unsplash.com/premium_vector-1720951733734-ab79b62106a0?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }]

  return (
    <div className='w-screen h-screen bg-[#09141B] p-4'>
        <div className='w-full text-white'>
          <h1 className='text-6xl font-semibold text-center '>Join Our Learning</h1>
          <h1 className='text-6xl font-semibold text-center'>Community</h1>
          <h2 className='text-2xl text-center my-4'>Discover a world of knowledge and connect with fellow learners.</h2>
        </div>
        <div className='my-[9%]'>
          <div className='flex items-center justify-evenly '>
            {data.map((item, index) => (
              <div key={index} className='bg-white hover:scale-[1.1] duration-300 w-[20vw] h-fit p-4 shadow-xl hover:shadow-white rounded-md'>
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