import React from 'react'


export const Pagination = ({page, totalPages}) => {
    const pageNumbers = [];
    for (let i = 1 ; i <= totalPages ; i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        {pageNumbers.map((pages)=>(
             <button onClick={()=>page(pages)}> {pages}</button>
        ))}  
    </div>
  )
}
