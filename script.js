// ARRAY
console.log("\n------ ARRAY ------");

let dataArray = ["Jhone Doe", 30, "jhondoe@gmail.com"];

console.log(dataArray);
console.log(dataArray[2]);
console.log(dataArray[0]);




// OBJECT
console.log("\n ------ OBJECT ------ ");

let dataObject = {
    nama: "vincent sirait",
    umur: 16,
    email: "vincentleonardo@gmail.com"
}

console.log(dataObject);





// cara fetch
console.log("\n----- FETCH -----");
fetch("data1.json").then(response => response.json()).then(data => {
    console.log(data);
});




// cara ASYNC/AWAIT
console.log("\n----- ASYNC/AWAIT -----");

async function ambildata() {
    try {
        let response = await fetch("data1.json");
        let data = await response.json();

    console.log(data);


    } catch (error) {
        console.log("error: " + error);
    }

}







// cara ASYNC/AWAIT 
console.log("\n----- ASYNC/AWAIT/FETCH -----");


// function / fungsi buat ambil
async function ambildata() {
    try {

        // 1.request / permintaan data dari api/file JSON (meminta data dari api/file JSON)
        let response = await fetch("data1.json");

        // 2. KONVERSI RESPONSE MENJADI FORMAT JSON (mengubah data ke JSON)
        let data = await response.json();

        // 3. mencetak / menaampilkan data 
        console.log(data);


    } catch (error) {
        console.log("error: " + error);
    }

}

ambildata();