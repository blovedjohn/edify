import React from 'react'
import Data from './Data'
import cards from './Cards'
import Cards from './Cards'

     const AllCards = () => {
     const cards = Data.map(item =>{
            return(
              <Cards

            {...item}
             />
    )
})



         return ( 
           <div className='all-cards'>
               {cards}
          </div>
  )
}

  export default AllCards
 