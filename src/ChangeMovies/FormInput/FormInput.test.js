import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FormInput from './FormInput';

describe('FormInput', () => {
  afterEach(cleanup);

  it('should render as expected with type != number', () => {
    render(
      <FormInput
        name='name'
        type='text'
        id='textInput'
        value='value'
        size='5'
      />
    );

    expect(
      document.getElementById('textInput').getAttributeNames()
    ).not.toContain('step');
  });
  it('should render as expected with type = number', () => {
    render(
      <FormInput
        name='name'
        type='number'
        id='numberInput'
        value='value'
        size='5'
        step='1'
      />
    );

    expect(
      document.getElementById('numberInput').getAttributeNames()
    ).toContain('step');
  });
});
