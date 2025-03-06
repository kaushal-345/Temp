//this file will be called module coz multiple functions it has, that we pick from

// export default 
function add(a,b){
    return a+b
}
// export 
function sub(a,b){                               //dont write 'default' like above, just give {sub} in the file that is importing this
    return a-b
}
function greetings(){
    return "Namaste"
}

export {add,sub,greetings}                                       //just let the functions be without 'export'
// export default add                                   //[remove 'export default' before 'function' above]