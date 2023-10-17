import icons from '../../images/icons.png'
const Loader=()=>{
    return(
        <>
         {/* Preloader Start */}
      <div id='preloader-active'>
        <div className='preloader d-flex align-items-center justify-content-center'>
          <div className='preloader-inner position-relative'>
            <div className='preloader-circle' />
            <div className='preloader-img pere-text'>
              {/* <img src={icons} alt='Gig Logo' /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Preloader Start */}
        </>
    )
}
export default Loader