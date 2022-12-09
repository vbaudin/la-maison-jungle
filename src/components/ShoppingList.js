import '../styles/ShoppingList.css'
import PlantItem from './PlantItem.js'
import { plantList } from '../datas/plantList'

const ShoppingList = () => {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

	return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant, index) => (
                    <PlantItem plant={plant} index={index} key={`${plant}-${index}`}></PlantItem>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList