function changeAString(input){
    let string=input.shift();
    let commands={
        'Translate': (char,replacement) =>{
            string=string.replace(char,replacement);
            return string;
        },
        'Includes': (str) =>{
            if(string.includes(str)){
                return 'true';
            }else{
                return 'false';
            }
        },
        'Start': (str) =>{
            return string.startsWith(str);
        },
        'Lowercase':() =>{
           let str=string.split('')
            for(let char of string){
              let ch=char.charCodeAt();
                if(ch>64 && ch<91){
                    char=char.toLowerCase()
                }
            }
           //string= string.toLowerCase();
           return string;
        },
        'FindIndex': (char) =>{
            let index= string.lastIndexOf(char);
            return index;
        },
        'Remove': (startIndex,count) =>{
            startIndex=Number(startIndex);
            count=Number(count);
            let removed=string.substring(startIndex,count);
            return removed;
        }
    }
    for(let line of input){
        let[command,firstInput,secondInput]=line.split(' ');
      let  text=commands[command](firstInput,secondInput,string)
       console.log(text);
    }
    
}
changeAString([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End']);