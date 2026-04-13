import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Advisor from '../../src/components/Advisor';

describe('Advisor', () => {
  it('renders advisor component with title', () => {
    render(<Advisor />);
    
    expect(screen.getByText('AI-Powered Agricultural Advisor')).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    render(<Advisor />);
    
    expect(screen.getByText('Weather Forecasts')).toBeInTheDocument();
    expect(screen.getByText('Soil Health')).toBeInTheDocument();
    expect(screen.getByText('Yield Prediction')).toBeInTheDocument();
  });

  it('shows weather card on click', () => {
    render(<Advisor />);
    
    const weatherCard = screen.getByText('Weather Forecasts').closest('.card');
    fireEvent.click(weatherCard);
    
    expect(screen.getByText('Weather Forecast')).toBeInTheDocument();
  });

  it('shows soil chatbot on click', () => {
    render(<Advisor />);
    
    const soilCard = screen.getByText('Soil Health').closest('.card');
    fireEvent.click(soilCard);
    
    expect(screen.getByText('Soil Health Chatbot')).toBeInTheDocument();
  });

  it('shows yield predictor on click', () => {
    render(<Advisor />);
    
    const yieldCard = screen.getByText('Yield Prediction').closest('.card');
    fireEvent.click(yieldCard);
    
    expect(screen.getByText('Yield Prediction')).toBeInTheDocument();
  });

  it('displays stats section', () => {
    render(<Advisor />);
    
    expect(screen.getByText('Farmers Helped')).toBeInTheDocument();
    expect(screen.getByText('Crops Analyzed')).toBeInTheDocument();
    expect(screen.getByText('Languages Available')).toBeInTheDocument();
  });
});
