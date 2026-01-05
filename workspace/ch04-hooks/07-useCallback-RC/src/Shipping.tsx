interface ShippingProps {
  fees: number;
  handlePayment: () => void;
}

const Shipping = ({ fees, handlePayment }: ShippingProps) => {
  console.log('\tshipping 렌더링');

  return (
    <>
      <h2>배송비: </h2>
      <div>
        배송비: {fees.toLocaleString()}원<br />
      </div>
      <br />
      <button type="button" onClick={ handlePayment}>결제</button>
    </>

  );
}

//handlePayment 함수가 매번 App에서 새로 생성되면 메모이제이션을 해도 의미가 없음
//메모이제이션이 제대로 사용되려면 handlePayment함수가 새로 생성되지 않도록 해야 함
export default Shipping;