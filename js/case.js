console.log("happy jonmastomi");



function update(isIncrease, inputField, priceElement, perUnitPrice)
{
    const input = getValueFrmFld(inputField);
    let totalPrice = 0;
    const Subtotal = document.getElementById("subtotal");
    const Tax = document.getElementById('tax')
    const Total = document.getElementById('total');
    if(isIncrease)
    {
        setValueToFld(inputField, input+1);
        totalPrice = perUnitPrice*(input+1);
        setValueToElmnt(priceElement, totalPrice);
    }
    else
    {
        if(input>0) 
        {
            console.log("hare Krishna");
            setValueToFld(inputField, input-1);
            totalPrice = perUnitPrice*(input-1);
            setValueToElmnt(priceElement, totalPrice);
        }
    }
    Subtotal.innerText = getValueFrmElmnt('mobile-price')+getValueFrmElmnt('mobile-case-price');
    Tax.innerText = parseFloat((parseInt(Subtotal.innerText)*0.1).toFixed(2));
    Total.innerText = parseFloat(Subtotal.innerText)+parseFloat(Tax.innerText);
    

}

// for mobile start
document.getElementById("btn-mobile-minus").addEventListener('click', function(){
    update(false, 'mobile-field', 'mobile-price', 1219)
    
});

document.getElementById("btn-mobile-plus").addEventListener('click', function(){
    update(true, 'mobile-field', 'mobile-price', 1219);
});

// for mobile end



// for mobile casing start
document.getElementById("btn-mobile-case-minus").addEventListener('click', function(){
    update(false, 'mobile-case-field', 'mobile-case-price', 59);
});

document.getElementById("btn-mobile-case-plus").addEventListener('click', function(){
    update(true, 'mobile-case-field', 'mobile-case-price', 59);
});
// for mobile casing end