
export class AuthService{
    loggedIn : boolean = false;

    isAuthenticate(){
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.loggedIn);
            },1000);
        }
        );
        return promise;
    }


    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }

}