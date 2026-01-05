import React from 'react';

interface ProductProps {
  name: string;
  price: number;
  mainImage: string;
  content: string;
}

const Product = ({ name, price, mainImage, content }: ProductProps) => {
    console.log('\tproduct 렌더링');
  return (
    <>
      <h2>상품 설명</h2>
      <p>상품명: {name}</p>
      <p>가격: {price.toLocaleString()}</p>
      <p>상품 설명</p>
      <div>
        <img src= {mainImage} width="600" />
        <p>{content}</p>
      </div>
    </>
  )
}

export default Product; //컴포넌트를 메모이제이션 함
