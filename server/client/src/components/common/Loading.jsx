import React from 'react'
import "./Loading.css";
// import "./Common.css"
const Loading = () => {
  return (
    <>

      <div className='loader '>
        <span >abc</span>
        <span >bcd</span>
        <span > def</span>
        <span >fgh</span>
      </div>



      {/* <div className="loader-inner ">
        <div class="wrapper">
          <span className='spanball'></span>
          <i className='fs-4'>Loading</i> &nbsp;
          <i class="spinner-grow spinner-grow-sm" role="status"></i> &nbsp;
          <i class="spinner-grow spinner-grow-sm" role="status"></i> &nbsp;
          <i class="spinner-grow spinner-grow-sm" role="status"></i> &nbsp;
        </div>
      </div> */}

      {/* <section className='loader-background text-center '>

        <div className='loader-inner p-5'>
          <div class="spinner-wrapper" id="spinner">
            <div class="spinner-border" role="status"></div>
          </div>
          <div class="loading-text fs-1 opacity-50">Loading &nbsp;
            <span class="spinner-grow spinner-grow-sm" role="status"></span> &nbsp;
            <span class="spinner-grow spinner-grow-sm" role="status"></span> &nbsp;
            <span class="spinner-grow spinner-grow-sm" role="status"></span> &nbsp;
          </div>

        </div>
      </section> */}
    </>
  )
}

export default Loading