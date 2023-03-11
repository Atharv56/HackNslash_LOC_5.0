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
  import Login from './sign.jpg'
  import React, { useRef, useState } from 'react';
  import { useNavigate } from 'react-router-dom'
  import {auth} from '../firebase'
  import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

  
  export default function SplitScreen() {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()
    const [errorMsg, setErrorMsg]= useState('')
    const handleSubmission = () => {
      console.log(emailRef.current.value)

      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then(async(res)=>{
          const user = res.user
          await updateProfile(user, {
              displayName: nameRef.current.value,
          });
          console.log(user)
          navigate('/home')
      }).catch((err)=> {
          setErrorMsg(err.message)
          console.log("Error - ", err.message)
  
  })
  }
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}  border={'3px solid black'} margin={'50'} padding={'50'} borderRadius={'50'} marginTop={'7'}>
            <Heading fontSize={'2xl'}>Create an account</Heading>
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input type="text" ref={nameRef}/>
            </FormControl>
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input type="email"  ref={emailRef}/>
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
                <Link color={'blue.500'} href="\login">Already have an account? Log in</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmission}>
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
          style={{height:850,width:850}}
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              Login
            }
          />
        </Flex>
      </Stack>
    );
  }