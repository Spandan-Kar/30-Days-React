function loginUser(username){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Name= " + username);
            resolve({ id: 1 });
        }, 1000);
    });
}

function getProfile(id){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Id= " + id);
            resolve({ roll: 101 });
        }, 1000);
    });
}

function getMarks(roll){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Roll= " + roll);
            resolve(95);
        }, 1000);
    });
}

async function studentFlow() {
    try {
        const user = await loginUser("Spandan Kar");
        const profile = await getProfile(user.id);
        const marks = await getMarks(profile.roll);
        console.log("Marks= " + marks);
    } catch (error) {
        console.log("Error occurred: " + error);
    }
}

studentFlow();