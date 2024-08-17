import img1 from '../../assets/Lenovo-Logo-2003.png'
import img2 from '../../assets/Asus-Logo-1995-present.png'
import img3 from '../../assets/original-samsung-logo-10.png'
import img4 from '../../assets/A4tech_logo.jpg'
const TopBrand = () => {
  return (
    <div className=' flex items-center justify-center '>
      <div className='grid lg:grid-cols-4 gap-5'>
        <img className='w-[150px]' src={img2} alt="img2" />
        <img  className='w-[150px]' src={img1} alt="img1" />
        <img className='w-[150px]' src={img3} alt="img3" />
        <img  className='w-[150px]' src={img4} alt="img4" />
      </div>
    </div>
  )
}

export default TopBrand
