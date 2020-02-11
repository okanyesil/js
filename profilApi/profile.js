class Profile{
    constructor(){
        this.clientid= '',
        this.clientScreet = ''
    }
    async getProfile(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}