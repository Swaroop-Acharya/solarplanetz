
function handler(){
    const calcBtn = document.querySelector('.calculateBtn');
    const mass = document.querySelector('#mass');
    const imgContainer = document.querySelector('.flex-item');
    const description = document.querySelector('.description');
    const overlay = document.querySelector('.no-overlay');
    const content = document.querySelector('.content');
    const select = document.querySelector('#planetSelect');
    const planetImage = document.querySelector('.planet-image');
    
    
    const gravitationalAccelerations = {
        earth: 9.81,
        jupiter: 24.79,
        mars: 3.72076,
        mercury: 3.7,
        moon: 1.625,
        neptune: 11.15,
        pluto: 0.62,
        saturn: 10.44,
        uranus: 8.69,
        venus: 8.87
    };
    
    const h1=document.createElement('h1')
    const div=document.createElement('div')
    const p=document.createElement('p')
    calcBtn.addEventListener('click', e => {
        const massValue = mass.value
        if(isNaN(massValue)){
            imgContainer.style.display = 'none'; 
            description.textContent = 'Mass should be a number';
            description.classList.remove('no-overlay')
        }else if (massValue.length === 0) {
            imgContainer.style.display = 'none'; 
            description.textContent = 'Mass is required to calculate mass';
            description.classList.remove('no-overlay')
        } else if(select.value==='none'){
            imgContainer.style.display = 'none'; 
            description.textContent = 'Please select the planet';
        }else{
            const selectedPlanet=select.value
            const weight = parseFloat(massValue) * gravitationalAccelerations[selectedPlanet];
            console.log( `Weight on ${selectedPlanet}: ${weight.toFixed(2)} N`);
            planetImage.src=`/${selectedPlanet}.png`
            h1.textContent=`The weight of the object on ${selectedPlanet}`
            p.textContent=`${weight.toFixed(2)} N`
            div.style.backgroundColor='#928b8b'
            div.style.borderRadius='50%'
            div.style.height='100px'
            div.style.display='flex'
            div.style.alignItems='center'
            div.style.justifyContent='center'
            div.style.width='100px'
            div.style.textAlign='center'
            description.appendChild(h1)
            description.appendChild(div)
            div.appendChild(p)
            description.classList.remove('no-overlay')
        }
        
    });
    
}

export default handler;
