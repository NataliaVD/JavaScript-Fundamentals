function massages(array){
    let userNames={};
    let capacity=Number(array.shift());
    for(let line of array){
        if(line==='Statistics'){
            break;
        }
        let[command,name,first,second]=line.split('=');
        if(command==='Add'){
            first=Number(first);
            second=Number(second);
            if(!userNames.hasOwnProperty(name)){
                userNames[name]=[first,second]
            }
        }
        if(command==='Message'){
            if(userNames.hasOwnProperty(name) && userNames.hasOwnProperty(first)){
                userNames[name][0]=userNames[name][0]+1;
                userNames[first][1]=userNames[first][1]+1;
                if(userNames[name][0]+userNames[name][1]>=capacity){
                    console.log(`${name} reached the capacity!`);
                    delete userNames[name];
                }
                if(userNames[first][1]+userNames[first][0]>=capacity){
                    console.log(`${first} reached the capacity!`);
                    delete userNames[first];
                }
            }
        }
        if(command==='Empty'){
            if(name==='All'){
                userNames={};
            }else{
               delete userNames[name];
            }
        }
    }let arrUsernames=Object.entries(userNames)
    arrUsernames.sort((a,b)=> b[1][1]-a[1][1] || a[0].localeCompare(b[0]))
    console.log(`Users count: ${arrUsernames.length}`);
    arrUsernames.forEach(element => {
        let sum=element[1][0]+element[1][1];
        console.log(`${element[0]} - ${sum}`);
    });

}
    massages([
        '20',
        'Add=Mark=3=9',
        'Add=Berry=5=5',
        'Add=Clark=4=0',
        'Empty=Berry',
        'Add=Blake=9=3',
        'Add=Michael=3=9',
        'Add=Amy=9=9',
        'Message=Blake=Amy',
        'Message=Michael=Amy',
        'Statistics']);