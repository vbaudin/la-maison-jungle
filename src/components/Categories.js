const Categories = ({plantList, setCategorie}) => {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    const handleChange = (e) => {
        setCategorie(e.target.value)
    }

    return (
        <div>
            <select
                onChange={handleChange}
            >
                {categories.map((cat) => (
                    <option value={cat} key={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => {setCategorie(0)}}>Réinitialiser</button>
        </div>
    )
}

export default Categories