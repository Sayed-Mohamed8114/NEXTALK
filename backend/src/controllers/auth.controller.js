// the benefit of the async function is the waiting of the api calls or the DB and so on that help us to not get a messy data 
export async function signup(req,res){
    res.send("signup route");
}

export async function signin(req,res){
    res.send("signin route");
}

export  function logout(req,res){
    res.send("logout route");
}