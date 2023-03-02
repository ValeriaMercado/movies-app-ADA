import { Text, Image, Box, IconButton} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'

export const EachMovie = ({title,img}) =>{
    // const navigate = useNavigate();
    // const [movie, setMovie] = useState([])

    // const handleSearch = (e) =>{
    //     e.preventDefault()
    //     console.log(movie)

    // }

    return (
    <Box as='div' display='flex' borderBottom='1px' borderBottomColor='brand.primary' alignItems='center'  justifyContent='space-between' height='65px'>
        <Box display='flex' alignItems='center' justifyContent={'flex-start'}>
            <Image src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} boxSize='50px' borderRadius='full' marginLeft='10px' fallbackSrc='https://via.placeholder.com/50'   />
            <Text fontSize='md' color='white' marginLeft='10px' as='h1'> {title}</Text>
        </Box>

        <IconButton
            // onClick={handleSearch}
            variant='outline'
            colorScheme='brand.accent'
            aria-label='Watch movie'
            size='sm'
            icon={<ArrowRightIcon />}
            marginRight='5px'
        />
    </Box>
        )
}