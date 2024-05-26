export const AY = {
    isAy : true,
    type(b:any){
        return typeof b;
    },
    os: process.platform,
    argv: Bun.argv.slice(1),
    print(...args:any[]){
        let arg = '';
        args.forEach(ar =>{
            arg += ar
            arg += ' '
        })
        console.log(arg)
    }
}