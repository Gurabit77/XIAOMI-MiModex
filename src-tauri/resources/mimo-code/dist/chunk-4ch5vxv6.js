// @bun
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+querystring-parser@4.2.14/node_modules/@smithy/querystring-parser/dist-cjs/index.js
var require_dist_cjs = __commonJS((exports) => {
  function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
      for (const pair of querystring.split("&")) {
        let [key, value = null] = pair.split("=");
        key = decodeURIComponent(key);
        if (value) {
          value = decodeURIComponent(value);
        }
        if (!(key in query)) {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      }
    }
    return query;
  }
  exports.parseQueryString = parseQueryString;
});

// node_modules/.bun/@smithy+url-parser@4.2.14/node_modules/@smithy/url-parser/dist-cjs/index.js
var require_dist_cjs2 = __commonJS((exports) => {
  var querystringParser = require_dist_cjs();
  var parseUrl = (url) => {
    if (typeof url === "string") {
      return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
      query = querystringParser.parseQueryString(search);
    }
    return {
      hostname,
      port: port ? parseInt(port) : undefined,
      protocol,
      path: pathname,
      query
    };
  };
  exports.parseUrl = parseUrl;
});

export { require_dist_cjs2 as require_dist_cjs };
