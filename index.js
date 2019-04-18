var request = require("request"),
    cheerio = require('cheerio');
    Excel = require('exceljs');
    fileBook = new Excel.Workbook()
    sheet = fileBook.addWorksheet('test')
    listL = [ 'https://www.ttn.by/electronics']
        /*'https://www.ttn.by/computers_and_networks',
        'https://www.ttn.by/appliances',
        'https://www.ttn.by/beauty_and_health',
        'https://www.ttn.by/construction_and_repair',
        'https://www.ttn.by/household_products',
        'https://www.ttn.by/crockery_and_cutlery',
        'https://www.ttn.by/products_for_children',
        'https://www.ttn.by/garden',
        'https://www.ttn.by/sport_and_leisure',
        'https://www.ttn.by/everything_for_the_office',
        'https://www.ttn.by/car_goods' ]*/

for (var i=0; i <= listL.length-1; ++i){
    findCategories(listL[i])
    //console.log(listLL)
}

function findCategories(listOfLinks) {
    request(listOfLinks, function (error, response, body) {
        var listLL = []
        const $ = cheerio.load(body)
        if ($('span.price') !== undefined) {
            price = $('span.price')
            console.log(listLL)
        }
        bodyOf = $('div.product-category.product')
        for (var i = 0; i <= bodyOf.length - 1; ++i) {
            //console.log(bodyOf[i].children[1].attribs.href)
            listLL.push('https://www.ttn.by' + bodyOf[i].children[1].attribs.href)
            findCategories('https://www.ttn.by' + bodyOf[i].children[1].attribs.href)
        }


        //console.log(asdasd[0].children[1].attribs.href)
        /*adresForPrice = $('div.product_price-container ')
        adresForName = $('div.product')
        link = 'https://7745.by/product/kovrik-gimnasticheskii-starfit-fm-101-08'
        titleName = adresForName[0].children[1].children[0]['data']
        price = adresForPrice[0].children

        for (var i = 0; i < price.length; i++) {
            if (price[i]['name'] === 'meta') {
                price = price[i].attribs.content
            }
        }

        function writeToFile() {
            i = 1
            var cell = sheet.getCell('A'+(i+1))
            cell.value = titleName
            var cell = sheet.getCell('B'+(i+1))
            cell.value = link
            var cell = sheet.getCell('C'+(i+1))
            cell.value = price

            console.log(asdasd)
        }

        writeToFile();

        fileBook.xlsx.writeFile('Парсер 7745.xlsx')*/

    });

}
function findCategories212() {
    console.log(listLL)
}
setTimeout(findCategories212,10000)