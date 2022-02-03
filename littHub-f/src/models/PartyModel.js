const url = 'http://localhost:4000/parties'

class PartyModel {
   static all() {
       return fetch(url)
       .then((response) => {
           return response.json()
       })
       .catch((err) => {
           console.log(err);
       })
   }
   static show(partyId) {
    return fetch(`${url}/${partyId}`)
        .then((response) => {
            return response.json()
        })
    }
}

export default PartyModel