function twon(a,b,c,d) {
    if(a==c && b==d)
    {   
        arr=[]
        arr.push([a,b])
        return arr;
    }
    if(a<c) {
        var arr=twon(a+b,b,c,d)
        if (arr){
            arr.push([a,b])
            return arr;
        }
    }
    if(b<d) {
        var arr=twon(a,a+b,c,d)
        if (arr){
            arr.push([a,b]);
            return arr;
        }
    }
    else {return;}
}