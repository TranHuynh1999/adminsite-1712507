var Script = function () {

    //morris chart

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      var tax_data = [
           {"period": "2019 Q3", "Doanh thu": 3407, "Lợi nhuận": 1160},
           {"period": "2019 Q2", "Doanh thu": 3351, "Lợi nhuận": 929},
           {"period": "2019 Q1", "Doanh thu": 3269, "Lợi nhuận": 898},
           {"period": "2018 Q4", "Doanh thu": 3246, "Lợi nhuận": 861},
           {"period": "2017 Q4", "Doanh thu": 3171, "Lợi nhuận": 701},
           {"period": "2016 Q4", "Doanh thu": 2955, "Lợi nhuận": 695},
           {"period": "2015 Q4", "Doanh thu": 2226, "Lợi nhuận": 556},
           {"period": "2014 Q4", "Doanh thu": 2005, "Lợi nhuận": 300},
           {"period": "2013 Q4", "Doanh thu": 1239, "Lợi nhuận": 265}
      ];
      Morris.Line({
        element: 'hero-graph',
        data: tax_data,
        xkey: 'period',
        ykeys: ['Doanh thu', 'Lợi nhuận'],
        labels: ['Doanh thu(triệu VNĐ)', 'Lợi nhuận(triệu VNĐ'],
        lineColors:['#4ECDC4','#ed5565']
      });


      Morris.Bar({
        element: 'hero-bar',
        data: [
          {device: 'Tuần 6', geekbench: 236},
          {device: 'Tuần 5', geekbench: 278},
          {device: 'Tuần 4', geekbench: 305},
          {device: 'Tuần 3', geekbench: 300},
          {device: 'Tuần 2', geekbench: 600},
          {device: 'Tuần 1', geekbench: 891}
        ],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Doanh thu(triệu VNĐ)'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#ac92ec']
      });

      new Morris.Line({
        element: 'examplefirst',
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
        data: [
          {year: '2008', value: 20},
          {year: '2009', value: 10},
          {year: '2010', value: 5},
          {year: '2011', value: 5},
          {year: '2012', value: 20}
        ]
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




