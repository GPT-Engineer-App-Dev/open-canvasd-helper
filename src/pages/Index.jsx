import { Container, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="2xl">Welcome to our web application!</Text>
    </Container>
  );
};

export default Index;