Hook:
function that let us hook into React state and lifecycle features from functional components. enable us to use state and other React features without writing a class.
Common Hooks:
useState, useEffect, useContext,

Components:
they are building blocks of a React app. they're reusable pieces of code that define how a certain part of the UI should look and behave.

Types fo components:
Functional Components, Class Components

What is useState?
Is a React hook that allows functional components to manage state.Before hooks just class components could have state but with hooks we can create state variables in functional components and making it easier to manage component data and reactivity.

How to use it?
1-import the hook from react --> import React, {useState} from 'react';

2-Declare State --> call useState, pass initial value, returns an array with 2 elements:
-current state value
-function to update that state

useState(false)// -> [currentValue, setValueFunction]

-if we define:
const stateArray = useState(false);
console.log(stateArray);
output would be =>[false, f]

we define current value and set value is for defining an update value.

for access: const isMobileMenuOpen = stateArray[0]; // value of state
const setIsMobileMenuOpen = stateArray[1]; // setter func

for wirting code in a porfessional way, we use array dectructuring: so the above code would written like this:
const[isMobileMenuOpen, seIsMobileMenuOpen] = useState(false);
