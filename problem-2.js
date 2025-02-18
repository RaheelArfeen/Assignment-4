function validEmail(email) {
    
    if(typeof email !== "string"){
        return "Invalid";
    }
    if (/^[._+\-@]/.test(email)) {
        return false;
    }
    if(/\s/.test(email)){
        return false;
    }
    if(!email.includes("@") || !email.indexOf("@") || !email.lastIndexOf("@")){
        return false;
    }
    if(!email.endsWith(".com")){
        return false;
    }

    return true;
}

console.log(validEmail("ferdous@gmail.com")); // true
console.log(validEmail("1zihad@gmail.com"));  // true
console.log(validEmail("-king@yahoo.com"));   // false
console.log(validEmail(["jhankar@hero.com"])); // "Invalid"
console.log(validEmail("Mewo@cat.com"));      // true
console.log(validEmail("programming-hero.com")); // false
console.log(validEmail("chat420@gpt.net"));   // false
console.log(validEmail(true));                 // "Invalid"
console.log(validEmail("he ro@alom.com"));    // false