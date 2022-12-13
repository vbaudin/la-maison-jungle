import '../styles/ShoppingList.css'
import PlantItem from './PlantItem.js'
import Categories from './Categories.js'
import { plantList } from '../datas/plantList'
import { useState } from 'react'


const ShoppingList = ({cart, updateCart}) => {
    const [categorie, setCategorie] = useState(0);

    const addToCart = (name, price) => {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter (
                (plant => plant.name !== name)
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantSaved.amount + 1}
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

	return (
        <div>
            <Categories plantList={plantList} setCategorie={setCategorie} />
            <ul className='lmj-plant-list'>
                {
                    plantList.map((plant, index, id) => (

                        plant.category == categorie || categorie == 0 ? 
                            <div key={plant.id}>
                                {console.log(plant.category)}
                                <PlantItem 
                                    plant={plant} 
                                    index={index} 
                                    key={`${plant}-${index}`}
                                />
                                <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                            </div>
                            : 
                            null
                    ))
                }
            </ul>
        </div>
    )
}

export default ShoppingList