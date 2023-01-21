import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    Heading,
    Button,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import React, { useState } from 'react';
import ResumePreview2 from './ResumePreview2';
import ResumePreview1 from './ResumePreview1';

const Main = () => {

    const { printElem } = useResume();

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });
    const [selectedTemp, setselectedTemp] = useState('1');

    return (
        <Container
            bg={'gray.50'}
            minW={'full'}
            py={10}
            id='builder'
        >

            <Heading as='h4' size='lg' textAlign={'center'} color={'gray.700'} style={{ fontFamily: 'Poppins' }} fontWeight={'medium'}>Builder Dashboard</Heading>

            <Container maxW={'7xl'} px={8} my={3}>

                <Stack justifyContent={'space-between'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                    <ThemeSelect />
                    <select onChange={(e) => setselectedTemp(e.target.value)} value={selectedTemp}>
                        <option key ="1" value="1" >Template 1</option>
                        <option key ="2" value="2">Template 2</option>
                        <option key ="3" value="3">Template 3</option>
                    </select>
                    <Button rightIcon={<MdOutlineFileDownload />} onClick={handlePrint} colorScheme={'purple'}>Download</Button>
                </Stack>

            </Container>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                // mt={16}
                gap={4}
                mx={{ base: 2, md: 12 }}
                my={8}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
            >
                <Builder />{selectedTemp}
                {selectedTemp === '1' && <ResumePreview />}
                {selectedTemp === '2' && <ResumePreview1 />}
                {selectedTemp === '3' && <ResumePreview2 />}
            </Stack>
        </Container>
    )
}

export default Main
