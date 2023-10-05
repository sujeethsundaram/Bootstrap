function reverse_a_number(num) {
    let reversed_num = 0;
    while (num !== 0) {
      reversed_num = reversed_num * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    return reversed_num;
  }
  const num = 32243;
  console.log("Original number: "+num);
  const result = reverse_a_number(num);
  console.log("Reversed number: "+result);