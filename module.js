export function check(){
    let a = 10;
    if(a < 5){
        console.log("a is greater than 5");
    }else{
        console.log("that wrong");
    }
}


export function js(){
    let json = {
        name: "cheema",
        age: 25,
        city: "lahore",
    }

    json = JSON.stringify(json);
    console.log(json);

    let obj = JSON.parse(json);
    console.log(obj);
}
