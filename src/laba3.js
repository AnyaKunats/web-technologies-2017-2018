function SetUser(user) {
    fetch(`https://api.github.com/users/`)
        .then(function(response){
            if(response.status>=200 && response.status<400)
                return response.json()
            else
                {
                    alert('Error'+response.status);
                }
            })
        .then(function(respons){
            return respons;
        })
}
const SetApi={
    SetUser
};
export default SetApi;


