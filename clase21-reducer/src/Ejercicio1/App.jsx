import React, { useReducer } from "react";

const reducer = (state,action) => {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + action.step};
        case "DECREMENT":
            return {count: state.count - action.step};
        default:
            return state;
    }
};

function App() {
    const [state,dispatch] = useReducer(reducer,{ count :0});

    const handleIncrement = () => {
        dispatch({ type:"INCREMENT", step: parseInt(step) });
    };

    const handleDecrement = () => {
        dispatch({ type:"DECREMENT", step:parseInt(step)});
    };

    const [step, setStep] = React.useState("1");

    const handleStepChange = (event) => {
        setStep(event.target.value);
    };

    return (
        <section>
            <h1>Contador: {state.count}</h1>
            <input
            placeholder="Paso:"
            type= "number"
            value= {step}
            onChange = {handleStepChange}
            />
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </section>
    );
}

export default App;