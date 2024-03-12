import styled from "styled-components"; 
import Tracker from "./Tracker"; 
import GlobalStyles from "./Globalstyles"; 
import Navbar from '../Navbar';
import Footer from '../Footer';

const Main = styled.div` 
display: flex; 
justify-content: center; 
align-items: center; 
`; 

const Budget = () => { 
return ( 
    <>
    <Navbar/>
	<Main> 
	<GlobalStyles /> 
	<Tracker /> 
	</Main> 
    <Footer/>
    </>
) 
} 

export default Budget;
