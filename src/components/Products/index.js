import React from 'react'
import{
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';

const Products = ({heading, data}) => {
  return (
    <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
            {data.map((product, index)=> {
                return (
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductInfo>
                    </ProductCard>
                )
            })}
        </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products