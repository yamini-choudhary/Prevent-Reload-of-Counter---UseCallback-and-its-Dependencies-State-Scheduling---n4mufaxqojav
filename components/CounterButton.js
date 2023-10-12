import React from 'react';

function CounterButton({increment}) {
     /*DO NOT EDIT THIS LINE */ console.log("CounterButton rendered!"); //DO NOT edit this line 
     return(<button onclick={increment}>Increment</button>)
}

export default React.memo(CounterButton);
