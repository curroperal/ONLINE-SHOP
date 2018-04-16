var productos = $.get("https://raw.githubusercontent.com/curroperal/ONLINE-SHOP/master/js/products.json")

var json = JSON.parse(productos.responseText)