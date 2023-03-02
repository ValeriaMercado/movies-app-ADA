import { Text, Image, Box} from '@chakra-ui/react'

export const EachMovie = ({title,img}) =>{
    return (
    <Box display='flex' borderBottom='1px' borderBottomColor='brand.primary' alignItems='center' height='65px'>
         <Image src={img} alt={title} boxSize='50px' borderRadius='full' marginLeft='10px' fallbackSrc='https://via.placeholder.com/50'   />
         <Text fontSize='md' color='white' marginLeft='10px'> {title}</Text>
    </Box>
       )
}