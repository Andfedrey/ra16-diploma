import React from 'react'
import { Link } from 'react-router-dom'

interface ProductCard {
  id: number
  category: number
  title: string
  price: number
  images: string[]
}

export const OneProduct: React.FC<ProductCard> = (props) => {
  const { id, title, price, images } = props.product
  return (
      <div className="card catalog-item-card">
        <img src={images[0]}
          className="card-img-top img-fluid" alt="Босоножки 'MYER'"/>
        <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">{price}</p>
        <Link to={`catalog/${id}`} className="btn btn-outline-primary">Заказать</Link>
        </div>
      </div>
  )
}
