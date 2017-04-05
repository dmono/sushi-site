this["JST"] = this["JST"] || {};

this["JST"]["cart_item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<figure><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\"cart-item\"></figure><p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " x $"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p>";
},"useData":true});

this["JST"]["cart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul></ul><section><h3>Your<br>shopping cart</h3><p class=\"total\">$"
    + container.escapeExpression((helpers.formatPrice || (depth0 && depth0.formatPrice) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p><p></p><footer><a class=\"left empty_cart\" href=\"#\">Empty cart</a><!----><a class=\"right checkout\" href=\"/checkout\">Checkout</a></footer></section>";
},"useData":true});

this["JST"]["details"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div><div class=\"nav prev\"><img src=\"/images/nav-prev.png\" alt=\"prev\"></div><figure><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></figure><article><a class=\"close\" href=\"*\">+</a><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><footer><h2>$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</h2><a class=\"add_cart\" href=\"#\">Add to cart</a></footer></article><aside><h3>Nutritional Information</h3><table><tbody><tr><td>Protein</td><td>"
    + alias4((helpers.formatNutrition || (depth0 && depth0.formatNutrition) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.protein : stack1),{"name":"formatNutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Fat (total)</td><td>"
    + alias4((helpers.formatNutrition || (depth0 && depth0.formatNutrition) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.fat : stack1),{"name":"formatNutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Carbohydrate</td><td>"
    + alias4((helpers.formatNutrition || (depth0 && depth0.formatNutrition) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.carbohydrate : stack1),{"name":"formatNutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Energy (kj)</td><td>"
    + alias4((helpers.formatNutrition || (depth0 && depth0.formatNutrition) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.energykj : stack1),{"name":"formatNutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Energy (kcal)</td><td>"
    + alias4((helpers.formatNutrition || (depth0 && depth0.formatNutrition) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.energykcal : stack1),{"name":"formatNutrition","hash":{},"data":data}))
    + "</td></tr><tr><td>Sugar</td><td>"
    + alias4((helpers.formatNutrition || (depth0 && depth0.formatNutrition) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutrition : depth0)) != null ? stack1.sugar : stack1),{"name":"formatNutrition","hash":{},"data":data}))
    + "</td></tr></tbody></table></aside><div class=\"nav next\"><img src=\"/images/nav-next.png\" alt=\"next\"></div></div>";
},"useData":true});

this["JST"]["item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article><header><figure><img src=\"/images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></figure><h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2></header><p class=\"price\">$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p><footer><a href=\"#\" class=\"add_cart\">Add to cart</a></footer></article>";
},"useData":true});