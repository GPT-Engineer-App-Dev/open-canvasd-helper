import { Container, Text, Spinner, Box, Alert, AlertIcon } from "@chakra-ui/react";
import { useSupabaseQuery, fetchEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const { data, error, isLoading } = useSupabaseQuery('events', fetchEvents);

  if (isLoading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="2xl">Welcome to our web application!</Text>
      <Box mt={4}>
        {data.map(event => (
          <Box key={event.id} p={4} shadow="md" borderWidth="1px">
            <Text fontWeight="bold">{event.name}</Text>
            <Text>{event.description}</Text>
            <Text>{new Date(event.date).toLocaleDateString()}</Text>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Index;