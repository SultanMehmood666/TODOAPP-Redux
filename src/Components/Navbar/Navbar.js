    import { Box, Button, Grid, Typography } from '@mui/material';

    const Navbar = () => {
    return (
        <Grid container spacing={0} className='w-full h-10 bg-black text-white'>
            <Grid item xs={6}>
                <Box component="section" display="flex" marginY={1} marginX={4}>Logo</Box>
            </Grid>

            <Grid item xs={6}>
                <Box component="section" display="flex" marginY={1} marginX={4} justifyContent="center">
                    <Box marginY={0} marginX={3}><button className='hover:text-red-600'><Typography variant='h8' component="h8">Home</Typography></button></Box>
                    <Box marginY={0} marginX={3}><button className='hover:text-red-600'><Typography variant='h8' component="h8">About Us</Typography></button></Box>
                    <Box marginY={0} marginX={3}><button className='hover:text-red-600'><Typography variant='h8' component="h8">Blog</Typography></button></Box>
                    <Box marginY={0} marginX={3}><button className='hover:text-red-600'><Typography variant='h8' component="h8">Contct us</Typography></button></Box>
                </Box>
            </Grid>
        </Grid>
    )
    }

    export default Navbar