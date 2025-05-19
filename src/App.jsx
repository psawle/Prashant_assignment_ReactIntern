import { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";
import { Link } from 'react-router-dom';


import { Header } from './components/header/Header'
import { Card } from './components/card/Card';


import './App.css'

function App() {
const [storyData,setStoryData] = useState([]);
const [loading, setLoading] = useState(true);
// const navigation = useNavigation()

const fetchData = async () => {
  try{
    const data = await fetch("https://mxpertztestapi.onrender.com/api/sciencefiction");
    const mainData = await data.json();
    setStoryData(mainData)
    setLoading(false);
  } catch (error){
    console.error(error);
  }


  
}

useEffect(() => {
   fetchData();
},[])

const handlePrevPage = () => {
  // navigation.navigate("/")
}

const handleNextPage = () => {
  // navigation.navigate("/second")
}

const pageSize = 10;
const page = 1;
// const pages = Math.ceil(storyData.length / pageSize);
const pageData = storyData.slice((page * pageSize) - pageSize, page * pageSize);

  return (
    <>
     <Header/>
     <div className='storyData_container'>
     
      {loading ?  
      <div className='loader'>
      <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div> : pageData.map((item) => (
        <Card item={item}/>
      ))}

     
     </div>
     <div className='btnPage_container'>
      <button onClick={handlePrevPage}><Link to="/">Prev</Link></button>
      <button onClick={handleNextPage}><Link to="/second">Next</Link></button>
      </div>
      {/* <PublicRoute/> */}
    </>
  )
}

export default App
