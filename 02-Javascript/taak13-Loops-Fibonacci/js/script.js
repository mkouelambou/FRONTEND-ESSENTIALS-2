var fibonacci = [1,2];
for(j = fibonacci.length; j < 10; j++ ){
    fibonacci[j]= fibonacci[j-2] + fibonacci[j-1];
}
console.log(fibonacci);