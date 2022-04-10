import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { nopeResolver } from '@hookform/resolvers/nope';
import Nope from 'nope-validator';
import { VscArrowRight as ArrowRight } from 'react-icons/vsc';
import {
  FormWrapper,
  Header,
  SubmitButton,
  FieldWrapper,
  FormMessage,
} from './SubscribeForm.style';

const schema = Nope.object().shape({
  email: Nope.string().email('Email address is required').required(),
});

const SubscribeForm = () => {
  const [success, setSuccess] = useState(false);
  const messageTimerRef = useRef();
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    resolver: nopeResolver(schema),
  });

  const onSubmit = (data) => {
    reset();
    setSuccess(true);
    messageTimerRef.current = setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <FormWrapper>
      <Header>Subscribe to us !</Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Your email address</label>
        <FieldWrapper>
          <input
            placeholder="Your email"
            {...register('email')}
            type="email"
            required
            autoComplete="off"
            spellCheck="off"
          />
          <SubmitButton type="submit">
            <ArrowRight />
          </SubmitButton>
        </FieldWrapper>
        {
          success && (
            <FormMessage>Thank you for subscribing</FormMessage>
          )
        }
      </form>
    </FormWrapper>
  );
};

export default SubscribeForm;
