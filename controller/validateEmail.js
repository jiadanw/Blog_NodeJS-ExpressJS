

module.exports = () => {
  let validateEmail = function(email){
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return validateEmail;
}