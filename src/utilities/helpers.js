const randomStringGenerator = (length = 100)=>{
    const chars = "-._0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const len = chars.length;
    let random = '';
    for (let i = 1; i<=length; i++){

        const position = Math.ceil( Math.random() * (len-1))
        random += chars[position]
    }
    return random;
}

module.exports = randomStringGenerator;