import logo from '../assets/leaf.png'
import '../styles/Banner.css'

const Banner = () => {
  return ( <div className='lmj-banner'>
    <img src={logo} alt='la maison jungle' className='lmj-logo'/>
    <h1 className='lmj-title'> La maison jungle </h1> 
  </div>)
}
  export default Banner