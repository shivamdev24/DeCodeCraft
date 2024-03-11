
import { Link } from 'react-router-dom'


const article = [
  {
    src: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D',
    title: 'Lorem ipsum dolor sit amet.',
    subTitle: 'Lorem ipsum dolor sit amet.',
    date: "23/02/23",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla!",
    to:'/',
  },
  {
    src: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D',
    title: 'Lorem ipsum dolor sit amet.',
    subTitle: 'Lorem ipsum dolor sit amet.',
    date: "23/02/23",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla!",
    to:'/',
  },
  {
    src: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D',
    title: 'Lorem ipsum dolor sit amet.',
    subTitle: 'Lorem ipsum dolor sit amet.',
    date: "23/02/23",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla!",
    to:'/',
  },
  {
    src: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D',
    title: 'Lorem ipsum dolor sit amet.',
    subTitle: 'Lorem ipsum dolor sit amet.',
    date: "23/02/23",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla!",
    to:'/',
  },
  {
    src: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D',
    title: 'Lorem ipsum dolor sit amet.',
    subTitle: 'Lorem ipsum dolor sit amet.',
    date: "23/02/23",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla!",
    to:'/',
  },
  {
    src: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D',
    title: 'Lorem ipsum dolor sit amet.',
    subTitle: 'Lorem ipsum dolor sit amet.',
    date: "23/02/23",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla!",
    to:'/',
  },
  
]

const Browser = () => {
  return (
    <>
      <div className=' flex flex-col py-5  gap-4 text-left justify-center '>
        <h1 className='text-3xl font-semibold  text-[#5271FF] '>Article</h1>
       <div className='flex py-2 gap-4  flex-wrap justify-between '>
          {
            article.map((props, index) => (
              <div key={index} className='border shadow-md rounded overflow-hidden flex flex-col max-w-[300px]'>
                <img src={props.src} alt="" />
                <div className='p-2 flex flex-col gap-1'>
                  <h1 className='text-ms text-gray-800 font-semibold'>{props.title}</h1>
                  <h4 className='text-sm text-gray-500'>{props.subTitle}</h4>
                  <p className='text-xs text-gray-500'>{props.description}</p>
                  <div className='flex justify-between items-center w-full px-1 '>
                    <Link to={props.to} className='bg-[#5271FF] px-5 hover:bg-[#4a6bffb3] rounded text-white'>View</Link>
                    <p className='text-xs font-semibold underline text-gray-500'>{props.date}</p> 
                    
                  </div>
                </div>
              </div>
            ))
          }
       </div>
      </div>
    </>
  )
}

export default Browser