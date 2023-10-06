import { FC } from 'react';
import {
  Badge,
  Button,
  Checkbox,
  Flex,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { Box, ButtonsGoup, Container, Form } from './styled';
import { DividerX } from '@/styles/mixins';
import Search from '@/components/Search/Search';
import SelectItems from '@/components/Select/Select';
import useScreenSize from '@/hooks/useScreenSize';

const NewEntryForm: FC = () => {
  const { isMobile } = useScreenSize();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction='column' gap='2' style={{ marginTop: '3.2rem' }}>
        <Flex gap='5'>
          <Text size='2'>
            <Flex gap='2'>
              <Checkbox defaultChecked /> Am client
            </Flex>
          </Text>
          <Text size='2'>
            <Flex gap='2'>
              <Checkbox /> N-am client
            </Flex>
          </Text>
        </Flex>
        <TextArea placeholder='Adauga titlu' />
        <DividerX />
        <Flex gap='2' style={{ marginTop: '1.6rem' }}>
          <Badge color='yellow' variant='soft'>
            *Obligator
          </Badge>
        </Flex>
        <Flex gap='5'>
          <Text size='2'>
            <Flex gap='2'>
              <Checkbox defaultChecked /> CUI
            </Flex>
          </Text>
          <Text size='2'>
            <Flex gap='2'>
              <Checkbox /> Telefon
            </Flex>
          </Text>
          <Text size='2'>
            <Flex gap='2'>
              <Checkbox /> CPN
            </Flex>
          </Text>
        </Flex>
        <div>
          <Badge color='yellow' variant='soft' style={{ marginBottom: '1rem' }}>
            *Minim 5 caractere alfanumerice sugestive
          </Badge>
          <Search placeholder='Telefon / CPN / CUI' />
        </div>
        <DividerX />
        <Container>
          <Box>
            <TextField.Slot>Telefon</TextField.Slot>
            <TextField.Input inputMode='decimal' />
          </Box>
          <Box>
            <TextField.Slot>CUI / CPN</TextField.Slot>
            <TextField.Input inputMode='decimal' />
          </Box>
        </Container>
        <Container>
          <Box>
            <Flex align='center' gap='2'>
              <TextField.Slot>Numele</TextField.Slot>
              <Badge color='yellow' variant='soft'>
                *Obligator
              </Badge>
            </Flex>
            <TextField.Input />
          </Box>
          <Box>
            <Flex align='center' gap='2'>
              <TextField.Slot>Email</TextField.Slot>
              <Badge color='yellow' variant='soft'>
                *Obligator
              </Badge>
            </Flex>
            <TextField.Input />
          </Box>
        </Container>
        {/* <SelectItems
          defaultValue={selectNewEntryDetails[0].value}
          items={selectNewEntryDetails}
        /> */}
        <DividerX />
        <ButtonsGoup>
          <Flex gap='3'>
            <Button
              color='red'
              variant='outline'
              style={{ width: 'max-content' }}
            >
              Reseteaza formular client
            </Button>
            <Button variant='outline' color='gray'>
              Renunta
            </Button>
          </Flex>
          {isMobile ? <DividerX /> : null}
          <Button color='green' style={{ width: isMobile ? '100%' : '100px' }}>
            Submit
          </Button>
        </ButtonsGoup>
      </Flex>
    </Form>
  );
};

export default NewEntryForm;
