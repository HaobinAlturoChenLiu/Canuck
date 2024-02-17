
        var text = new Array();
        var text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span');

        for (var i = 0; i < text.length; i++) {
            if (text[i].innerHTML.includes('Starbucks') || text[i].innerHTML.includes('starbucks')) {
                text[i].innerHTML = text[i].innerHTML.replace(/starbucks/gi, 'Timmies');
            }
            if (text[i].innerHTML.includes('?')) {
                text[i].innerHTML = text[i].innerHTML.replace('?', ', Eh?');
            }
            if (text[i].innerHTML.includes('person') || text[i].innerHTML.includes('Person')) {
                text[i].innerHTML = text[i].innerHTML.replace(/person/gi, 'bud');
            }
            if (text[i].innerHTML.includes('coffee') || text[i].innerHTML.includes('Coffee')) {
                text[i].innerHTML = text[i].innerHTML.replace(/coffee/gi, 'Double-double');
            }
            if (text[i].innerHTML.includes('soda') || text[i].innerHTML.includes('Soda')) {
                text[i].innerHTML = text[i].innerHTML.replace(/soda/gi, 'Pop');
            }
            if (text[i].innerHTML.includes('Carbonated drink') || text[i].innerHTML.includes('carbonated drink')) {
                text[i].innerHTML = text[i].innerHTML.replace(/carbonated drink/gi, 'Pop');
            }
            if (text[i].innerHTML.includes('Soft drink') || text[i].innerHTML.includes('soft drink')) {
                text[i].innerHTML = text[i].innerHTML.replace(/soft drink/gi, 'Pop');
            }
            if (text[i].innerHTML.includes('you')) {
                text[i].innerHTML = text[i].innerHTML.replace(/you/gi, 'ya');
            }
            if (text[i].innerHTML.includes('doing')) {
                text[i].innerHTML = text[i].innerHTML.replace(/doing/gi, "doin'");
            }
            if (text[i].innerHTML.includes('beer') || text[i].innerHTML.includes('Beer')) {
                text[i].innerHTML = text[i].innerHTML.replace(/beer/gi, 'Two-Four');
            }
            if (text[i].innerHTML.includes('honey') || text[i].innerHTML.includes('Honey')) {
                text[i].innerHTML = text[i].innerHTML.replace(/honey/gi, 'Maple Syrup');
            }
            if (text[i].innerHTML.includes('electricity') || text[i].innerHTML.includes('Electricity')) {
                text[i].innerHTML = text[i].innerHTML.replace(/electricity/gi, 'Hydro');
            }
            if (text[i].innerHTML.includes('yes') || text[i].innerHTML.includes('Yes')) {
                text[i].innerHTML = text[i].innerHTML.replace(/yes/gi, 'Oh ya no for sure');
            }
            if (text[i].innerHTML.includes('hello') || text[i].innerHTML.includes('Hello')) {
                text[i].innerHTML = text[i].innerHTML.replace(/hello/gi, 'Hey there, bud');
            }
            if (text[i].innerHTML.includes('man') || text[i].innerHTML.includes('Man')) {
                text[i].innerHTML = text[i].innerHTML.replace(/man/gi, 'Bud');
            }
            if (text[i].innerHTML.includes('backpack') || text[i].innerHTML.includes('Backpack')) {
                text[i].innerHTML = text[i].innerHTML.replace(/backpack/gi, 'Knapsack');
            }
            if (text[i].innerHTML.includes('couch') || text[i].innerHTML.includes('Couch')) {
                text[i].innerHTML = text[i].innerHTML.replace(/backpack/gi, 'Chesterfield');
            }
            if (text[i].innerHTML.includes('toilet') || text[i].innerHTML.includes('Toilet')) {
                text[i].innerHTML = text[i].innerHTML.replace(/toilet/gi, 'Washroom');
            }
            if (text[i].innerHTML.includes('bathroom') || text[i].innerHTML.includes('Bathroom')) {
                text[i].innerHTML = text[i].innerHTML.replace(/bathroom/gi, 'Washroom');
            }
            if (text[i].innerHTML.includes('mac and cheese') || text[i].innerHTML.includes('Mac and Cheese') || text[i].innerHTML.includes('Mac and cheese')) {
                text[i].innerHTML = text[i].innerHTML.replace(/mac and cheese/gi, 'KD');
            }
            if (text[i].innerHTML.includes('Macaroni and cheese') || text[i].innerHTML.includes('macaroni and cheese') || text[i].innerHTML.includes('Macaroni and Cheese')) {
                text[i].innerHTML = text[i].innerHTML.replace(/macaroni and cheese/gi, 'KD');
            }
            if (text[i].innerHTML.includes('beanie') || text[i].innerHTML.includes('Beanie')) {
                text[i].innerHTML = text[i].innerHTML.replace(/beanie/gi, 'Toque');
            }
            if (text[i].innerHTML.includes('Canadian') || text[i].innerHTML.includes('canadian')) {
                text[i].innerHTML = text[i].innerHTML.replace(/canadian/gi, 'Canuck');
            }
            if (text[i].innerHTML.includes('Sofa') || text[i].innerHTML.includes('sofa')) {
                text[i].innerHTML = text[i].innerHTML.replace(/sofa/gi, 'Chesterfield');
            }
            if (text[i].innerHTML.includes('Couch') || text[i].innerHTML.includes('couch')) {
                text[i].innerHTML = text[i].innerHTML.replace(/couch/gi, 'Chesterfield');
            }
            if (text[i].innerHTML.includes('Winnipeg') || text[i].innerHTML.includes('winnipeg')) {
                text[i].innerHTML = text[i].innerHTML.replace(/winnipeg/gi, 'The Peg');
            }
            if (text[i].innerHTML.includes('Kilometer') || text[i].innerHTML.includes('kilometer')) {
                text[i].innerHTML = text[i].innerHTML.replace(/kilometer/gi, 'click');
            }
            if (text[i].innerHTML.includes('KM') || text[i].innerHTML.includes('Km') || text[i].innerHTML.includes('km')) {
                text[i].innerHTML = text[i].innerHTML.replace(/km/gi, 'clicks');
            }
        }