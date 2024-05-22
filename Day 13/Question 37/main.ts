/**
 Question# 37; Large Shirts:
  Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
   Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */
function make_shirt(size :string = "large", message: string = "I Love Typescript") {
  console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();// default large & message.
make_shirt("Medium");// default message and  medium size.
make_shirt("Small","Typescript is Better!!")//Custom message, small size
