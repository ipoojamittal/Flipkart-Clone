
import { Box, Button } from '@mui/material';



const ActionItem = ({ product }) => {
    return (
        <Box>
            <img src={product.detailUrl} alt='something'/>
            <Button variant='contained'>Add to Cart</Button>
            <Button variant='contained'>Buy Now</Button>
        </Box>
    )
}

export default ActionItem;