import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'





const HomePage = () => {
  return (
    <>
    <Navbar/>
      <div className='flex flex-col sm:flex-row px-2 sm:px-2 lg:px-2 '>
        <div><SideBar /></div>
        <div className='px-2 sm:px-2 lg:px-10 border-l'>
          <Outlet/>
          {/* <Browser/> */}
        </div>
    </div>
    </>
  )
}

export default HomePage