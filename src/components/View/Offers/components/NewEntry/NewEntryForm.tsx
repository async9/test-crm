import { FC, useState } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import {
  InnerBox,
  ButtonsGoup,
  Box,
  Form,
  Container,
  Checkboxes,
} from './styled';
import Search from '@/components/Search/Search';
import useScreenSize from '@/hooks/useScreenSize';
import {
  selectNewEntryDetails,
  selectNewEntryRegion,
} from '@/components/View/Offers/constants';
import Select from '@/components/Select/Select';
import InputLabel from '@/components/InputLabel/InputLabel';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const NewEntryForm: FC = () => {
  const [formVariant, setFormVariant] = useState('client');
  const { isMobile } = useScreenSize();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const hasClient = formVariant === 'client';

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Flex gap='5'>
          <Text size='2'>
            <Flex gap='2'>
              <Checkbox
                onClick={() => setFormVariant('client')}
                checked={hasClient}
                defaultChecked
              />{' '}
              Am client
            </Flex>
          </Text>
          <Text size='2'>
            <Flex gap='2'>
              <Checkbox
                onClick={() => setFormVariant('noClient')}
                checked={!hasClient}
              />
              N-am client
            </Flex>
          </Text>
        </Flex>
        <TextArea placeholder='Adauga titlu' />
        {hasClient ? (
          <>
            <div>
              <Checkboxes>
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
              </Checkboxes>
              <InputLabel title='*Minim 5 caractere alfanumerice sugestive' />
              <Search placeholder='Telefon / CPN / CUI' />
            </div>
            <Box>
              <InnerBox>
                <TextField.Slot>Telefon</TextField.Slot>
                <TextField.Input inputMode='decimal' />
              </InnerBox>
              <InnerBox>
                <TextField.Slot>CUI / CPN</TextField.Slot>
                <TextField.Input inputMode='decimal' />
              </InnerBox>
            </Box>
            <Box>
              <InnerBox>
                <InputLabel label='Numele' title='*Obligatoriu' />
                <TextField.Input />
              </InnerBox>
              <InnerBox>
                <InputLabel label='Email' title='*Obligatoriu' />
                <TextField.Input />
              </InnerBox>
            </Box>
          </>
        ) : null}
        <Box>
          <InnerBox>
            <InputLabel label='Detalii' title='*Obligatoriu' />
            <Select items={selectNewEntryDetails} />
          </InnerBox>
          <InnerBox>
            <InputLabel label='Judet' title='*Obligatoriu' />
            <Select items={selectNewEntryRegion} />
          </InnerBox>
        </Box>
        <ButtonsGoup>
          <Button color='green' style={{ width: isMobile ? '100%' : '' }}>
            Inainte
            <ArrowRightIcon />
          </Button>
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
        </ButtonsGoup>
      </Container>
    </Form>
  );
};

export default NewEntryForm;
