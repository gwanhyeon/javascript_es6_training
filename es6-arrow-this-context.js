const myObj = {
    runTimeout(){
        setTimeout(function(){
            // console.log(this === window);
            this.printData();       // this가 가르키는것은 윈도우다 
            // this라는 값을 바인드해주면 printData()에 접근이 가능하다.
        }.bind(this),200);

        // todo arrow를 쓰게 되면 window가 되는게 아니라 자동으로 바인드 까지 가능하게 해준다
        // todo context까지 유지할 수 있어서 접근 할 수 있음.
        setTimeout(() =>{
            
            this.printData();       // this가 가르키는것은 윈도우다 
            // this라는 값을 바인드해주면 printData()에 접근이 가능하다.
        },200);
    },

    printData(){
        console.log("hi codesquad!");
    }
}
myObj.runTimeout();