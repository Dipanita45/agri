import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import YieldPredictor from '../../src/components/YieldPredictor';

describe('YieldPredictor', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders yield predictor component', () => {
    render(<YieldPredictor onClose={mockOnClose} />);
    
    expect(screen.getByText('Yield Prediction')).toBeInTheDocument();
    expect(screen.getByText('Select Crop')).toBeInTheDocument();
  });

  it('renders crop options', () => {
    render(<YieldPredictor onClose={mockOnClose} />);
    
    expect(screen.getByText('Rice')).toBeInTheDocument();
    expect(screen.getByText('Wheat')).toBeInTheDocument();
    expect(screen.getByText('Maize')).toBeInTheDocument();
  });

  it('displays historical yield input fields', () => {
    render(<YieldPredictor onClose={mockOnClose} />);
    
    expect(screen.getByText('2019-20')).toBeInTheDocument();
    expect(screen.getByText('2020-21')).toBeInTheDocument();
    expect(screen.getByText('2021-22')).toBeInTheDocument();
    expect(screen.getByText('2022-23')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<YieldPredictor onClose={mockOnClose} />);
    
    const closeButton = screen.getByText('✖');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('has predict button', () => {
    render(<YieldPredictor onClose={mockOnClose} />);
    
    expect(screen.getByText('Predict Yield')).toBeInTheDocument();
  });
});
