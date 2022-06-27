import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Tests for Counter App',()=>{
    it('Should have initial value 0', () => {
      render(<App />);
//point 1
      const valZero = screen.getByText('0');
     // const valZero = screen.getByText(0);
     //const valZero = screen.getByTestId('test1');
     //const valZero1 = screen.findByText('0');
     expect(valZero).toBeInTheDocument();    
    //expect(valZero).toHaveTextContent('0');
     
 //point   2  
    const incrementbtn = screen.getByRole('button', {name: /increment/i});
    const decrementbtn = screen.getByRole('button', {name: /decrement/i});

    expect(incrementbtn).toHaveTextContent('increment');
    expect(decrementbtn).toHaveTextContent('decrement');
   

    userEvent.click(incrementbtn);
    expect(valZero).toHaveTextContent('1');

  
    userEvent.click(decrementbtn);
    expect(valZero).toHaveTextContent('0');



    /** 
          * Todo:
          * 1. Assert that the initial value is 0. Use getBy/findBy Query to find text '0' from the screen.
          * 2. use getByRole/findByRole query to find 'increment' button.
          * 3. Use userEvent to click on increment button to increment the count by 1.
          * 4. Assert that the count has value incremented by 1. i.e. the current value should become 1.
          * 5. Similarly perform actions 3 and 4 for decrement.
          * 
        */
    });
})
