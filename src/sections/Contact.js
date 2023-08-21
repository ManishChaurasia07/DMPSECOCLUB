import {
    Button,
    ChakraProvider,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
    Img,
    Image,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { sendContactForm } from "../../lib/api";
  import contact from "../assets/images/con3.png";
import { Box } from "theme-ui";
  
  const initValues = { name: "", email: "", subject: "", message: "" };
  
  const initState = { isLoading: false, error: "", values: initValues };
  
  export default function Home() {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
  
    const { values, isLoading, error } = state;
  
    const onBlur = ({ target }) =>
      setTouched((prev) => ({ ...prev, [target.name]: true }));
  
    const handleChange = ({ target }) =>
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
      const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
      };
    
    const onSubmit = async () => {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
        toast({
          title: "Message sent.",
          status: "success",
          duration: 2000,
          position: "top",
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    };

    return (
      <Box sx={{
          padding: ['120px 1%', '100px 0%'],
          background: `url(https://uploads-ssl.webflow.com/64c29158c3eb63eb40104787/64c29158c3eb63eb40104861_bg_shade.svg) no-repeat top / cover`,
          '@media (max-width: 767px)': {
            backgroundImage: 'none',
          }
      }}>
      <Container sx={{
        marginTop: '-150px',
      }}>
      <ChakraProvider>
        <Heading sx={{
          textAlign: 'center',
          marginBottom: ['20px', '-40px'],
        }}>Contact Us</Heading>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <Image src={contact} sx={{
          m: ['50px 20px 20px',null, null, '100px 100px 150px'],
          width: ['100%','40%'],
          '@media (max-width: 767px)': {
            display: 'none',
          }
        }} />
       <Container sx={styles.body}>
  <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
    {values.name === '' && (
      <FormLabel position="absolute" display="block" marginLeft={'15px'} marginTop={'6px'}>
        Full Name
      </FormLabel>
    )}
    <Input
      type="text"
      name="name"
      errorBorderColor="red.300"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={(e) => {
        e.target.placeholder = '';
      }}
      autoComplete="name" // Add the autocomplete attribute here
    />
    <FormErrorMessage>Required</FormErrorMessage>
  </FormControl>

  <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
    {values.email === '' && (
      <FormLabel position="absolute" display="block" marginLeft={'15px'} marginTop={'6px'}>
        Email
      </FormLabel>
    )}
    <Input
      type="email"
      name="email"
      errorBorderColor="red.300"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={(e) => {
        e.target.placeholder = '';
      }}
      autoComplete="email" // Add the autocomplete attribute here
    />
    <FormErrorMessage>Required</FormErrorMessage>
  </FormControl>

  <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={5}>
    {values.subject === '' && (
      <FormLabel position="absolute" display="block" marginLeft={'15px'} marginTop={'6px'}>
        Subject
      </FormLabel>
    )}
    <Input
      type="text"
      name="subject"
      errorBorderColor="red.300"
      value={values.subject}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={(e) => {
        e.target.placeholder = '';
      }}
      autoComplete="subject" // Add the autocomplete attribute here
    />
    <FormErrorMessage>Required</FormErrorMessage>
  </FormControl>

  <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
    <FormLabel marginLeft={'15px'} marginTop={'6px'}>Message</FormLabel>
    <Textarea
      type="text"
      name="message"
      rows={4}
      errorBorderColor="red.300"
      value={values.message}
      onChange={handleChange}
      onBlur={onBlur}
      autoComplete="message" // Add the autocomplete attribute here
    />
    <FormErrorMessage>Required</FormErrorMessage>
  </FormControl>

  <Container sx={styles.button}>
    <Button
      sx={{
        backgroundColor: '#484dff',
        color: '#fff',
        marginLeft: '-15px',
        ':hover': {
          backgroundColor: '#3898ec',
        },
      }}
      isLoading={isLoading}
      disabled={!values.name || !values.email || !values.subject || !values.message}
      onClick={onSubmit}
    >
      Submit
    </Button>
  </Container>
</Container>

      </ChakraProvider>
      </Container>
      </Box>
    );
  }
  const styles = {
    body: {
        m:['0px 0px 0px','-650px 800px 50px']
    },
    
  };