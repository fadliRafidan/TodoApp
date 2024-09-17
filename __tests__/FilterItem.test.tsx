// __tests__/FilterItem.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FilterItem from '../components/FilterItemComponent';

test('should render FilterItem and handle press', () => {
  const mockOnPress = jest.fn();
  const { getByText } = render(
    <FilterItem title="Test" isActive={true} onPress={mockOnPress} />
  );

  expect(getByText('Test')).toBeTruthy();

  fireEvent.press(getByText('Test'));
  expect(mockOnPress).toHaveBeenCalled();
});