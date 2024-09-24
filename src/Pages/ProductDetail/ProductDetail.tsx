import styled from '@emotion/styled';
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useEffect, useState } from "react";
import AddCart from '../../AppComponents/AddCart/AddCart';

const ProductDetail = () => {
    const { id } = useParams();
    const { resp } = useFetch({url: `https://dummyjson.com/products/${id}`});
    const [details, setDetails] = useState({} as any);
    
    useEffect(() => {
        if(Object.keys(resp)?.length) {
            setDetails(resp);
        }
    }, [resp]);

    const ProductDetailWidget = () => {
        return <ProductDetailLayout>
            <img src={resp.images[0]} height="500px" width="500px"/>
            <div>
                <h1> {resp.title} </h1> <br/>
                <ProductDescription> {resp.description} </ProductDescription> <br/>
                <AddCart />
            </div>
        </ProductDetailLayout>
    }

    const Loading = () => {
        return "Loading ... "
    }

    return Object.keys(details)?.length ? <ProductDetailWidget/> : <Loading/>;
}

const ProductDetailLayout = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const ProductDescription = styled.div `
    width: 550px;
`;

export default ProductDetail
