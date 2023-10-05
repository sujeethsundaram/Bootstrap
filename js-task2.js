function alphabet_order(str)
{
    return str.split('').sort().join('');
}
let string = "webmaster";
console.log("Original string: "+string);
let result = alphabet_order("webmaster");
console.log("After rearranging: "+result);