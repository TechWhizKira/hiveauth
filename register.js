import HAS from 'hive-auth-wrapper'

// Your application information
const APP_META = {name:"myapp", description:"My HAS compatible application", icon:undefined}

// Create an authentication object
const auth = {
  username: "username",  // required - replace "username" with your Hive account name (without the @)
  expire: undefined,
  key: undefined,
}

// Retrieving connection status
const status = HAS.status()
console.log(status)

setOptions(options)=
    {
        host: string = undefined,
        auth_key_secret: string = undefined
    }

    if(auth.expire > Date.now()) {
        // previous authentication is still valid - no need to log in again
        resolve(true)
    } else {
        let challenge_data = undefined
        // optional - create a challenge to sign with the posting key
        challenge_data = {
            key_type: "posting",
            challenge: JSON.stringify({
                login: auth.username,
                ts: Date.now(),
            })
        }
    
        HAS.authenticate(auth, APP_META, challenge_data, (evt) => {
            console.log(evt)    // process auth_wait message
        }))
        .then(res => resolve(res))  // Authentication request approved
        .catch(err => reject(err))  // Authentication request rejected or error occured
    }
    