//ASYNC BASICS EXERCISE

// 1

function mainCourse(m){
    setTimeout(() => {
      return m;
    }, 1000);
  }
  const main1 = mainCourse(`Turkey`);
  console.log(main1);

  function getMainCourse(m, callback){
      setTimeout(() => {
          callback(m);
      }, 1000);
  }
  getMainCourse(`Turkey`, m => {
      main1.innerText = m;
  });


// 2
function side(s){
    setTimeout(() => {
      return s;
    }, 2000);
  }
  const s1 = side(`Stuffing`)
  const s = new Promise((resolve, reject) => {
      resolve ();
  });
  s.then(() => console.log(`Stuffing`));


 // 3

 const dessert = document.querySelector(`d`);
 const d1 = await document.createElement(`Pumpkin Pie`);
 d1.innerText = d
 dessert.append(d);
 function getRandomDessert(d) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
        resolve(d);
    }, 4000);
});
 }
  console.log(d1);  
  
 
  // 4

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First Promise')
    }, 2000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Second Promise')
    }, 3000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Third Promise')
    }, 4000);
  });
  Promise.all([p1, p2, p3])
    .then(results => {
        const total = results;

        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
    });

    