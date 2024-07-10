import pic from "../assets/investment-calculator-logo.png";

export default function Header(){
    return (
        <header id="header">
            <img src={pic} alt="calc logo" /> 
            <h1>Investment calculator</h1>
        </header>
    );
}