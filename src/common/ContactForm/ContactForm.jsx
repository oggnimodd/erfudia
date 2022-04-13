import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { nopeResolver } from '@hookform/resolvers/nope';
import Nope from 'nope-validator';
import {
  ContactWrapper,
  SideHeader,
  Title,
  Description,
  Form,
  FormSection,
  FormDescription,
  FormActions,
  Information,
  InputField,
  Message,
  Textarea,
  ErrorMessage,
} from './ContactForm.style';
import Button from '../Button/Button';

const schema = Nope.object().shape({
  name: Nope.string()
    .min(3, 'At least 3 characters')
    .required('Required'),
  email: Nope.string()
    .email('Invalid email format')
    .required('Required'),
  message: Nope.string()
    .min(3, 'must be longer than 3 characters')
    .max(500, 'must be shorter than 500 characters')
    .required('Required'),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const messageTimerRef = useRef();
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    resolver: nopeResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    reset();

    setSuccess(true);
    messageTimerRef.current = setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearInterval(messageTimerRef.current);
    };
  }, []);

  return (
    <ContactWrapper>
      <SideHeader>
        <Title>Drop us a line</Title>
        <Description>Fill in this form or send us an
          e-mail with your inquiry.
        </Description>
      </SideHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <FormSection>
          <FormDescription>Information</FormDescription>

          <Information>
            <InputField>
              <input
                placeholder="Enter your name"
                {...register('name')}
                type="text"
                required
                autoComplete="off"
                spellCheck="off"
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            </InputField>
            <InputField>
              <input
                placeholder="Enter your email"
                {...register('email')}
                type="email"
                required
                autoComplete="off"
                spellCheck="off"
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </InputField>
          </Information>

        </FormSection>

        <FormSection>
          <FormDescription>Question</FormDescription>
          <Message>
            <Textarea
              required
              placeholder="Enter your message"
              {...register('message')}
              type="text"
              autoComplete="off"
              spellCheck="off"
            >
            </Textarea>
            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}

          </Message>
        </FormSection>
        <FormActions>
          <Button type="submit">Send Message</Button>
          {
            success && (
              <p>Thank you for your message</p>
            )
          }
        </FormActions>
      </Form>

    </ContactWrapper>
  );
};

export default ContactForm;
