import '../styles/PlantItem.css'
import CareScale from './CareScale.js'

const PlantItem = (props) => {
    const {plant, index} = props
    const {name, light, water, cover, category, isSpeacialOffer, id} = plant
    console.log(plant)
    
    return (
        <li className='lmj-plant-item'>
            <img src={cover} alt={name} className='lmj-plant-item-cover'/>
            {name}
            <div>
                <CareScale scaleValue={light} careType='light' rawKey={`${id}-light`}></CareScale>
                <CareScale scaleValue={water} careType='water'></CareScale>
            </div>
        </li>
    )
}

export default PlantItem