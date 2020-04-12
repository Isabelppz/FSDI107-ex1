module.exports={
    sayHello: function(text){
        console.log('Hello there!'+ text);
    },
    sum:function(num1, num2){
        return num1 + num2;
    },
    greater: function(num1, num2){
        //return the greater of num1 and num2
        if(num1>num2){
            return num1;
        }
        /* else {
            return num2;
        } */
        return num2;
    },
    isEven: function(num){
        /* if(num % 2 === 0){
            return true;
        }
        return false; */
        //var res = num % 2; ..shorten this code as follow:
        //shorten more the code:
        return num % 2 === 0;
    }
}