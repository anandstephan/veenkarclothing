   

// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
var mapHeight = function(){
  var windowHeight = $(window).innerHeight() * 0.8;
  var height = $('.map-warp').width();
  if (height>windowHeight){
    height=windowHeight;
  }
  $('.map-warp').css('height', height + 'px');
  $('.map-wrapper').css('height', height + 'px');
}
mapHeight();

 var data = [{
        "hc-key": "in-py",
            "value": 0
    }, {
        "hc-key": "in-ld",
            "value": 0
    }, {
        "hc-key": "in-wb",//WestBengal
            "value": 3
    }, {
        "hc-key": "in-or",//orrisa
            "value": 0
    }, {
        "hc-key": "in-br",//Bihar
            "value": 0
    }, {
        "hc-key": "in-sk",//Sikkim
            "value": 0
    }, {
        "hc-key": "in-ct",//chhattisgharh
            "value": 2
    }, {
        "hc-key": "in-tn",//Tamilnadu
            "value": 5
    }, {
        "hc-key": "in-mp",//MadhyaPradesh
            "value": 1
    }, {
        "hc-key": "in-2984",//Gujarat
            "value": 6
    }, {
        "hc-key": "in-ga",//Goa
            "value": 0
    }, {
        "hc-key": "in-nl",//Nagaland
            "value": 0
    }, {
        "hc-key": "in-mn",//manipur
            "value": 0
    }, {
        "hc-key": "in-ar",//ArunachalPradesh
            "value": 0
    }, {
        "hc-key": "in-mz",//Mizoram
            "value": 0
    }, {
        "hc-key": "in-tr",//Tripura
            "value": 0
    }, {
        "hc-key": "in-3464",
            "value": 0
    }, {
        "hc-key": "in-dl",//New Delhi
            "value": 18
    }, {
        "hc-key": "in-hr",//Hrayana
            "value": 8
    }, {
        "hc-key": "in-ch",
            "value": 0
    }, {
        "hc-key": "in-hp",//HimachalPradesh
            "value": 0
    }, {
        "hc-key": "in-jk",//Jammu & Kashmir
            "value": 0
    }, {
        "hc-key": "in-kl",//Kerala
            "value": 0
    }, {
        "hc-key": "in-ka",//Karnatka
            "value": 10
    }, {
        "hc-key": "in-dn",//DiuDaman
            "value": 0
    }, {
        "hc-key": "in-mh",//Maharashtra
            "value": 31
    }, {
        "hc-key": "in-as",//Assam
            "value": 0
    }, {
        "hc-key": "in-ap",//AndhraPradesh
            "value": 6
    }, {
        "hc-key": "in-ml",//Meghalaya
            "value": 0
    }, {
        "hc-key": "in-pb",//Panjab
            "value": 2
    }, {
        "hc-key": "in-rj",//Rajasthan
            "value": 6
    }, {
        "hc-key": "in-up",//UtterPradesh
            "value": 5
    }, {
        "hc-key": "in-ut",//Uttaranchal
            "value": 1
    }, {
        "hc-key": "in-jh",//Jharkhand
            "value": 0
    }];


var data2 = [{
        "hc-key": "in-py",
            "value": 0
    }, {
        "hc-key": "in-ld",
            "value": 0
    }, {
        "hc-key": "in-wb",//WestBengal
            "value": 0
    }, {
        "hc-key": "in-or",//orrisa
            "value": 0
    }, {
        "hc-key": "in-br",//Bihar
            "value": 0
    }, {
        "hc-key": "in-sk",//Sikkim
            "value": 0
    }, {
        "hc-key": "in-ct",//chhattisgharh
            "value": 0
    }, {
        "hc-key": "in-tn",//Tamilnadu
            "value": 67
    }, {
        "hc-key": "in-mp",//MadhyaPradesh
            "value": 0
    }, {
        "hc-key": "in-2984",//Gujarat
            "value": 17
    }, {
        "hc-key": "in-ga",//Goa
            "value": 0
    }, {
        "hc-key": "in-nl",//Nagaland
            "value": 0
    }, {
        "hc-key": "in-mn",//manipur
            "value": 0
    }, {
        "hc-key": "in-ar",//ArunachalPradesh
            "value": 0
    }, {
        "hc-key": "in-mz",//Mizoram
            "value": 0
    }, {
        "hc-key": "in-tr",//Tripura
            "value": 0
    }, {
        "hc-key": "in-3464",
            "value": 0
    }, {
        "hc-key": "in-dl",//New Delhi
            "value": 13
    }, {
        "hc-key": "in-hr",//Hrayana
            "value": 25
    }, {
        "hc-key": "in-ch",
            "value": 0
    }, {
        "hc-key": "in-hp",//HimachalPradesh
            "value": 0
    }, {
        "hc-key": "in-jk",//Jammu & Kashmir
            "value": 0
    }, {
        "hc-key": "in-kl",//Kerala
            "value": 0
    }, {
        "hc-key": "in-ka",//Karnatka
            "value": 23
    }, {
        "hc-key": "in-dn",//DiuDaman
            "value": 0
    }, {
        "hc-key": "in-mh",//Maharashtra
            "value": 8
    }, {
        "hc-key": "in-as",//Assam
            "value": 0
    }, {
        "hc-key": "in-ap",//AndhraPradesh
            "value": 43
    }, {
        "hc-key": "in-ml",//Meghalaya
            "value": 0
    }, {
        "hc-key": "in-pb",//Panjab
            "value": 0
    }, {
        "hc-key": "in-rj",//Rajasthan
            "value": 0
    }, {
        "hc-key": "in-up",//UtterPradesh
            "value": 0
    }, {
        "hc-key": "in-ut",//Uttaranchal
            "value": 0
    }, {
        "hc-key": "in-jh",//Jharkhand
            "value": 0
    }];


