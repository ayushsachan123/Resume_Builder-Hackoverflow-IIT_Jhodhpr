import {
  Text,
  Stack,
  HStack,
  Box,
  Container,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
const Login = () => {
    let navigate = useNavigate(); 
    return (
        <div>
          <div class="container1">
              <div className="wrapper">
                <h1 class="head">Login Form</h1>
    {/* <header>Login Form</header> */}
    <form action="#">
      <div className="field email">
        <div className="input-area">
          <input type="text" placeholder="Email Address"/>
          <i className="icon fas fa-envelope"></i>
          <i className="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div className="error error-txt">Email can't be blank</div>
      </div>
      <div className="field password">
        <div className="input-area">
          <input type="password" placeholder="Password"/>
          <i className="icon fas fa-lock"></i>
          <i className="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div className="error error-txt">Password can't be blank</div>
      </div>
      { <input type="submit" onClick={()=>{navigate(`/resume-builder`)}} value="Login"/> }
    </form>
    <div className="sign-txt foot">Not yet member? <a href="#">Signup now</a></div>
  </div>
        {/* <a className="btn " onClick={()=>{navigate(`/resume-builder`)}}>Go to Resume Builder</a> */}
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={Stack}
                maxW={'7xl'}
                py={5}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Stack direction={{ base: 'column', md: 'row' }} fontWeight={'medium'}>
                    <Text>&copy; 2023 Fine Resume. Designed By Team-Xoraz</Text>
                   
                </Stack>


                <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' as={'a'} href={'https://github.com/ayushsachan123'} target='_blank' bg={'gray.300'}>
                        <FaGithub />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'http://www.linkedin.com/in/ayush-sachan-469124234/'} target='_blank' colorScheme={'blue'}>
                        <FaLinkedin />
                    </IconButton>
                    <IconButton isRound='true' as={'a'} href={'https://www.instagram.com/_siddh.s_/'} target='_blank' colorScheme={'pink'}>
                        <FaInstagram />
                    </IconButton>

                </Stack>

            </Container>
        </Box>
        </div>
        </div>
    )
}

export default Login;