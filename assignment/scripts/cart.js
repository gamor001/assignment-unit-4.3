console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item) {
    basket.push(item);
    console.log(`Now our basket has: ${basket}`);
    return true;
}
addItem('gluten free pasta')
addItem('salad')
addItem('sweet potato')
addItem('celery')

function listItems() {
   for(i=0; i< basket.length; i += 1){
    console.log(`Item in basket: ${basket[i]}`);
   } 
}
listItems()


function empty() {
   basket = [];
}
empty();
console.log(`Our basket is empty ${basket}`);

const maxItems = 5;
function addItem(item) {
    basket.push(item);
    console.log(`Now our basket has: ${basket}`);
        function isFull() {
            if(basket.length < maxItems){
                return true;
            } else if(basket.length === maxItems) {
                return false;
            } 
    }   
}
addItem('gummy bears')
isFull(basket)
addItem('pizza')
addItem('apple')
addItem('pear')
addItem('heirloom tomato')
addItem('bananas')
// function isFull() {
//     if(basket.length < maxItems){
//         return false;
//     } else if(basket.length === maxItems) {
//         return true;
//     }  
// }
// isFull();
// console.log(isFull());

function removeItem(item){
    basket.indexOf(apple, 0); 

}



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
