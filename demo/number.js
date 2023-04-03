function resolveAfter2Seconds(){
    setTimeout(() => {
        console.log("good morning")
    },2000)
}

async function asyncCall(){
    let result = await resolveAfter2Seconds()
    console.log(result)
}