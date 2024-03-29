function Treemap() {

  // Name for the visualisation to appear in the menu bar.
  this.name = 'Treemap';

  // Each visualisation must have a unique ID with no special
  // characters.
  this.id = 'treemap';

var chart = JSC.chart('chartDiv', {
        debug: true,
        type: 'treemap sliceAndDice',
        title_label_text: 'Uk population compared with the other countries',
        legend_visible: false,
        defaultPoint: {
          tooltip: '%name<br/>Population: %yvalue',
          label_text: '%code {%yValue/1000000:N0}M'
        },
        series: [
          {
            palette: {
              pointValue: '%yValue',
              colors: ['#bcd2f6', '#6296ea']
            },
            name: 'Countries',
            points: [
              {
                name: 'China',
                y: 1349585838,
                attributes: { code: 'CHN' }
              },
              {
                name: 'India',
                y: 1220800359,
                attributes: { code: 'IND' }
              },
              {
                name: 'European Union',
                y: 509365627,
                attributes: { code: 'EU' }
              },
              {
                name: 'United States',
                y: 316438601,
                attributes: { code: 'USA' }
              },
              {
                name: 'Indonesia',
                y: 251160124,
                attributes: { code: 'IDN' }
              },
              {
                name: 'Brazil',
                y: 201009622,
                attributes: { code: 'BRA' }
              },
              {
                name: 'Pakistan',
                y: 193238868,
                attributes: { code: 'PAK' }
              },
              {
                name: 'Nigeria',
                y: 174507539,
                attributes: { code: 'NGA' }
              },
              {
                name: 'Bangladesh',
                y: 163654860,
                attributes: { code: 'BGD' }
              },
              {
                name: 'Russia',
                y: 142500482,
                attributes: { code: 'RUS' }
              },
              {
                name: 'Japan',
                y: 127253075,
                attributes: { code: 'JPN' }
              },
              {
                name: 'Mexico',
                y: 118818228,
                attributes: { code: 'MEX' }
              },
              {
                name: 'Philippines',
                y: 105720644,
                attributes: { code: 'PHL' }
              },
              {
                name: 'Ethiopia',
                y: 93877025,
                attributes: { code: 'ETH' }
              },
              {
                name: 'Vietnam',
                y: 92477857,
                attributes: { code: 'VNM' }
              },
              {
                name: 'Egypt',
                y: 85294388,
                attributes: { code: 'EGY' }
              },
              {
                name: 'Germany',
                y: 81147265,
                attributes: { code: 'DEU' }
              },
              {
                name: 'Turkey',
                y: 80694485,
                attributes: { code: 'TUR' }
              },
              {
                name: 'Iran',
                y: 79853900,
                attributes: { code: 'IRN' }
              },
              {
                name: 'Congo',
                y: 75507308,
                attributes: { code: 'COD' }
              }
            ]
          }
        ],
        toolbar: {
          items: {
            TreemapAlgorithm: {
              type: 'select',
              value: 'sliceAndDice',
              items: 'squarified,sliceAndDice,stripes',
              events_change: setLayoutAlgorithm
            },
            TreemapAlgorithmDirection: {
              type: 'select',
              value: 'horizontal',
              items: 'horizontal,vertical',
              events_change: setLayoutDirection
            }
          }
        }
      });

      var currentAlgorithm = 'sliceAndDice',
        currentDirection = 'horizontal';

      function setLayoutOptions() {
        chart.options({ type: ['treemap', currentAlgorithm, currentDirection].join(' ') });
      }

      function showHideDirectionItem(val) {
        chart.uiItems('TreemapAlgorithmDirection').visible(val);
      }

      function setLayoutAlgorithm(val) {
        currentAlgorithm = val;
        showHideDirectionItem(val !== 'squarified');
        setLayoutOptions();
      }

      function setLayoutDirection(val) {
        currentDirection = val;
        setLayoutOptions();
      }
}
