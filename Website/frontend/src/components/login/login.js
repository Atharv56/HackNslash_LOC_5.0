import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import Login from './log.jpg'
  import { useNavigate } from 'react-router-dom'
  import{signInWithEmailAndPassword} from 'firebase/auth'
  import {useRef, useState} from 'react'
  import {auth} from '../firebase'
  export default function SplitScreen() {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errorMsg, setErrorMsg]= useState('')
    const handleSubmission = () => {

      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(()=>{
          navigate('/home')
      }).catch((err)=> {
          setErrorMsg(err.message)
          console.log("Error - ", err.message)
  })
  }
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'} border={'3px solid black'} margin={'50'} padding={'50'} borderRadius={'50'} >
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={emailRef}/>
            </FormControl>
            <FormControl id="password" >
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={passwordRef}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
                <Link color={'blue.500'} href="/signup">Sign up</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmission}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            style={{height:850,width:850}}
            alt='Login Image'
            objectFit={'cover'}
            src={
                Login
            }
          />
        </Flex>
      </Stack>
    );
  }