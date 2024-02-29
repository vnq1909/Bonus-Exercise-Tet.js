const rule = {
    firstName: {
      required: true,
    },
    lastName: {
      required: true,
    },
  };
  const validate = (rule, values) => {
    for ( prop in rule) {
      if (rule[prop].required) {
        if(!values[prop]) {
          return false;  
        }
      }
    }
    return true;
  }
  console.log(validate(rule, { firstName: 'Quang' })); 
  console.log(validate(rule, { firstName: 'Quang', lastName: "Buffet" }));
      