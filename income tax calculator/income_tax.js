function hx() {
    let k = document.getElementById('income').value;
    let l = document.getElementById('profit').value;

    var val = parseInt(k) + parseInt(l);
    document.getElementById('taxable').innerHTML = val;
    if (val <= 500000) {

        document.getElementById('percentage').innerHTML = 'no tax';

        document.getElementById('cess').innerHTML = 'no cess';

        document.getElementById('tax').innerHTML = 'no tax';

    } else if (val >= 500000 && val <= 1000000) {

        document.getElementById('percentage').innerHTML = (val * 10) / 100;

        document.getElementById('cess').innerHTML = (((val * 10) / 100) * 4) / 100;
        document.getElementById('tax').innerHTML = parseInt(((((val * 10) / 100) * 4) / 100)) + parseInt(((val * 10)) / 100);



    } else if (val >= 1000000 && val <= 1500000) {

        document.getElementById('percentage').innerHTML = (val * 15) / 100;

        document.getElementById('cess').innerHTML = (((val * 15) / 100) * 4) / 100;
        document.getElementById('tax').innerHTML = parseInt(((((val * 15) / 100) * 4) / 100)) + parseInt(((val * 15)) / 100);





    } else
    if (val >= 1500001 && val <= 2000000) {

        document.getElementById('percentage').innerHTML = (val * 20) / 100;

        document.getElementById('cess').innerHTML = (((val * 20) / 100) * 4) / 100;
        document.getElementById('tax').innerHTML = parseInt(((((val * 20) / 100) * 4) / 100)) + parseInt(((val * 20)) / 100);





    } else if (val >= 2000001 && val <= 3000000) {

        document.getElementById('percentage').innerHTML = (val * 30) / 100;

        document.getElementById('cess').innerHTML = (((val * 30) / 100) * 4) / 100;


        document.getElementById('tax').innerHTML = parseInt(((((val * 30) / 100) * 4) / 100)) + parseInt(((val * 30)) / 100);


    } else {
        document.getElementById('percentage').innerHTML = (val * 35) / 100;

        document.getElementById('cess').innerHTML = (((val * 35) / 100) * 4) / 100;


        document.getElementById('tax').innerHTML = parseInt(((((val * 35) / 100) * 4) / 100)) + parseInt(((val * 30)) / 100);
    };





}