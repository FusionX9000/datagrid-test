function twon(a,b,c,d) {
    var arr = [];
    if(a==c && b==d)
    {   
        arr=[]
        arr.push([a,b])
        return arr;
    }
    if(a<c) {
        arr=twon(a+b,b,c,d)
        if (arr){
            arr.push([a,b])
            return arr;
        }
    }
    if(b<d) {
        arr=twon(a,a+b,c,d)
        if (arr){
            arr.push([a,b]);
            return arr;
        }
    }
    else {return;}
}