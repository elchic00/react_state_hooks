import milkyway from '../milky_way.jpg'
import Clock from './Clock';
import { useState, useEffect } from 'react';

function Content(){
    const [numImage, setNumImage] = useState(1)
 
    function displayImgs(){
        let images = []
        for(let i = 0; i < numImage;i++){
            images.push(
                <img style= {{width:'400px'}} src={milkyway} alt={i.toString()}/>
            )
        }
        return(
            images
        );
    }
    function handleChange(event){
        setNumImage(event.target.value)
    }

    return(
   <div style= {{textAlign:'center' }}> 
   <h1>Hello React Hooks and State!</h1>
   <h3>It is <Clock/></h3>
   <p>Please choose the number of images:  
        <select value={numImage} onChange={handleChange}>
        <option  value='1' onChange={handleChange}>1</option>
        <option  value='2' onChange={handleChange}>2</option>
        <option  value='3' onChange={handleChange}>3</option>
        </select>
    </p>
    <div>
    {displayImgs()}
    </div>
   </div>
    )
}
export default Content;