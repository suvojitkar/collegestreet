import styled from '@emotion/styled';
import useFetch from '../../Hooks/useFetch';
import CSCard from '../../Components/CSCard/CSCard';
import { useNavigate } from 'react-router-dom';
import AddCart from '../../AppComponents/AddCart/AddCart';

const Home = () => {
    const navigate = useNavigate();

    const redirectToProductDetails = (id: number) => {
        navigate(`/product/${id}`);
    }

    const ProductList = () => {
        const { resp } = useFetch({ url: "https://dummyjson.com/products" });
        const products: any = resp?.products;
        if (products?.length) {
            return <CardLayout>{products.map((productData: any) => {
                return <CSCard key={productData.id} productData={productData} onClick={() => redirectToProductDetails(productData.id)}>
                    <AddCart productData={productData}/>
                </CSCard>
            }
            )}
            </CardLayout>
        }
    }

    return <ProductList />
}

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
`;


export default Home;
