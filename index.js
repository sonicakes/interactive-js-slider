$( document ).ready(function() {
    console.log('ready');
    valuesObj = {
        1: "10k",
        2: "20k",
        3: "30k",
        4: "40k",
        5: "50k",
        6: "60k",
        7: "70k",
        8: "80k",
        9: "90k",
        10: "100k"
    }

    pricingObj = {
        "10k": "$7/month",
        "20k": "$8/month",
        "30k": "$9/month",
        "40k": "$10/month",
        "50k": "$11/month",
        "60k": "$12/month",
        "70k": "$13/month",
        "80k": "$14/month",
        "90k": "$15/month",
        "100k":"$16/month"
    }

    let valSlider = $("#priceSlider").val();
    $("#viewsNum").text(valuesObj[valSlider]);
    let viewsCount =  $("#viewsNum").text();
    $("#priceNum").text(pricingObj[viewsCount]);
    let percentage = viewsCount.slice(0, -1); 
    console.log(valSlider, viewsCount, percentage);
    $( "#priceSlider" ).css( 'background', 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) '+ percentage +'%, #fff ' + percentage + '%, #fff 100%)' );

 


    $("#priceSlider").on("change", function(){

        valSlider = $("#priceSlider").val();
        viewsCount = $("#viewsNum").text();
        $("#viewsNum").text(valuesObj[valSlider]);
        $("#priceNum").text(pricingObj[viewsCount]); 
        percentage = $("#viewsNum").text().slice(0, -1); 
        console.log('this is percentage', percentage);

        $( "#priceSlider" ).css( 'background', 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) '+ percentage +'%, #fff ' + percentage + '%, #fff 100%)' );
        //need help figuring out that percentage funciton...brrrr
       
    });
});