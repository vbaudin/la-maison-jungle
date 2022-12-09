import light from '../assets/sun.svg'
import water from '../assets/water.svg'

const handleClick = (caretype, scaleValue) => {
	let instruction
	const quantity = ['', 'peu', 'modérement', 'beaucoup']

	instruction = "Cette plante requiert "
	instruction += quantity[parseInt(scaleValue)] + " "
	caretype === "light" ? instruction += "de lumière" : instruction += "d'eau"

    alert(instruction)
}

const CareScale = ({scaleValue, careType, rawKey}) => {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? light : water

	return (
		<div onClick={() => handleClick(careType, scaleValue)}>
			{range.map((rangeElem, index) =>
				scaleValue >= rangeElem ? (
					<img src={scaleType} alt={careType} className={careType} key={`${rawKey}-${index}`}/>
				) : null
			)}
		</div>
	)
}

export default CareScale