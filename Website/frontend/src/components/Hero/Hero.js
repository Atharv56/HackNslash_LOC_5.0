import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

  import {
    Box,
    IconButton,
    Container,
  } from '@chakra-ui/react';

  // Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

  
  
  import hero from "../images/hero.jpg"
  import logo from "./TripTales_Light.png"

  
  

  export default function SplitScreen() {
    return (
        <>
        <div>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Image   
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        logo
                    } 
                />
              <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'gray.400',
                zIndex: -1,
              }}>
              <b>PicBucks</b>
            </Text>
              <br />{' '}
              
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg'}} color={'gray.500'}>
              Lorem ipsumklfjds jsfd jfdsa; jdsfla ljkdfsa lksfdja jkl fsdaf dskjljksad flkldsf j
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'gray.600'}
                color={'white'}
                fontSize={'20'}
                _hover={{
                  bg: 'gray.500',
                  color: 'black'
                }}>
                <a href="/login">Login In</a>
              </Button>
              <Button rounded={'full'} fontSize={'18'}><a href="/signup">
              <Text color={'gray.500'}>
                Sign In
            </Text></a></Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
          height={'850'}
        
          
          
            alt={'Login Image'}
            objectFit={'cover'}
            src={
                hero
            } 
          />
        </Flex>
      </Stack>

        </div>
    
    </>
      
    );
  }