function massage(array){
    let regex=/([*@])(?<name>[A-Z][a-z]{2,})\1: \[(?<first>[A-Za-z])]\|\[(?<second>[A-Za-z])]\|\[(?<thirth>[A-Za-z])]\|$/g;
    array.shift();
    for(let line of array){
        let valid=regex.exec(line)
        if(valid){
        let name=valid.groups['name'];
        let one=valid.groups['first']
        one=one.charCodeAt();
        let two=valid.groups['second'];
        two=two.charCodeAt();
        let three=valid.groups['thirth'];
        three=three.charCodeAt();
        console.log(`${name}: ${one} ${two} ${three}`);
        }else{
            console.log(`Valid message not found!`);
        }
    }
}
massage(['3','*Request*: [I]|[s]|[i]|','*Taggy@: [73]|[73]|[73]|','Should be valid @Taggy@: [v]|[a]|[l]|']);
massage(['3','@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid','*tAGged*: [i][i][i]|','Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|']);