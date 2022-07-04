const searchTop = instantsearch({
    appId: 'F6IU8KRJLJ',
    apiKey: 'c03025c89f3a043b36d313810a7769a2',
    indexName: 'duka_data',
    routing: true,
});


searchTop.addWidget(
    instantsearch.widgets.searchBox({
        container: '#algoliasearchbox',
        placeholder: 'Search for product, brand or category...',
        autofocus: false,
    })
);

/*searchTop.addWidgets(
  instantsearch.widgets.queryRuleCustomData({
    container: '#banner',
    templates: {
      default: `
        {{#items}}
          <p>{{promo_content}}</p>
        {{/items}}
      `,
    },
  })
);*/

searchTop.addWidget(
    instantsearch.widgets.stats({
        container: '#stats',
    })
);

const hitTemplate = document.getElementById('movie').innerHTML;

searchTop.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        hitsPerPage: 5,
        templates: {
            item: hitTemplate,
        },
    })
);


searchTop.start();




jQuery(document).ready(function($) {
    'use strict';
    $(".ais-search-box--input").click(function () {
        $(this).attr("name", "q");
    })
});

