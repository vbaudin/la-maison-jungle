import { useState } from 'react'
import '../styles/Footer.css'

const isMailValid = (mail) => {
    const isMailValid = mail.includes('@')

    if (!isMailValid) {
        alert("Le mail renseigner n'est pas valide, il manque un @")
    }
}

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail :
                <textarea 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={(e) => {isMailValid(e.target.value)}}
                />
                <button onClick={() => alert(inputValue)}>Je m'inscrit</button>
            </div>
		</footer>
	)
}

export default Footer