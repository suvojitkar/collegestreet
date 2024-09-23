import './App.css';
import styled from '@emotion/styled';
import CSCard from "./Components/CSCard/CSCard";
import useFetch from "./Hooks/useFetch";
import CSNavbar from './Components/CSNavbar/CSNavbar';

const App = () => {
  const {resp} = useFetch({url: "https://freetestapi.com/api/v1/books"});
  if(resp?.length) {
    return <><CSNavbar></CSNavbar><CardLayout>{resp.map((bookData: any) => <CSCard key={bookData.id} bookData={bookData}/>)}</CardLayout></>
  }
}

const CardLayout = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
`;

export default App;