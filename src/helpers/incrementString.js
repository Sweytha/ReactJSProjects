const incrementString = (string) => {
    // Convert passed args to a string
    const str = string.toString();
    // Extract string's number
    let number = str.match(/\d+/) === null ? 0 : str.match(/\d+/)[0];
  
    // Store number's length
    const numberLength = number.length;
  
    // Increment number by 1
    number = (parseInt(number) + 1).toString();
  
    // If there were leading 0s, add them back onto the number again:
    while (number.length < numberLength) {
      number = "0" + number;
    }
  
    return str.replace(/[0-9]/g, "").concat(number);
  };
  
  export default incrementString;