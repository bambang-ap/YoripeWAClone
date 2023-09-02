import React from 'react';
import {TextInput} from 'react-native';

import {FieldValues} from 'react-hook-form';

import {InputProps} from '@appTypes/propsType.type';
import {
  ControlledComponentProps,
  withReactFormController,
} from '@hoc/withReactHookForm';

function InputComponent<F extends FieldValues>(
  props: ControlledComponentProps<F, InputProps>,
) {
  const {controller, className, placeholder, autoFocus} = props;
  const {
    field: {value, onChange, ...field},
  } = controller;

  return (
    <TextInput
      {...field}
      autoFocus={autoFocus}
      value={value}
      onChangeText={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
}

export const Input = withReactFormController(InputComponent);
