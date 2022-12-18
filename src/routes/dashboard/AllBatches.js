import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import SingleBatch from '../../Components/Dashboard/SingleBatch'
import Footer from '../../Components/Landing/Footer'
import DashNavbar from '../../Components/Dashboard/DashNavbar'

const AllBatches = () => {
  let { allBatch, batchDetail } = useContext(AuthContext)
  useEffect(() => {
    allBatch()
  }, [])
  return (
      <>
    <DashNavbar/>      
    <div className='allBatches'>
      {batchDetail &&
        batchDetail.map((batch) => (
          <SingleBatch
            key={batch.id}
            id={batch.id}
            batch_name={batch.batch_name}
            description={batch.description}
            time={batch.time}
          />
        ))}
    </div>
          <Footer/>
      </>
  )
}

export default AllBatches

{
  /* <div className='allBatches1'>
        <div className='allBatches-components card'>
          <h3 className='card-title'>Batch 0</h3>
          <p className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod arcu id ligula sodales bibendum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse potenti. Duis mi lacus, feugiat et vehicula vel,
            scelerisque ac nunc.
          </p>
          <button className='card-text btn btn-sm btn-primary'>Select</button>
        </div>
        <div className='allBatches-components card'>
          <h3 className='card-title'>Batch 1</h3>
          <p className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod arcu id ligula sodales bibendum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse potenti. Duis mi lacus, feugiat et vehicula vel,
            scelerisque ac nunc.
          </p>
          <button className='card-text btn btn-sm btn-primary'>Select</button>
        </div>
      </div>
      <div className='allBatches1'>
        <div className='allBatches-components card'>
          <h3 className='card-title'>Batch 2</h3>
          <p className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod arcu id ligula sodales bibendum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse potenti. Duis mi lacus, feugiat et vehicula vel,
            scelerisque ac nunc.
          </p>
          <button className='card-text btn btn-sm btn-primary'>Select</button>
        </div>
        <div className='allBatches-components card'>
          <h3 className='card-title'>Batch 3</h3>
          <p className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod arcu id ligula sodales bibendum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse potenti. Duis mi lacus, feugiat et vehicula vel,
            scelerisque ac nunc.
          </p>
          <button className='card-text btn btn-sm btn-primary'>Select</button>
        </div>
      </div> */
}
