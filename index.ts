let viettel = [0,9,8];
let mobile = [0,9,0];
let vina = [0,9,7]

let sdt = [viettel,vina,mobile];


function substring(string: string): Array<number>{
    return string.split('').map(Number)
}
function check(string: string) {
    if (substring(string).length !== 10){
        return 'error'
    }
    let count: number[] = [];
    sdt.forEach(i => {
        if (i[0] === substring(string)[0] && i[1] === substring(string)[1] && i[2] === substring(string)[2]){
            count = i
        }
    })
    switch (count) {
        case viettel: return 'viettel'
        case vina: return 'vina'
        case mobile: return 'mobile'
        default: return  'error'
    }
}



let str: string = '0982234123'
console.log(check(str))