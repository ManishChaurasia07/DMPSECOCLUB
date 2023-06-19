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
} from "@chakra-ui/react";
import logo from "assets/images/dms.png";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";
import SEO from "components/seo";
import Link from "next/link";
import { NavLink } from "components/link";
import NavbarDrawer from "./Header/navbar-drawer";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Footer from "./footer";

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
  const menuItems = [
    {
      label: 'HOME',
    },
  ]
  const gallery = [
    {
      label: 'GALLERY',
    },
  ]
  const about = [
    {
      label: 'ABOUT',
    },
  ]
  const project = [
    {
      label: 'PROJECT',
    },
  ]
  const blog = [
    {
      label: 'BLOG'
    }
  ]
  return (
    <Container>
    <ChakraProvider >
    <SEO
          title="DMPS - ECOCLUB"
          description="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
        />
        <Link href="/">
      <Img src={logo} sx={{
           mr: [null, null, null, null, 30, '578px'],
           ml: ['-30px', null, null, null, 30, '20px'],
           cursor: 'pointer',
           mt: 4,
      }} />
      </Link>
          <Container sx={{
            display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 3,
    mt: '-20px',
    ml: 900,
    // justifyContent: 'center',
    a: {
      ml: '100px',
      cursor: 'pointer',
      display: ['flex'],
      fontWeight: 600,
      color: '#834D80',
      padding: 0,
      transition: 'all 0.3s ease-in-out 0s',
      '+ a': {
        ml: 7,
      },
    },
          }}>
              {menuItems.map(({  label }, i) => (
                <Link href="/">
              <NavLink key={i} label={label} sx={{}}/>
              </Link>
              ))}
               {about.map(({  label }, i) => (
              <Link href="/">
              <NavLink key={i} label={label} sx={{}}/>
              </Link>
              ))}
              {project.map(({  label }, i) => (
              <Link href="/project">
              <NavLink key={i} label={label} sx={{}}/>
              </Link>
              ))}
              {gallery.map(({  label }, i) => (
              <Link href="/photo">
              <NavLink key={i} label={label} sx={{}}/>
              </Link>
              ))}
                  {blog.map(({  label }, i) => (
              <Link href="/">
              <NavLink key={i} label={label} sx={{}}/>
              </Link>
              ))}
              
            </Container>

    <Container maxW="450px" sx={{
      borderRadius: 4,
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      pt: 5,
      pb: 5,
      mt: '64px',
      ml: [2, 550],
}}> 
      <Heading sx={{
        textAlign: 'center'
      }}>Contact Us</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.subject && !values.subject}
      >
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          errorBorderColor="red.300"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
    </ChakraProvider>
    </Container>
  );
}
