import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Img, Input, Text, Textarea, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Con from "assets/images/green.png";
import desig from "assets/images/design6.png"
import { sendContactForm } from "../../lib/api";
import { Box, ThemeProvider } from 'theme-ui';
import leaf from "assets/images/backgreen.png";
import Header from "./Header/contactheader";
import Footer from "./footer";
import SEO from "components/seo";
import theme from "theme";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}
const initState = {values: initValues };

const ContactForm = () => {

  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const {values, isLoading, error} = state;
  
  const onBlur = ({target}) => setTouched((prev) => ({
    ...prev,
    [target.name]: true,
  }));

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    }
  }));

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
      title: "Message sent",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      toast({
        title: "Failed to send message",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      })
    }
  };

  return(
    <ChakraProvider>
    <ThemeProvider theme={theme}>
       <Container>
       <SEO
          title="DMPS - ECOCLUB"
          description="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
        />
      </Container>
    <Box
      sx={{
        width: '1545px',
        m: ['0px -500px 0px', null,null, '30px 100px 20px', '0px 0px 0'],
        background: '#F2F2F2',
        height: '845px',
        position: 'fixed',
      }}
    >
       <Container>
    <Header />
    </Container>
    <Container 
    sx={{
      m: ['45px 0px 0px', null,null, '30px 100px 20px', '105px 500px 0'],
      pt: 1,
      pb: 1,
      boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',

}}
>
      <Container
      sx={{
        maxWidth: '500px',
        m: ['45px 0px 0px', null,null, '30px 100px 20px', '15px 60px 20px'],
        p: 4,
      }}
      >
        {error && (
          <Text my={4} fontSize="xl" color= "red.300">
            {error}
          </Text>
        )}
      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5} >
        <FormLabel sx={{ fontSize: 25, fontWeight: 'bold', color: '#6679AA', }}>Full Name</FormLabel>
        <Input 
        sx={{
           mb: 3,
           py: 10,
           width: '100%',
           borderRadius: 10,
           fontSize: 23,
           color: '#6679AA',
        }}
        type="text"
        name="name"
        errorBorderColor="red.300"
        value={values.name}
        onChange={handleChange}
        onBlur={onBlur}
        />
        <FormErrorMessage sx={{color: "#ff0000"}}>Required*</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email &&!values.email} mb={5}>
        <FormLabel sx={{ fontSize: 25, fontWeight: 'bold', color: '#6679AA',}}>Email</FormLabel>
        <Input 
         sx={{
          borderRadius: 10,
          mb: 3,
          py: 10,
          width: '100%',
          fontSize: 23,
          color: '#6679AA',
       }}
        type="email"
        name="email"
        value={values.email}
        errorBorderColor="red.300"
        onChange={handleChange}
        onBlur={onBlur}
        />
         <FormErrorMessage sx={{color: "#ff0000"}}>Required*</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.subject &&!values.subject} mb={5}>
        <FormLabel sx={{ fontSize: 25, fontWeight: 'bold', color: '#6679AA', }}>Subject</FormLabel>
        <Input 
         sx={{
          mb: 3,
          py: 10,
            width: '100%',
          borderRadius: 10,
          fontSize: 23,
          color: '#6679AA',
       }}
        type="text"
        name="subject"
        value={values.subject}
        errorBorderColor="red.300"
        onChange={handleChange}
        onBlur={onBlur}

        />
         <FormErrorMessage sx={{color: "#ff0000"}}>Required*</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.subject && !values.message} mb={5}>
        <FormLabel sx={{ fontSize: 25, fontWeight: 'bold', color: '#6679AA', }}>Message</FormLabel>
        <Textarea 
         sx={{
          mb: 3,
          py: 10,
          width: '100%',
          borderRadius: 10,
          fontSize: 23,
          color: '#6679AA',
       }}
        type="text"
        name="message"
        rows={4}
        value={values.message}
        onChange={handleChange}
        onBlur={onBlur}
        errorBorderColor="red.300"
        />
         <FormErrorMessage sx={{color: "#ff0000"}}>Required*</FormErrorMessage>
      </FormControl>

        <Button
        isLoading={isLoading}
        disabled={!values.name || !values.email || !values.subject || !values.message}
        onClick={onSubmit}
        sx={{
          width: '40%',
          py: 5,
          backgroundColor: '#4CAF50',
          color: '#fff',
          fontSize: 32,
          px: 5,
          fontWeight: 'bold',
          border: "2px solid #4CAF50",
          borderRadius: '4px',
          mx: 100,
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#388E3C',
           border: "2px solid #388E3C",

          },
        }}
        >
        Submit
        </Button>
        </Container>
        </Container>
    </Box>
    </ThemeProvider>
    </ChakraProvider>
  )
};

export default ContactForm;

const styles = {

}