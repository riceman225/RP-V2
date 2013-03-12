
$(function(){


	var names = ["Jacob","Isabella","Ethan","Emma","Michael","Olivia","Alexander","Sophia","William","Ava","Joshua","Emily","Daniel","Madison","Jayden","lepture","Abigail","Noah","Chloe","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","你好","你你你", "高富帅","黄季业","Riceman","Hoka Shao"
    ];
    
    var courses = ["心理学导论","Java程序设计","概率论","高等数学A","ABCDEFG课程","HIJKLMN课"
	];
	
	
    $("textarea").atwho("@", {
        data: names,
        limit: 5
    }).atwho("#", {
        data: courses,
        limit: 5
    });
    
    
/*
    $("textarea#inputor").atwho("@",{
        tpl: "<li data-value='${name}'>${name} <small>${name}</small></li>",
        'data':data,
        'callbacks': {
            filter: function (query, data, search_key) {
                return $.map(data, function(item, i) {
                    return item[search_key].toLowerCase().indexOf(query) < 0 ? null : item
                })
            }
        }
    });
*/
    
/*
    $("button#reflash").click(function(){
        // $("textarea#inputor").atwho("@",{"data":data.splice(0,3)})
        $("textarea#inputor").atwho({"data":data.splice(0,3)})
    })

    // =========================


    emojis = [
    "six_pointed_star", "ski", "skull", "sleepy", "slot_machine", "smile",
    "smiley", "smirk", "smoking", "snake", "snowman", "sob", "soccer",
    "space_invader", "spades", "spaghetti", "sparkler", "sparkles",
    "speaker", "speedboat", "squirrel", "star", "star2", "stars", "station",
    "statue_of_liberty", "stew", "strawberry", "sunflower", "sunny",
    "sunrise", "sunrise_over_mountains", "surfer", "sushi", "suspect",
    "sweat", "sweat_drops", "swimmer", "syringe", "tada", "tangerine",
    "taurus", "taxi", "tea", "telephone", "tennis", "tent", "thumbsdown", "+1","-1"]
    
    
    emojis = $.map(emojis,function(value,i){
        return {'key':":"+value+":",'name':value}
    })
    data = $.map(data,function(value,i) {
        return {'name':value,'email':value+"@email.com"};
    });

    $("textarea#inputor").atwho("@",{
        tpl: "<li data-value='${email}'>${name} <small>${email}</small></li>",
        'data':data,
        search_key: "email"
    })
    .atwho("/:",{
        tpl:"<li data-value='${key}'>${name} <img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${name}.png'  height='20' width='20' /></li>"
        ,'data':emojis
        ,display_flag: false
    })
*/
});

