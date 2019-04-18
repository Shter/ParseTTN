var parsePage = function('https://7745.by/catalog') {
    var parsed = libxml.parseHtmlString(string);

    var links = parsed.find('//a');
    var destinations = [];
    for (link in links) {
        var attr = links[link].attr('href');
        if (attr && attr.value) {
            var url_parts = url.parse(attr.value());

            // Здесь можно добавить проверку url_parts.host, чтобы не вылезать за пределы Хабрахабра
            destinations.push(url_parts.pathname);
            console.log(destinations)
        }
    }

    return destinations;
};