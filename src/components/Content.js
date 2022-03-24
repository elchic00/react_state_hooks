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
        return(images);
    }

    function options(){
        let options = []
        for(let i =1; i<= 5;i++){
            options.push(<option  value={i} onChange={handleChange}>{i}</option>)
        }
        return(options)
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
        {options()}
        </select>
    </p>
    <div>
    {displayImgs()}
    </div>
   </div>
    )
}
export default Content;