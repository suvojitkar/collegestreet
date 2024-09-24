import { useContext, useState } from "react";
import styled from '@emotion/styled';
import CSButton from "../../Components/CSButton/CSButton"
import { CartContext } from "../../Reducer/Cart.provider";

const AddCart = (props: any) => {
  const state: any = useContext(CartContext as any);
  console.log(state);
  const {style={width:'100%'}, label="Add to cart", icon="", size="small", variant="contained", productData} = props;
  const [qty, setQty] = useState(0);
  console.log('productData', productData);
  const onClickHandler = (e: any, action="inc") => {
    e.stopPropagation();
    if(action === "inc") {
      setQty((previousCount) => previousCount + 1);
      state.onAddHandler(productData);
    } else {
      setQty((previousCount) => previousCount - 1);
      state.onDeleteHandler(productData);
    }
  }

  const QtyCount = () => {
    return  <QtyCountLayout><CSButton 
                label=" + "
                variant={variant}
                onClickHandler={(e: any) => onClickHandler(e)}/> 
              
              {qty} 
              
              <CSButton 
                label=" - "
                variant={variant}
                onClickHandler={(e: any) => onClickHandler(e, "dec")}/>
            </QtyCountLayout>
  }

  return qty ? <QtyCount/> : 
            <CSButton
              style={style}
              label={label}
              icon={icon}
              size={size}
              variant={variant}
              onClickHandler={(e: any) => onClickHandler(e)}
            />
}

const QtyCountLayout = styled.div `
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export default AddCart
