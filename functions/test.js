function devolverFx (){
    return ( function porDos(n){
            return n * 2 ;
    })
}

const elDoble = devolverFx();
console.log(elDoble(10));