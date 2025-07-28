
const search = {
    el: {
        searchInput: document.querySelector('#searchInput'),
        searchResults: document.querySelector('#searchResults'),
        pageH1: document.querySelector('h1')
    },
    decodeHtmlCharCodes: function(str) { 
        // https://stackoverflow.com/a/54346501
        return str.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
            return String.fromCharCode(charCode);
        });
    },
    sanitizeQuery: function(queryString) {
        return queryString.replaceAll('\\', '');
    },
    HTMLEncode: function(str) {
        // https://stackoverflow.com/a/784765
        str = [...str];
        //    ^ es20XX spread to Array: keeps surrogate pairs
        let i = str.length, aRet = [];
      
        while (i--) {
            var iC = str[i].codePointAt(0);
            if (iC < 65 || iC > 127 || (iC>90 && iC<97)) {
                aRet[i] = '&#'+iC+';';
            } else {
                aRet[i] = str[i];
            }
        }
        return aRet.join('');
    },
    searchIndex: function(query) {
        if (typeof search.searchIndexArray == 'object') {
            let markup = '';
            search.searchIndexArray.forEach(function(item) {
                query = search.sanitizeQuery(query);
                const   itemContent = `${item.content} ${item.title}`,
                        content = search.decodeHtmlCharCodes(itemContent).toLowerCase(),
                        queryLowered = query.toLowerCase(),
                        queryLoweredEncoded = search.HTMLEncode(queryLowered),
                        occurrenceIndex = content.indexOf(queryLowered),
                        range = 200,
                        resultUrl = `${item.url}?text=${encodeURIComponent(query)}`;
                let lowIndex = occurrenceIndex - range,
                    highIndex = occurrenceIndex + query.length + range;
                if (lowIndex < 0) lowIndex = 0;
                if (highIndex > content.length - 1) highIndex = content.length - 1;
                let summary = content.slice(lowIndex, highIndex);
                summary = search.HTMLEncode(summary);
                summary = summary.replaceAll(queryLoweredEncoded, ` <mark class="fvs-wght-600 wb-break-all">${query}</mark> `);
                if (resultUrl.indexOf('/tags/?') === 0) item.title = libdocMessages.tagsList;
                if (content.indexOf(queryLowered) > -1) {
                    markup += search.renderSearchResult({url: resultUrl, title: item.title, summary: summary})
                }
            });
            const elTitle = document.querySelector('h1');
            elTitle.innerHTML += `<mark class="fvs-wght-600 wb-break-all">${query}</mark>`;
            if (markup == '') {
                searchResults.innerHTML = `<li>${libdocMessages.searchResultsNoResultForQuery} <mark class="fvs-wght-600 wb-break-all">${query}</mark></li>`;
            } else {
                searchResults.innerHTML = markup;
            }
            searchInput.value = query;
        }
    },
    renderSearchResult: function({url, title, summary}) {
        return `
            <li class="d-flex fd-column gap-2 | pb-5">
                <a  href="${url}"
                    class="fvs-wght-600 fs-5">
                    ${title}
                </a>
                <div class="wb-break-all fs-4" fs-3="xs">
                    ${summary}
                </div>
            </li>
        `;
    },
    renderLoadingResults: function() {
        return `
            <li class="d-flex fd-column pb-5">
                <a  href="#!">
                    <span class="d-flex | p-2 | bc-primary-300 brad-3 | __anim-blink"></span>
                </a>
                <div class="d-flex | mt-3 p-1 | bc-neutral-300 brad-3 | __anim-blink"></div>
                <div class="d-flex | mt-1 p-1 | bc-neutral-300 brad-3 | __anim-blink"></div>
                <div class="d-flex | mt-1 p-1 | bc-neutral-300 brad-3 | __anim-blink"></div>
            </li>`;
    },
    renderMatch: function({key, value}) {
        return `From <strong>${key}</strong>: ${value}`;
    },
    renderSearchResults: function(query, fuseResult) {
        if (search.el.searchInput !== null
            && search.el.searchResults !== null
            && search.el.pageH1 !== null) {
            const markupLoading = search.renderLoadingResults();
            for (let i = 0; i < 4; i++) {
                search.el.searchResults.innerHTML += markupLoading;
            }
            let markup = '';
            fuseResult.forEach(function(fuseItem) {
                let summary = '';
                fuseItem.matches.forEach(function(matchItem) {
                    summary += search.renderMatch({
                        key: matchItem.key,
                        value: matchItem.value
                    });
                });
                markup += search.renderSearchResult({
                    url: fuseItem.item.url,
                    title: fuseItem.item.title,
                    summary: summary
                })
            });
            search.el.pageH1.innerHTML += `<mark class="fvs-wght-600 wb-break-all">${query}</mark>`;
            if (markup == '') {
                search.el.searchResults.innerHTML = `<li>${libdocMessages.searchResultsNoResultForQuery} <mark class="fvs-wght-600 wb-break-all">${query}</mark></li>`;
            } else {
                search.el.searchResults.innerHTML = markup;
            }
            search.el.searchInput.value = query;
        }
    },
    searchIndexArray: null,
    search: function(query) {
        if (typeof query == 'string'
            && search.searchIndexArray !== null
            && typeof search.searchIndexArray == 'object'
            && typeof Fuse == 'function') {
            if (query.length > 0) {
                query = search.sanitizeQuery(query);
                const fuseOptions = {
                    includeScore: true,
                    includeMatches: true,
                    keys: ['url', 'title', 'content']
                }
                const fuse = new Fuse(search.searchIndexArray, fuseOptions);
                const fuseResult = fuse.search(query);
                search.renderSearchResults(query, fuseResult);
            }
        }
    },
    getUrlSearchParams: function() {
        return new URLSearchParams(location.search).get('search');
    },
    update: function() {
        if (typeof libdocConfig.searchIndexUrl == 'string') {
            fetch(libdocConfig.searchIndexUrl)
                .then(response => response.json())
                .then(searchIndexArray => {
                    search.searchIndexArray = searchIndexArray;
                    const searchQuery = search.getUrlSearchParams();
                    if (searchQuery !== null) search.search(searchQuery);
                })
                .catch(error => {
                    // Handle the error
                    console.log(error);
                });
        }
    }
}
document.addEventListener('DOMContentLoaded', search.update);
