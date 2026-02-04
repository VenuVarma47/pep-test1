function once(){
    function greet() {
  console.log("Hello");
}

}

const greetOnce = once(greet);
once();
greetOnce();