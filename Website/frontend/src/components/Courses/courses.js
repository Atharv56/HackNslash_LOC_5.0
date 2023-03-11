import React from 'react'
import NavScrollExample from '../navbar/Navbar';
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,Heading, Text, Button } from '@chakra-ui/react'
import Im from '../images/courses.png'
import Im4 from '../images/courses2.png'
import Im2 from '../images/courses3.png'
import Im3 from '../images/courses3.png'
import "./courses.css"

export default function courses() {
  var bg = {
    backGroundImage: `url(${Im})`
  }
  var bg3 = {
    backGroundImage: `url(${Im3})`
  }
  var bg2 = {
    backGroundImage: `url(${Im2})`
  }
  var bg3 = {
    backGroundImage: `url(${Im4})`
  }
  return (
    <>
        <NavScrollExample />
        <SimpleGrid spacing={7} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <section style={{display:'flex',width:1150,height:250,padding:15,marginLeft:80,marginTop:90}}>
  <Card id="c4">
    <CardHeader>
      <Heading size='md'></Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id="c6">
    <CardHeader>
      <Heading size='md'></Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id="c7">
    <CardHeader>
      <Heading size='md'></Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id="c8">
    <CardHeader>
      <Heading size='md'></Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  </section>
</SimpleGrid>
<section style={{display:'flex',width:875,height:250,padding:15,marginLeft:190}}>
<Card id="c3">
    <CardHeader>
      <Heading size='md'></Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id="c2">
    <CardHeader>
      <Heading size='md'></Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card id="c1">
    <CardHeader>
      <Heading size='md'></Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</section>
    </>
  )
}
