//import { Link as ReactLink } from 'react-router-dom'


import { Card, CardBody, CardFooter, Image, Heading, Text,Divider,ButtonGroup, Button,Stack } from '@chakra-ui/react'

export const MoviesCards = ({key,alt,movieTitle,movieDetails,img}) => {

  return (

          <Card key={key} maxW='25%' display='flex' flexDirection='column' alignItems='center' m={4}>
            <CardBody display='flex' flexDirection='column' alignItems='center'>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${img}`}
                alt={alt}
                borderRadius='lg'
                width={'90%'}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{movieTitle}</Heading>
                <Text  noOfLines={[1, 2, 3]}>{movieDetails}</Text>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2' display='flex' justifyContent='center'>
                    <Button variant='solid' colorScheme='blue' size='sm'>
                      Watch Trailer
                    </Button>
                    <Button variant='ghost' colorScheme='blue' size='sm'>
                      See Details
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Stack>
            </CardBody>
          </Card>

        )

}
