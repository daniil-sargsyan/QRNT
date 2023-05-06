
function run(bitsArray){
    document.getElementById('run_block').style.display = 'none'
    for (let i = 0; i < bitsArray.length; i++) {
        if(bitsArray[i] === '0'){
            setTimeout(() => {
                document.getElementById("quant").innerHTML = '<div style="    position: absolute;\n' +
                    '    width: 20px;\n' +
                    '    height: 20px;\n' +
                    '    left: 20px;\n' +
                    '    margin-top: 50px;\n' +
                    '    border-radius: 50%;\n' +
                    '    box-shadow: 0px 0px 22px 5px #fdfdfd; \n' +
                    '    background: radial-gradient(circle at 65% 15%, white 1px, aqua 3%, darkblue 60%, aqua 100%);\n' +
                    '    animation: quant0;\n' +
                    '    animation-duration: 300ms;\n' +
                    '    justify-content: end;"> </div>'
                document.getElementById("numbers1").innerHTML += 0
                if (i === bitsArray.length - 1){
                    let binaryString = bitsArray.join('');
                    let intValue = parseInt(binaryString, 2);
                    document.getElementById("numbers2").innerHTML += intValue
                }
            }, i * 2000)
        }else{
            setTimeout(() => {
                document.getElementById("quant").innerHTML = '<div style="    position: absolute;\n' +
                    '    width: 20px;\n' +
                    '    height: 20px;\n' +
                    '    left: 20px;\n' +
                    '    margin-top: 50px;\n' +
                    '    border-radius: 50%;\n' +
                    '    box-shadow: 0px 0px 22px 5px #fdfdfd; \n' +
                    '    background: radial-gradient(circle at 65% 15%, white 1px, aqua 3%, darkblue 60%, aqua 100%);\n' +
                    '    animation: quant1;\n' +
                    '    animation-duration: 300ms;\n' +
                    '    justify-content: end;"> </div>'
                document.getElementById("numbers1").innerHTML += 1
                if (i === bitsArray.length - 1){
                    let binaryString = bitsArray.join('');
                    let intValue = parseInt(binaryString, 2);
                    document.getElementById("numbers2").innerHTML += intValue
                }
            }, i * 2000)
        }
        setTimeout(() => {
            document.getElementById('run_block').style.display = 'flex'
        },14000)

    }
}

function getData(){
    fetch('https://api.quantumnumbers.anu.edu.au?length=1&type=uint8', {
        method: 'GET',
        headers: {
            'x-api-key': 'WGBzO4SJNL4YOHAy6zahG6dsA6Dt4TM86fjfnOAH'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            const intValue = data['data'][0]
            let binaryString = intValue.toString(2).padStart(8, '0');
            let bitsArray = binaryString.split('');
            run(bitsArray)
        })
        .catch((error) => {
            console.error('Error:', error)
            return false
        })
}