// Create the chart
Highcharts.mapChart('map-container-cod', {
    chart: {
        map: 'countries/in/custom/in-all-disputed',
//        backgroundColor: '#fafbfc'
         backgroundColor: 'transparent'

    },

    title: {
        text: null
    },

    colorAxis: {
        min: 0,
//        minColor: '#eaedfd',
        minColor: '#fafbfc',
        maxColor: '#3a5bff',
        stops: [
            [0, '#ecf1f5'],
            [0.5, '#3a5bff'],
            [1, '#3a5bff']
        ]
        
    },
    
    tooltip: {
        enabled: true,
        borderColor: '#fff',
        borderWidth: 0,
        shadow: false,
        headerFormat: '',
        pointFormat: '<span">{point.name}: {point.value}%</span>',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 4,
        style: {
            color: '#627285'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        data: data,
        mapData: Highcharts.maps['countries/in/custom/in-all-disputed'],
        joinBy: 'hc-key',
        name: 'COD data',
        borderColor: '#fafbfc',
        borderWidth: 0.5,
        states: {
            hover: {
                borderWidth: 1.5,
                borderColor: '#fafbfc',
                brightness: 0.03
            },
            normal: {
                animation: false
            }
        },
        
    }]
});

Highcharts.mapChart('map-container-refundCod', {
    chart: {
        map: 'countries/in/custom/in-all-disputed',
//        backgroundColor: '#fafbfc'
        backgroundColor: 'transparent'
    },

    title: {
        text: null
    },

    colorAxis: {
        min: 0,
//        minColor: '#eaedfd',
        minColor: '#fafbfc',
        maxColor: '#3a5bff',
        stops: [
            [0, '#ecf1f5'],
            [0.5, '#3a5bff'],
            [1, '#3a5bff']
        ]
        
    },
    
    tooltip: {
        enabled: true,
        borderColor: '#fff',
        borderWidth: 0,
        shadow: false,
        headerFormat: '',
        pointFormat: '<span">{point.name}: {point.value}%</span>',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 4,
        style: {
            color: '#627285'
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        data: data2,
        mapData: Highcharts.maps['countries/in/custom/in-all-disputed'],
        joinBy: 'hc-key',
        name: 'COD data',
        borderColor: '#fafbfc',
        states: {
            hover: {
                borderWidth: 1.5,
                borderColor: '#fafbfc',
                brightness: 0.03
            },
            normal: {
                animation: false
            }
        },
        
    }]
});
//var chart = $('#map-container').highcharts();
//function showchart(data){
//  chart.series[0].setData($.extend(true, [], data));
//}


//Change data when buttons are clicked
$(document).ready(function(){
    $('.map-btn-wrap button').click(function() {
        if (!$(this).hasClass('selected')) {
            $(".map .selected").removeClass('selected');
            $(this).addClass('selected');
            $('.map-warp').toggleClass('show-map');
            mapHeight();
        }
    });
//  $('#cod').click(function(){
//    if (!$(this).hasClass('selected')) {
//      $(".map .selected").removeClass('selected');
//      $(this).addClass('selected');
//       $('.map-warp').toggleClass('show-map');
//        mapHeight();
//      //showchart(data)
//    }
//  });
//  $('#refundCod').click(function(){
//    if (!$(this).hasClass('selected')) {
//      $(".map .selected").removeClass('selected');
//      $(this).addClass('selected');
//      $('.map-warp').toggleClass('show-map');
//        mapHeight();
//      //showchart(data2)
//    }
//  });

    
    
});

  mapHeight();


$(window).resize(function(){
  mapHeight();
})

