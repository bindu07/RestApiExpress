function getPrimes(n) {
    var temp = [], primes = [];
    for(let i=2; i<=n; ++i) {
       if(!temp[i]){
           primes.push(i);
           for(let j = i; j<= n; j+= i){
               temp[j] = true;
           }
       }
    }
    return primes;
}

let main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let res = [];
    let gen = getPrimes(n);
    
    for (let i = 0; i < n; i++) {
        let val = gen.next().value;
        if (val == undefined)
            break;
        res.push(val);
    }

    ws.write(res.join("\n") + "\n");

    ws.end();
}