import {Outlet ,Navigate ,Route,UseLocations, useLocation} from 'react-router-dom';

import { Navbar,Footer} from './components';
import FindJobs from '../pages/FindJobs';
import About from '../pages/About';
import Auth from '../pages/Auth';
import Companies from '../pages/Companies';
import CompanyProfile from '../pages/CompanyProfile';
import UserProfile from '../pages/UserProfile';
import UploadJob from '../pages/UploadJob';
import JobDetails from '../pages/JobDetails';

function Layout(){
  const user = true;
  const location = useLocation();

  return user?(
  <Outlet/> 
  ) : (
   <Navigate to = "user-auth" state={{from:location}}replace/>
  );
}

function App() {

  const user = {};

  return (
   <main>

  <Navbar/>
  <Routes>
    <Route element={<Layout/>}>
    
    <Route path='/' 
           element={<Navigate to='/find-jobs' replace={true} />}
           />
    <Route path='/find-jobs' element={<FindJobs />}/>
    <Route path='/companies' element={<Companies/>}/>
    <Route
    path={
      user?.user?.accountType === 'seeker'
      ?"/user-profile"
      :"/user-profile/:id"
    
    }
    element={<UserProfile/>}/>

<Route path='/company-profile' element={<CompanyProfile/>}/>
<Route path='/company-profile/:id' element={<CompanyProfile/>}/>
<Route path='/upload-job' element={<UploadJob/>}/>
<Route path='/job-details/:id' element={<JobDetails/>}/>
    
    </Route>

    <Route path='/about-us' element={<About/>}/>
    <Route path='/user-auth' element={<Auth/>}/>

  </Routes>

  {user && <Footer/>}
  
   </main>
  )
}

export default App
