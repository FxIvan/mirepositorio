import React from 'react'
import Typed from 'react-typed';


export const Type = () =>{
    return(
        <div>
            <Typed 
            strings={['Hola mi nombre es ivan, tengo 21 años y soy de la provincia de Buenos aires Argentina, me dedico al desarollo FrontEnd']}
            typeSpeed={20}
            />
        </div>
    )
}