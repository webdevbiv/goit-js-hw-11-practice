try {
    console.log('1');
    myVar
} catch (error) {
    console.dir(error.name);
    console.log('error!');
    console.log(error.message);


}
console.log('after try catch');

// setTimeout(() => {
//     try {
//         myVar;
//     } catch (error) {
//         console.log('mistake');
//     }
// })
// try {
//     const validJSON = '{"name": "Mango"}'
//     const invalidJSON = '{ this is wrong! }'
//     console.log('1');
//     console.log(JSON.parse(invalidJSON));
//     console.log('2');

// } catch (error) {
//     console.log('mistake try catch');
// }

function getFruit(name) {
    const fruits = {
        strawberry: '🍓',
        kiwi: '🥝',
        apple: '🍎',
    };
    return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 0))
    // return fruits[name];
}

async function makeSmoothie() {
    try {
        console.time('makeSmoothie');
        const apple = getFruit('apple');
        console.log(apple);
        const kiwi = getFruit('kiwi');
        console.log(kiwi);
        const fruits = await Promise.all([apple, kiwi]);
        console.log(fruits);
        console.timeEnd('makeSmoothie');
    } catch (error) {
        console.log(error);
    }
}

makeSmoothie()