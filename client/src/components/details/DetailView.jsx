
import {  useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; //this is used for getting value from URL
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';
import { Box, Grid, styled } from '@mui/material';


const Component = styled(Box)`
    background: #f2f2f2;
    margin-top: 55px;


`;
const Container = styled(Grid)(({ theme }) => ({
    background: '#ffffff',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }

}))
    

const RightContainer =styled(Grid)`
    margin-top: 56px;



`



const DetailView = () => {


    
    const dispatch =useDispatch();
    const { id } = useParams();
    // alert(id);
    
    const { loading, product} = useSelector(state => state.getProductDetails);
   

    useEffect(() => {
        
        if( !product || id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id , product, loading])

console.log(product);
// if(product == null )return (<h1>Hello</h1>);

    return (
        <Component>
            {
                 product && Object.keys(product).length &&
                            <Container container>
                                <Grid item lg={4} md={4} sm={8} xs={12}>
                                    <ActionItem product={product} />
                                </Grid>
                                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                                    
                                    <ProductDetail product={product} />
                                </RightContainer>
                            </Container>
                
            }
        </Component>
    )
}

export default DetailView;