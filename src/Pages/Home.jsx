import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {
  const[uploadVideoResponse,setUploadVideoResponse] = useState({})
  const[dropVideoResponse,setDropVideoResponse] = useState({})
  return (
    <>
      <div className="contatner m-5 d-flex justify-content-between mb-3">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
        </div>
        <Link to={'/Watch-history'} style={{textDecoration:"none"}} className='fs-2 text-primary'>Watch-History <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
      </div>
      <div className="container-fluid mt-5 w-100 row">
      <div className="col-1g-9 all-videos">
        <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
      </div>
      <div className="col-1g-3 all-category">
        <Category dropVideoResponse={dropVideoResponse}/>
      </div>
      </div>
    </>
  )
}

export default Home
