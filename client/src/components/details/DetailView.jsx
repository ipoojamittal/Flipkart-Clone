
import {  useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; //this is used for getting value from URL
import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './ActionItem';
import { Box, Typography } from '@mui/material';


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
        <Box>
            {
                 product && Object.keys(product).length &&
                            <Box>
                                <Box>
                                    <ActionItem product={product} />
                                </Box>
                                <Box>
                                    <Typography>{product.title.longTitle}</Typography>
                                </Box>
                            </Box>
                
            }
        </Box>
    )
}

export default DetailView;