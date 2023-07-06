let schyot 
let ogranicheniye = 0

do {
    schyot = prompt('write password but it is limited 3times')
    if(schyot === '7777'){
        break;
    }
    ogranicheniye++
}
while(
    ogranicheniye !== 3
)