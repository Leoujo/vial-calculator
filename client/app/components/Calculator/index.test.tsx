import { Calculator } from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  it('renders without errors', () => {
    render(<Calculator />);
  });
  it('displays numbers and basic operations correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    expect(getByTestId('calculator-result').textContent).toBe('4');
  });
  it('performs square root calculation correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('√x'));

    expect(getByTestId('calculator-result').textContent).toBe('3');
  });

  it('toggles history display correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    fireEvent.click(getByText('Check history'));
    expect(getByTestId('history-area').textContent).toBe('2+2');
  });
});
