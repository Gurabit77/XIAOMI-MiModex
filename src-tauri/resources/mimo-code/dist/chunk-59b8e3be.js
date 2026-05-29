// @bun
import {
  require_base64_js
} from "./chunk-760252na.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@xmldom+xmldom@0.8.13/node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = __commonJS((exports) => {
  function find(list, predicate, ac) {
    if (ac === undefined) {
      ac = Array.prototype;
    }
    if (list && typeof ac.find === "function") {
      return ac.find.call(list, predicate);
    }
    for (var i = 0;i < list.length; i++) {
      if (Object.prototype.hasOwnProperty.call(list, i)) {
        var item = list[i];
        if (predicate.call(undefined, item, i, list)) {
          return item;
        }
      }
    }
  }
  function freeze(object, oc) {
    if (oc === undefined) {
      oc = Object;
    }
    return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
  }
  function assign(target, source) {
    if (target === null || typeof target !== "object") {
      throw new TypeError("target is not an object");
    }
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
    return target;
  }
  var MIME_TYPE = freeze({
    HTML: "text/html",
    isHTML: function(value) {
      return value === MIME_TYPE.HTML;
    },
    XML_APPLICATION: "application/xml",
    XML_TEXT: "text/xml",
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    XML_SVG_IMAGE: "image/svg+xml"
  });
  var NAMESPACE = freeze({
    HTML: "http://www.w3.org/1999/xhtml",
    isHTML: function(uri) {
      return uri === NAMESPACE.HTML;
    },
    SVG: "http://www.w3.org/2000/svg",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/"
  });
  exports.assign = assign;
  exports.find = find;
  exports.freeze = freeze;
  exports.MIME_TYPE = MIME_TYPE;
  exports.NAMESPACE = NAMESPACE;
});

// node_modules/.bun/@xmldom+xmldom@0.8.13/node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = __commonJS((exports) => {
  var conventions = require_conventions();
  var find = conventions.find;
  var NAMESPACE = conventions.NAMESPACE;
  function notEmptyString(input) {
    return input !== "";
  }
  function splitOnASCIIWhitespace(input) {
    return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
  }
  function orderedSetReducer(current, element) {
    if (!current.hasOwnProperty(element)) {
      current[element] = true;
    }
    return current;
  }
  function toOrderedSet(input) {
    if (!input)
      return [];
    var list = splitOnASCIIWhitespace(input);
    return Object.keys(list.reduce(orderedSetReducer, {}));
  }
  function arrayIncludes(list) {
    return function(element) {
      return list && list.indexOf(element) !== -1;
    };
  }
  function copy(src, dest) {
    for (var p in src) {
      if (Object.prototype.hasOwnProperty.call(src, p)) {
        dest[p] = src[p];
      }
    }
  }
  function _extends(Class, Super) {
    var pt = Class.prototype;
    if (!(pt instanceof Super)) {
      let t2 = function() {};
      var t = t2;
      t2.prototype = Super.prototype;
      t2 = new t2;
      copy(pt, t2);
      Class.prototype = pt = t2;
    }
    if (pt.constructor != Class) {
      if (typeof Class != "function") {
        console.error("unknown Class:" + Class);
      }
      pt.constructor = Class;
    }
  }
  var NodeType = {};
  var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
  var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
  var TEXT_NODE = NodeType.TEXT_NODE = 3;
  var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
  var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
  var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
  var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
  var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
  var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
  var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
  var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
  var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
  var ExceptionCode = {};
  var ExceptionMessage = {};
  var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
  var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
  var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
  var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
  var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
  var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
  var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
  var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
  var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
  var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
  var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
  var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
  var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
  var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
  var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
  function DOMException(code, message) {
    if (message instanceof Error) {
      var error = message;
    } else {
      error = this;
      Error.call(this, ExceptionMessage[code]);
      this.message = ExceptionMessage[code];
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, DOMException);
    }
    error.code = code;
    if (message)
      this.message = this.message + ": " + message;
    return error;
  }
  DOMException.prototype = Error.prototype;
  copy(ExceptionCode, DOMException);
  function NodeList() {}
  NodeList.prototype = {
    length: 0,
    item: function(index) {
      return index >= 0 && index < this.length ? this[index] : null;
    },
    toString: function(isHTML, nodeFilter, options) {
      var requireWellFormed = !!options && !!options.requireWellFormed;
      for (var buf = [], i = 0;i < this.length; i++) {
        serializeToString(this[i], buf, isHTML, nodeFilter, null, requireWellFormed);
      }
      return buf.join("");
    },
    filter: function(predicate) {
      return Array.prototype.filter.call(this, predicate);
    },
    indexOf: function(item) {
      return Array.prototype.indexOf.call(this, item);
    }
  };
  function LiveNodeList(node, refresh) {
    this._node = node;
    this._refresh = refresh;
    _updateLiveList(this);
  }
  function _updateLiveList(list) {
    var inc = list._node._inc || list._node.ownerDocument._inc;
    if (list._inc !== inc) {
      var ls = list._refresh(list._node);
      __set__(list, "length", ls.length);
      if (!list.$$length || ls.length < list.$$length) {
        for (var i = ls.length;i in list; i++) {
          if (Object.prototype.hasOwnProperty.call(list, i)) {
            delete list[i];
          }
        }
      }
      copy(ls, list);
      list._inc = inc;
    }
  }
  LiveNodeList.prototype.item = function(i) {
    _updateLiveList(this);
    return this[i] || null;
  };
  _extends(LiveNodeList, NodeList);
  function NamedNodeMap() {}
  function _findNodeIndex(list, node) {
    var i = list.length;
    while (i--) {
      if (list[i] === node) {
        return i;
      }
    }
  }
  function _addNamedNode(el, list, newAttr, oldAttr) {
    if (oldAttr) {
      list[_findNodeIndex(list, oldAttr)] = newAttr;
    } else {
      list[list.length++] = newAttr;
    }
    if (el) {
      newAttr.ownerElement = el;
      var doc = el.ownerDocument;
      if (doc) {
        oldAttr && _onRemoveAttribute(doc, el, oldAttr);
        _onAddAttribute(doc, el, newAttr);
      }
    }
  }
  function _removeNamedNode(el, list, attr) {
    var i = _findNodeIndex(list, attr);
    if (i >= 0) {
      var lastIndex = list.length - 1;
      while (i < lastIndex) {
        list[i] = list[++i];
      }
      list.length = lastIndex;
      if (el) {
        var doc = el.ownerDocument;
        if (doc) {
          _onRemoveAttribute(doc, el, attr);
          attr.ownerElement = null;
        }
      }
    } else {
      throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
    }
  }
  NamedNodeMap.prototype = {
    length: 0,
    item: NodeList.prototype.item,
    getNamedItem: function(key) {
      var i = this.length;
      while (i--) {
        var attr = this[i];
        if (attr.nodeName == key) {
          return attr;
        }
      }
    },
    setNamedItem: function(attr) {
      var el = attr.ownerElement;
      if (el && el != this._ownerElement) {
        throw new DOMException(INUSE_ATTRIBUTE_ERR);
      }
      var oldAttr = this.getNamedItem(attr.nodeName);
      _addNamedNode(this._ownerElement, this, attr, oldAttr);
      return oldAttr;
    },
    setNamedItemNS: function(attr) {
      var el = attr.ownerElement, oldAttr;
      if (el && el != this._ownerElement) {
        throw new DOMException(INUSE_ATTRIBUTE_ERR);
      }
      oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
      _addNamedNode(this._ownerElement, this, attr, oldAttr);
      return oldAttr;
    },
    removeNamedItem: function(key) {
      var attr = this.getNamedItem(key);
      _removeNamedNode(this._ownerElement, this, attr);
      return attr;
    },
    removeNamedItemNS: function(namespaceURI, localName) {
      var attr = this.getNamedItemNS(namespaceURI, localName);
      _removeNamedNode(this._ownerElement, this, attr);
      return attr;
    },
    getNamedItemNS: function(namespaceURI, localName) {
      var i = this.length;
      while (i--) {
        var node = this[i];
        if (node.localName == localName && node.namespaceURI == namespaceURI) {
          return node;
        }
      }
      return null;
    }
  };
  function DOMImplementation() {}
  DOMImplementation.prototype = {
    hasFeature: function(feature, version) {
      return true;
    },
    createDocument: function(namespaceURI, qualifiedName, doctype) {
      var doc = new Document;
      doc.implementation = this;
      doc.childNodes = new NodeList;
      doc.doctype = doctype || null;
      if (doctype) {
        doc.appendChild(doctype);
      }
      if (qualifiedName) {
        var root = doc.createElementNS(namespaceURI, qualifiedName);
        doc.appendChild(root);
      }
      return doc;
    },
    createDocumentType: function(qualifiedName, publicId, systemId) {
      var node = new DocumentType;
      node.name = qualifiedName;
      node.nodeName = qualifiedName;
      node.publicId = publicId || "";
      node.systemId = systemId || "";
      return node;
    }
  };
  function Node() {}
  Node.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function(newChild, refChild) {
      return _insertBefore(this, newChild, refChild);
    },
    replaceChild: function(newChild, oldChild) {
      _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
      if (oldChild) {
        this.removeChild(oldChild);
      }
    },
    removeChild: function(oldChild) {
      return _removeChild(this, oldChild);
    },
    appendChild: function(newChild) {
      return this.insertBefore(newChild, null);
    },
    hasChildNodes: function() {
      return this.firstChild != null;
    },
    cloneNode: function(deep) {
      return cloneNode(this.ownerDocument || this, this, deep);
    },
    normalize: function() {
      walkDOM(this, null, {
        enter: function(node) {
          var child = node.firstChild;
          while (child) {
            var next = child.nextSibling;
            if (next !== null && next.nodeType === TEXT_NODE && child.nodeType === TEXT_NODE) {
              node.removeChild(next);
              child.appendData(next.data);
            } else {
              child = next;
            }
          }
          return true;
        }
      });
    },
    isSupported: function(feature, version) {
      return this.ownerDocument.implementation.hasFeature(feature, version);
    },
    hasAttributes: function() {
      return this.attributes.length > 0;
    },
    lookupPrefix: function(namespaceURI) {
      var el = this;
      while (el) {
        var map = el._nsMap;
        if (map) {
          for (var n in map) {
            if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
              return n;
            }
          }
        }
        el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function(prefix) {
      var el = this;
      while (el) {
        var map = el._nsMap;
        if (map) {
          if (Object.prototype.hasOwnProperty.call(map, prefix)) {
            return map[prefix];
          }
        }
        el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function(namespaceURI) {
      var prefix = this.lookupPrefix(namespaceURI);
      return prefix == null;
    }
  };
  function _xmlEncoder(c) {
    return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
  }
  copy(NodeType, Node);
  copy(NodeType, Node.prototype);
  function _visitNode(node, callback) {
    return walkDOM(node, null, { enter: function(n) {
      return callback(n) ? walkDOM.STOP : true;
    } }) === walkDOM.STOP;
  }
  function walkDOM(node, context, callbacks) {
    var stack = [{ node, context, phase: walkDOM.ENTER }];
    while (stack.length > 0) {
      var frame = stack.pop();
      if (frame.phase === walkDOM.ENTER) {
        var childContext = callbacks.enter(frame.node, frame.context);
        if (childContext === walkDOM.STOP) {
          return walkDOM.STOP;
        }
        stack.push({ node: frame.node, context: childContext, phase: walkDOM.EXIT });
        if (childContext === null || childContext === undefined) {
          continue;
        }
        var child = frame.node.lastChild;
        while (child) {
          stack.push({ node: child, context: childContext, phase: walkDOM.ENTER });
          child = child.previousSibling;
        }
      } else {
        if (callbacks.exit) {
          callbacks.exit(frame.node, frame.context);
        }
      }
    }
  }
  walkDOM.STOP = Symbol("walkDOM.STOP");
  walkDOM.ENTER = 0;
  walkDOM.EXIT = 1;
  function Document() {
    this.ownerDocument = this;
  }
  function _onAddAttribute(doc, el, newAttr) {
    doc && doc._inc++;
    var ns = newAttr.namespaceURI;
    if (ns === NAMESPACE.XMLNS) {
      el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
    }
  }
  function _onRemoveAttribute(doc, el, newAttr, remove) {
    doc && doc._inc++;
    var ns = newAttr.namespaceURI;
    if (ns === NAMESPACE.XMLNS) {
      delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
    }
  }
  function _onUpdateChild(doc, el, newChild) {
    if (doc && doc._inc) {
      doc._inc++;
      var cs = el.childNodes;
      if (newChild) {
        cs[cs.length++] = newChild;
      } else {
        var child = el.firstChild;
        var i = 0;
        while (child) {
          cs[i++] = child;
          child = child.nextSibling;
        }
        cs.length = i;
        delete cs[cs.length];
      }
    }
  }
  function _removeChild(parentNode, child) {
    var previous = child.previousSibling;
    var next = child.nextSibling;
    if (previous) {
      previous.nextSibling = next;
    } else {
      parentNode.firstChild = next;
    }
    if (next) {
      next.previousSibling = previous;
    } else {
      parentNode.lastChild = previous;
    }
    child.parentNode = null;
    child.previousSibling = null;
    child.nextSibling = null;
    _onUpdateChild(parentNode.ownerDocument, parentNode);
    return child;
  }
  function hasValidParentNodeType(node) {
    return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
  }
  function hasInsertableNodeType(node) {
    return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
  }
  function isDocTypeNode(node) {
    return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
  }
  function isElementNode(node) {
    return node && node.nodeType === Node.ELEMENT_NODE;
  }
  function isTextNode(node) {
    return node && node.nodeType === Node.TEXT_NODE;
  }
  function isElementInsertionPossible(doc, child) {
    var parentChildNodes = doc.childNodes || [];
    if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
      return false;
    }
    var docTypeNode = find(parentChildNodes, isDocTypeNode);
    return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
  }
  function isElementReplacementPossible(doc, child) {
    var parentChildNodes = doc.childNodes || [];
    function hasElementChildThatIsNotChild(node) {
      return isElementNode(node) && node !== child;
    }
    if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
      return false;
    }
    var docTypeNode = find(parentChildNodes, isDocTypeNode);
    return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
  }
  function assertPreInsertionValidity1to5(parent, node, child) {
    if (!hasValidParentNodeType(parent)) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
    }
    if (child && child.parentNode !== parent) {
      throw new DOMException(NOT_FOUND_ERR, "child not in parent");
    }
    if (!hasInsertableNodeType(node) || isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE) {
      throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType);
    }
  }
  function assertPreInsertionValidityInDocument(parent, node, child) {
    var parentChildNodes = parent.childNodes || [];
    var nodeChildNodes = node.childNodes || [];
    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      var nodeChildElements = nodeChildNodes.filter(isElementNode);
      if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
      }
      if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
      }
    }
    if (isElementNode(node)) {
      if (!isElementInsertionPossible(parent, child)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
      }
    }
    if (isDocTypeNode(node)) {
      if (find(parentChildNodes, isDocTypeNode)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
      }
      var parentElementChild = find(parentChildNodes, isElementNode);
      if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
      }
      if (!child && parentElementChild) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
      }
    }
  }
  function assertPreReplacementValidityInDocument(parent, node, child) {
    var parentChildNodes = parent.childNodes || [];
    var nodeChildNodes = node.childNodes || [];
    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      var nodeChildElements = nodeChildNodes.filter(isElementNode);
      if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
      }
      if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
      }
    }
    if (isElementNode(node)) {
      if (!isElementReplacementPossible(parent, child)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
      }
    }
    if (isDocTypeNode(node)) {
      let hasDoctypeChildThatIsNotChild2 = function(node2) {
        return isDocTypeNode(node2) && node2 !== child;
      };
      var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
      if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
      }
      var parentElementChild = find(parentChildNodes, isElementNode);
      if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
      }
    }
  }
  function _insertBefore(parent, node, child, _inDocumentAssertion) {
    assertPreInsertionValidity1to5(parent, node, child);
    if (parent.nodeType === Node.DOCUMENT_NODE) {
      (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
    }
    var cp = node.parentNode;
    if (cp) {
      cp.removeChild(node);
    }
    if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
      var newFirst = node.firstChild;
      if (newFirst == null) {
        return node;
      }
      var newLast = node.lastChild;
    } else {
      newFirst = newLast = node;
    }
    var pre = child ? child.previousSibling : parent.lastChild;
    newFirst.previousSibling = pre;
    newLast.nextSibling = child;
    if (pre) {
      pre.nextSibling = newFirst;
    } else {
      parent.firstChild = newFirst;
    }
    if (child == null) {
      parent.lastChild = newLast;
    } else {
      child.previousSibling = newLast;
    }
    do {
      newFirst.parentNode = parent;
      var targetDoc = parent.ownerDocument || parent;
      _updateOwnerDocument(newFirst, targetDoc);
    } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
    _onUpdateChild(parent.ownerDocument || parent, parent);
    if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
      node.firstChild = node.lastChild = null;
    }
    return node;
  }
  function _updateOwnerDocument(node, newOwnerDocument) {
    if (node.ownerDocument === newOwnerDocument) {
      return;
    }
    node.ownerDocument = newOwnerDocument;
    if (node.nodeType === ELEMENT_NODE && node.attributes) {
      for (var i = 0;i < node.attributes.length; i++) {
        var attr = node.attributes.item(i);
        if (attr) {
          attr.ownerDocument = newOwnerDocument;
        }
      }
    }
    var child = node.firstChild;
    while (child) {
      _updateOwnerDocument(child, newOwnerDocument);
      child = child.nextSibling;
    }
  }
  function _appendSingleChild(parentNode, newChild) {
    if (newChild.parentNode) {
      newChild.parentNode.removeChild(newChild);
    }
    newChild.parentNode = parentNode;
    newChild.previousSibling = parentNode.lastChild;
    newChild.nextSibling = null;
    if (newChild.previousSibling) {
      newChild.previousSibling.nextSibling = newChild;
    } else {
      parentNode.firstChild = newChild;
    }
    parentNode.lastChild = newChild;
    _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
    var targetDoc = parentNode.ownerDocument || parentNode;
    _updateOwnerDocument(newChild, targetDoc);
    return newChild;
  }
  Document.prototype = {
    nodeName: "#document",
    nodeType: DOCUMENT_NODE,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(newChild, refChild) {
      if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
        var child = newChild.firstChild;
        while (child) {
          var next = child.nextSibling;
          this.insertBefore(child, refChild);
          child = next;
        }
        return newChild;
      }
      _insertBefore(this, newChild, refChild);
      _updateOwnerDocument(newChild, this);
      if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
        this.documentElement = newChild;
      }
      return newChild;
    },
    removeChild: function(oldChild) {
      if (this.documentElement == oldChild) {
        this.documentElement = null;
      }
      return _removeChild(this, oldChild);
    },
    replaceChild: function(newChild, oldChild) {
      _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
      _updateOwnerDocument(newChild, this);
      if (oldChild) {
        this.removeChild(oldChild);
      }
      if (isElementNode(newChild)) {
        this.documentElement = newChild;
      }
    },
    importNode: function(importedNode, deep) {
      return importNode(this, importedNode, deep);
    },
    getElementById: function(id) {
      var rtv = null;
      _visitNode(this.documentElement, function(node) {
        if (node.nodeType == ELEMENT_NODE) {
          if (node.getAttribute("id") == id) {
            rtv = node;
            return true;
          }
        }
      });
      return rtv;
    },
    getElementsByClassName: function(classNames) {
      var classNamesSet = toOrderedSet(classNames);
      return new LiveNodeList(this, function(base) {
        var ls = [];
        if (classNamesSet.length > 0) {
          _visitNode(base.documentElement, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE) {
              var nodeClassNames = node.getAttribute("class");
              if (nodeClassNames) {
                var matches = classNames === nodeClassNames;
                if (!matches) {
                  var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                  matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                }
                if (matches) {
                  ls.push(node);
                }
              }
            }
          });
        }
        return ls;
      });
    },
    createElement: function(tagName) {
      var node = new Element;
      node.ownerDocument = this;
      node.nodeName = tagName;
      node.tagName = tagName;
      node.localName = tagName;
      node.childNodes = new NodeList;
      var attrs = node.attributes = new NamedNodeMap;
      attrs._ownerElement = node;
      return node;
    },
    createDocumentFragment: function() {
      var node = new DocumentFragment;
      node.ownerDocument = this;
      node.childNodes = new NodeList;
      return node;
    },
    createTextNode: function(data) {
      var node = new Text;
      node.ownerDocument = this;
      node.appendData(data);
      return node;
    },
    createComment: function(data) {
      var node = new Comment;
      node.ownerDocument = this;
      node.appendData(data);
      return node;
    },
    createCDATASection: function(data) {
      if (data.indexOf("]]>") !== -1) {
        throw new DOMException(INVALID_CHARACTER_ERR, 'data contains "]]>"');
      }
      var node = new CDATASection;
      node.ownerDocument = this;
      node.appendData(data);
      return node;
    },
    createProcessingInstruction: function(target, data) {
      var node = new ProcessingInstruction;
      node.ownerDocument = this;
      node.tagName = node.nodeName = node.target = target;
      node.nodeValue = node.data = data;
      return node;
    },
    createAttribute: function(name) {
      var node = new Attr;
      node.ownerDocument = this;
      node.name = name;
      node.nodeName = name;
      node.localName = name;
      node.specified = true;
      return node;
    },
    createEntityReference: function(name) {
      var node = new EntityReference;
      node.ownerDocument = this;
      node.nodeName = name;
      return node;
    },
    createElementNS: function(namespaceURI, qualifiedName) {
      var node = new Element;
      var pl = qualifiedName.split(":");
      var attrs = node.attributes = new NamedNodeMap;
      node.childNodes = new NodeList;
      node.ownerDocument = this;
      node.nodeName = qualifiedName;
      node.tagName = qualifiedName;
      node.namespaceURI = namespaceURI;
      if (pl.length == 2) {
        node.prefix = pl[0];
        node.localName = pl[1];
      } else {
        node.localName = qualifiedName;
      }
      attrs._ownerElement = node;
      return node;
    },
    createAttributeNS: function(namespaceURI, qualifiedName) {
      var node = new Attr;
      var pl = qualifiedName.split(":");
      node.ownerDocument = this;
      node.nodeName = qualifiedName;
      node.name = qualifiedName;
      node.namespaceURI = namespaceURI;
      node.specified = true;
      if (pl.length == 2) {
        node.prefix = pl[0];
        node.localName = pl[1];
      } else {
        node.localName = qualifiedName;
      }
      return node;
    }
  };
  _extends(Document, Node);
  function Element() {
    this._nsMap = {};
  }
  Element.prototype = {
    nodeType: ELEMENT_NODE,
    hasAttribute: function(name) {
      return this.getAttributeNode(name) != null;
    },
    getAttribute: function(name) {
      var attr = this.getAttributeNode(name);
      return attr && attr.value || "";
    },
    getAttributeNode: function(name) {
      return this.attributes.getNamedItem(name);
    },
    setAttribute: function(name, value) {
      var attr = this.ownerDocument.createAttribute(name);
      attr.value = attr.nodeValue = "" + value;
      this.setAttributeNode(attr);
    },
    removeAttribute: function(name) {
      var attr = this.getAttributeNode(name);
      attr && this.removeAttributeNode(attr);
    },
    appendChild: function(newChild) {
      if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
        return this.insertBefore(newChild, null);
      } else {
        return _appendSingleChild(this, newChild);
      }
    },
    setAttributeNode: function(newAttr) {
      return this.attributes.setNamedItem(newAttr);
    },
    setAttributeNodeNS: function(newAttr) {
      return this.attributes.setNamedItemNS(newAttr);
    },
    removeAttributeNode: function(oldAttr) {
      return this.attributes.removeNamedItem(oldAttr.nodeName);
    },
    removeAttributeNS: function(namespaceURI, localName) {
      var old = this.getAttributeNodeNS(namespaceURI, localName);
      old && this.removeAttributeNode(old);
    },
    hasAttributeNS: function(namespaceURI, localName) {
      return this.getAttributeNodeNS(namespaceURI, localName) != null;
    },
    getAttributeNS: function(namespaceURI, localName) {
      var attr = this.getAttributeNodeNS(namespaceURI, localName);
      return attr && attr.value || "";
    },
    setAttributeNS: function(namespaceURI, qualifiedName, value) {
      var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
      attr.value = attr.nodeValue = "" + value;
      this.setAttributeNode(attr);
    },
    getAttributeNodeNS: function(namespaceURI, localName) {
      return this.attributes.getNamedItemNS(namespaceURI, localName);
    },
    getElementsByTagName: function(tagName) {
      return new LiveNodeList(this, function(base) {
        var ls = [];
        _visitNode(base, function(node) {
          if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
            ls.push(node);
          }
        });
        return ls;
      });
    },
    getElementsByTagNameNS: function(namespaceURI, localName) {
      return new LiveNodeList(this, function(base) {
        var ls = [];
        _visitNode(base, function(node) {
          if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
            ls.push(node);
          }
        });
        return ls;
      });
    }
  };
  Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
  Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
  _extends(Element, Node);
  function Attr() {}
  Attr.prototype.nodeType = ATTRIBUTE_NODE;
  _extends(Attr, Node);
  function CharacterData() {}
  CharacterData.prototype = {
    data: "",
    substringData: function(offset, count) {
      return this.data.substring(offset, offset + count);
    },
    appendData: function(text) {
      text = this.data + text;
      this.nodeValue = this.data = text;
      this.length = text.length;
    },
    insertData: function(offset, text) {
      this.replaceData(offset, 0, text);
    },
    appendChild: function(newChild) {
      throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
    },
    deleteData: function(offset, count) {
      this.replaceData(offset, count, "");
    },
    replaceData: function(offset, count, text) {
      var start = this.data.substring(0, offset);
      var end = this.data.substring(offset + count);
      text = start + text + end;
      this.nodeValue = this.data = text;
      this.length = text.length;
    }
  };
  _extends(CharacterData, Node);
  function Text() {}
  Text.prototype = {
    nodeName: "#text",
    nodeType: TEXT_NODE,
    splitText: function(offset) {
      var text = this.data;
      var newText = text.substring(offset);
      text = text.substring(0, offset);
      this.data = this.nodeValue = text;
      this.length = text.length;
      var newNode = this.ownerDocument.createTextNode(newText);
      if (this.parentNode) {
        this.parentNode.insertBefore(newNode, this.nextSibling);
      }
      return newNode;
    }
  };
  _extends(Text, CharacterData);
  function Comment() {}
  Comment.prototype = {
    nodeName: "#comment",
    nodeType: COMMENT_NODE
  };
  _extends(Comment, CharacterData);
  function CDATASection() {}
  CDATASection.prototype = {
    nodeName: "#cdata-section",
    nodeType: CDATA_SECTION_NODE
  };
  _extends(CDATASection, CharacterData);
  function DocumentType() {}
  DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
  _extends(DocumentType, Node);
  function Notation() {}
  Notation.prototype.nodeType = NOTATION_NODE;
  _extends(Notation, Node);
  function Entity() {}
  Entity.prototype.nodeType = ENTITY_NODE;
  _extends(Entity, Node);
  function EntityReference() {}
  EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
  _extends(EntityReference, Node);
  function DocumentFragment() {}
  DocumentFragment.prototype.nodeName = "#document-fragment";
  DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
  _extends(DocumentFragment, Node);
  function ProcessingInstruction() {}
  ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
  _extends(ProcessingInstruction, Node);
  function XMLSerializer() {}
  XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter, options) {
    return nodeSerializeToString.call(node, isHtml, nodeFilter, options);
  };
  Node.prototype.toString = nodeSerializeToString;
  function nodeSerializeToString(isHtml, nodeFilter, options) {
    var requireWellFormed = !!options && !!options.requireWellFormed;
    var buf = [];
    var refNode = this.nodeType == 9 && this.documentElement || this;
    var prefix = refNode.prefix;
    var uri = refNode.namespaceURI;
    if (uri && prefix == null) {
      var prefix = refNode.lookupPrefix(uri);
      if (prefix == null) {
        var visibleNamespaces = [
          { namespace: uri, prefix: null }
        ];
      }
    }
    serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces, requireWellFormed);
    return buf.join("");
  }
  function needNamespaceDefine(node, isHTML, visibleNamespaces) {
    var prefix = node.prefix || "";
    var uri = node.namespaceURI;
    if (!uri) {
      return false;
    }
    if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
      return false;
    }
    var i = visibleNamespaces.length;
    while (i--) {
      var ns = visibleNamespaces[i];
      if (ns.prefix === prefix) {
        return ns.namespace !== uri;
      }
    }
    return true;
  }
  function addSerializedAttribute(buf, qualifiedName, value) {
    buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
  }
  function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces, requireWellFormed) {
    if (!visibleNamespaces) {
      visibleNamespaces = [];
    }
    walkDOM(node, { ns: visibleNamespaces, isHTML }, {
      enter: function(n, ctx) {
        var ns = ctx.ns;
        var html = ctx.isHTML;
        if (nodeFilter) {
          n = nodeFilter(n);
          if (n) {
            if (typeof n == "string") {
              buf.push(n);
              return null;
            }
          } else {
            return null;
          }
        }
        switch (n.nodeType) {
          case ELEMENT_NODE:
            var attrs = n.attributes;
            var len = attrs.length;
            var nodeName = n.tagName;
            html = NAMESPACE.isHTML(n.namespaceURI) || html;
            var prefixedNodeName = nodeName;
            if (!html && !n.prefix && n.namespaceURI) {
              var defaultNS;
              for (var ai = 0;ai < attrs.length; ai++) {
                if (attrs.item(ai).name === "xmlns") {
                  defaultNS = attrs.item(ai).value;
                  break;
                }
              }
              if (!defaultNS) {
                for (var nsi = ns.length - 1;nsi >= 0; nsi--) {
                  var nsEntry = ns[nsi];
                  if (nsEntry.prefix === "" && nsEntry.namespace === n.namespaceURI) {
                    defaultNS = nsEntry.namespace;
                    break;
                  }
                }
              }
              if (defaultNS !== n.namespaceURI) {
                for (var nsi = ns.length - 1;nsi >= 0; nsi--) {
                  var nsEntry = ns[nsi];
                  if (nsEntry.namespace === n.namespaceURI) {
                    if (nsEntry.prefix) {
                      prefixedNodeName = nsEntry.prefix + ":" + nodeName;
                    }
                    break;
                  }
                }
              }
            }
            buf.push("<", prefixedNodeName);
            var childNs = ns.slice();
            for (var i = 0;i < len; i++) {
              var attr = attrs.item(i);
              if (attr.prefix == "xmlns") {
                childNs.push({ prefix: attr.localName, namespace: attr.value });
              } else if (attr.nodeName == "xmlns") {
                childNs.push({ prefix: "", namespace: attr.value });
              }
            }
            for (var i = 0;i < len; i++) {
              var attr = attrs.item(i);
              if (needNamespaceDefine(attr, html, childNs)) {
                var attrPrefix = attr.prefix || "";
                var uri = attr.namespaceURI;
                addSerializedAttribute(buf, attrPrefix ? "xmlns:" + attrPrefix : "xmlns", uri);
                childNs.push({ prefix: attrPrefix, namespace: uri });
              }
              var filteredAttr = nodeFilter ? nodeFilter(attr) : attr;
              if (filteredAttr) {
                if (typeof filteredAttr === "string") {
                  buf.push(filteredAttr);
                } else {
                  addSerializedAttribute(buf, filteredAttr.name, filteredAttr.value);
                }
              }
            }
            if (nodeName === prefixedNodeName && needNamespaceDefine(n, html, childNs)) {
              var nodePrefix = n.prefix || "";
              var uri = n.namespaceURI;
              addSerializedAttribute(buf, nodePrefix ? "xmlns:" + nodePrefix : "xmlns", uri);
              childNs.push({ prefix: nodePrefix, namespace: uri });
            }
            var child = n.firstChild;
            if (child || html && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
              buf.push(">");
              if (html && /^script$/i.test(nodeName)) {
                while (child) {
                  if (child.data) {
                    buf.push(child.data);
                  } else {
                    serializeToString(child, buf, html, nodeFilter, childNs.slice(), requireWellFormed);
                  }
                  child = child.nextSibling;
                }
                buf.push("</", nodeName, ">");
                return null;
              }
              return { ns: childNs, isHTML: html, tag: prefixedNodeName };
            } else {
              buf.push("/>");
              return null;
            }
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            return { ns: ns.slice(), isHTML: html, tag: null };
          case ATTRIBUTE_NODE:
            addSerializedAttribute(buf, n.name, n.value);
            return null;
          case TEXT_NODE:
            buf.push(n.data.replace(/[<&>]/g, _xmlEncoder));
            return null;
          case CDATA_SECTION_NODE:
            if (requireWellFormed && n.data.indexOf("]]>") !== -1) {
              throw new DOMException(INVALID_STATE_ERR, 'The CDATASection data contains "]]>"');
            }
            buf.push("<![CDATA[", n.data.replace(/]]>/g, "]]]]><![CDATA[>"), "]]>");
            return null;
          case COMMENT_NODE:
            if (requireWellFormed && n.data.indexOf("-->") !== -1) {
              throw new DOMException(INVALID_STATE_ERR, 'The comment node data contains "-->"');
            }
            buf.push("<!--", n.data, "-->");
            return null;
          case DOCUMENT_TYPE_NODE:
            if (requireWellFormed) {
              if (n.publicId && !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(n.publicId)) {
                throw new DOMException(INVALID_STATE_ERR, "DocumentType publicId is not a valid PubidLiteral");
              }
              if (n.systemId && !/^("[^"]*"|'[^']*')$/.test(n.systemId)) {
                throw new DOMException(INVALID_STATE_ERR, "DocumentType systemId is not a valid SystemLiteral");
              }
              if (n.internalSubset && n.internalSubset.indexOf("]>") !== -1) {
                throw new DOMException(INVALID_STATE_ERR, 'DocumentType internalSubset contains "]>"');
              }
            }
            var pubid = n.publicId;
            var sysid = n.systemId;
            buf.push("<!DOCTYPE ", n.name);
            if (pubid) {
              buf.push(" PUBLIC ", pubid);
              if (sysid && sysid != ".") {
                buf.push(" ", sysid);
              }
              buf.push(">");
            } else if (sysid && sysid != ".") {
              buf.push(" SYSTEM ", sysid, ">");
            } else {
              var sub = n.internalSubset;
              if (sub) {
                buf.push(" [", sub, "]");
              }
              buf.push(">");
            }
            return null;
          case PROCESSING_INSTRUCTION_NODE:
            if (requireWellFormed && n.data.indexOf("?>") !== -1) {
              throw new DOMException(INVALID_STATE_ERR, 'The ProcessingInstruction data contains "?>"');
            }
            buf.push("<?", n.target, " ", n.data, "?>");
            return null;
          case ENTITY_REFERENCE_NODE:
            buf.push("&", n.nodeName, ";");
            return null;
          default:
            buf.push("??", n.nodeName);
            return null;
        }
      },
      exit: function(n, childCtx) {
        if (childCtx && childCtx.tag) {
          buf.push("</", childCtx.tag, ">");
        }
      }
    });
  }
  function importNode(doc, node, deep) {
    var destRoot;
    walkDOM(node, null, {
      enter: function(srcNode, destParent) {
        var destNode = srcNode.cloneNode(false);
        destNode.ownerDocument = doc;
        destNode.parentNode = null;
        if (destParent === null) {
          destRoot = destNode;
        } else {
          destParent.appendChild(destNode);
        }
        var shouldDeep = srcNode.nodeType === ATTRIBUTE_NODE || deep;
        return shouldDeep ? destNode : null;
      }
    });
    return destRoot;
  }
  function cloneNode(doc, node, deep) {
    var destRoot;
    walkDOM(node, null, {
      enter: function(srcNode, destParent) {
        var destNode = new srcNode.constructor;
        for (var n in srcNode) {
          if (Object.prototype.hasOwnProperty.call(srcNode, n)) {
            var v = srcNode[n];
            if (typeof v != "object") {
              if (v != destNode[n]) {
                destNode[n] = v;
              }
            }
          }
        }
        if (srcNode.childNodes) {
          destNode.childNodes = new NodeList;
        }
        destNode.ownerDocument = doc;
        var shouldDeep = deep;
        switch (destNode.nodeType) {
          case ELEMENT_NODE:
            var attrs = srcNode.attributes;
            var attrs2 = destNode.attributes = new NamedNodeMap;
            var len = attrs.length;
            attrs2._ownerElement = destNode;
            for (var i = 0;i < len; i++) {
              destNode.setAttributeNode(cloneNode(doc, attrs.item(i), true));
            }
            break;
          case ATTRIBUTE_NODE:
            shouldDeep = true;
        }
        if (destParent !== null) {
          destParent.appendChild(destNode);
        } else {
          destRoot = destNode;
        }
        return shouldDeep ? destNode : null;
      }
    });
    return destRoot;
  }
  function __set__(object, key, value) {
    object[key] = value;
  }
  try {
    if (Object.defineProperty) {
      Object.defineProperty(LiveNodeList.prototype, "length", {
        get: function() {
          _updateLiveList(this);
          return this.$$length;
        }
      });
      Object.defineProperty(Node.prototype, "textContent", {
        get: function() {
          if (this.nodeType === ELEMENT_NODE || this.nodeType === DOCUMENT_FRAGMENT_NODE) {
            var buf = [];
            walkDOM(this, null, {
              enter: function(n) {
                if (n.nodeType === ELEMENT_NODE || n.nodeType === DOCUMENT_FRAGMENT_NODE) {
                  return true;
                }
                if (n.nodeType === PROCESSING_INSTRUCTION_NODE || n.nodeType === COMMENT_NODE) {
                  return null;
                }
                buf.push(n.nodeValue);
              }
            });
            return buf.join("");
          }
          return this.nodeValue;
        },
        set: function(data) {
          switch (this.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              while (this.firstChild) {
                this.removeChild(this.firstChild);
              }
              if (data || String(data)) {
                this.appendChild(this.ownerDocument.createTextNode(data));
              }
              break;
            default:
              this.data = data;
              this.value = data;
              this.nodeValue = data;
          }
        }
      });
      __set__ = function(object, key, value) {
        object["$$" + key] = value;
      };
    }
  } catch (e) {}
  exports.DocumentType = DocumentType;
  exports.DOMException = DOMException;
  exports.DOMImplementation = DOMImplementation;
  exports.Element = Element;
  exports.Node = Node;
  exports.NodeList = NodeList;
  exports.walkDOM = walkDOM;
  exports.XMLSerializer = XMLSerializer;
});

// node_modules/.bun/@xmldom+xmldom@0.8.13/node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = __commonJS((exports) => {
  var freeze = require_conventions().freeze;
  exports.XML_ENTITIES = freeze({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  });
  exports.HTML_ENTITIES = freeze({
    Aacute: "\xC1",
    aacute: "\xE1",
    Abreve: "\u0102",
    abreve: "\u0103",
    ac: "\u223E",
    acd: "\u223F",
    acE: "\u223E\u0333",
    Acirc: "\xC2",
    acirc: "\xE2",
    acute: "\xB4",
    Acy: "\u0410",
    acy: "\u0430",
    AElig: "\xC6",
    aelig: "\xE6",
    af: "\u2061",
    Afr: "\uD835\uDD04",
    afr: "\uD835\uDD1E",
    Agrave: "\xC0",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    Alpha: "\u0391",
    alpha: "\u03B1",
    Amacr: "\u0100",
    amacr: "\u0101",
    amalg: "\u2A3F",
    AMP: "&",
    amp: "&",
    And: "\u2A53",
    and: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    ange: "\u29A4",
    angle: "\u2220",
    angmsd: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angst: "\xC5",
    angzarr: "\u237C",
    Aogon: "\u0104",
    aogon: "\u0105",
    Aopf: "\uD835\uDD38",
    aopf: "\uD835\uDD52",
    ap: "\u2248",
    apacir: "\u2A6F",
    apE: "\u2A70",
    ape: "\u224A",
    apid: "\u224B",
    apos: "'",
    ApplyFunction: "\u2061",
    approx: "\u2248",
    approxeq: "\u224A",
    Aring: "\xC5",
    aring: "\xE5",
    Ascr: "\uD835\uDC9C",
    ascr: "\uD835\uDCB6",
    Assign: "\u2254",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224D",
    Atilde: "\xC3",
    atilde: "\xE3",
    Auml: "\xC4",
    auml: "\xE4",
    awconint: "\u2233",
    awint: "\u2A11",
    backcong: "\u224C",
    backepsilon: "\u03F6",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    Backslash: "\u2216",
    Barv: "\u2AE7",
    barvee: "\u22BD",
    Barwed: "\u2306",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrk: "\u23B5",
    bbrktbrk: "\u23B6",
    bcong: "\u224C",
    Bcy: "\u0411",
    bcy: "\u0431",
    bdquo: "\u201E",
    becaus: "\u2235",
    Because: "\u2235",
    because: "\u2235",
    bemptyv: "\u29B0",
    bepsi: "\u03F6",
    bernou: "\u212C",
    Bernoullis: "\u212C",
    Beta: "\u0392",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    Bfr: "\uD835\uDD05",
    bfr: "\uD835\uDD1F",
    bigcap: "\u22C2",
    bigcirc: "\u25EF",
    bigcup: "\u22C3",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    bigvee: "\u22C1",
    bigwedge: "\u22C0",
    bkarow: "\u290D",
    blacklozenge: "\u29EB",
    blacksquare: "\u25AA",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    blacktriangleright: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bNot: "\u2AED",
    bnot: "\u2310",
    Bopf: "\uD835\uDD39",
    bopf: "\uD835\uDD53",
    bot: "\u22A5",
    bottom: "\u22A5",
    bowtie: "\u22C8",
    boxbox: "\u29C9",
    boxDL: "\u2557",
    boxDl: "\u2556",
    boxdL: "\u2555",
    boxdl: "\u2510",
    boxDR: "\u2554",
    boxDr: "\u2553",
    boxdR: "\u2552",
    boxdr: "\u250C",
    boxH: "\u2550",
    boxh: "\u2500",
    boxHD: "\u2566",
    boxHd: "\u2564",
    boxhD: "\u2565",
    boxhd: "\u252C",
    boxHU: "\u2569",
    boxHu: "\u2567",
    boxhU: "\u2568",
    boxhu: "\u2534",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxUL: "\u255D",
    boxUl: "\u255C",
    boxuL: "\u255B",
    boxul: "\u2518",
    boxUR: "\u255A",
    boxUr: "\u2559",
    boxuR: "\u2558",
    boxur: "\u2514",
    boxV: "\u2551",
    boxv: "\u2502",
    boxVH: "\u256C",
    boxVh: "\u256B",
    boxvH: "\u256A",
    boxvh: "\u253C",
    boxVL: "\u2563",
    boxVl: "\u2562",
    boxvL: "\u2561",
    boxvl: "\u2524",
    boxVR: "\u2560",
    boxVr: "\u255F",
    boxvR: "\u255E",
    boxvr: "\u251C",
    bprime: "\u2035",
    Breve: "\u02D8",
    breve: "\u02D8",
    brvbar: "\xA6",
    Bscr: "\u212C",
    bscr: "\uD835\uDCB7",
    bsemi: "\u204F",
    bsim: "\u223D",
    bsime: "\u22CD",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224E",
    bumpE: "\u2AAE",
    bumpe: "\u224F",
    Bumpeq: "\u224E",
    bumpeq: "\u224F",
    Cacute: "\u0106",
    cacute: "\u0107",
    Cap: "\u22D2",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    CapitalDifferentialD: "\u2145",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    caron: "\u02C7",
    Cayleys: "\u212D",
    ccaps: "\u2A4D",
    Ccaron: "\u010C",
    ccaron: "\u010D",
    Ccedil: "\xC7",
    ccedil: "\xE7",
    Ccirc: "\u0108",
    ccirc: "\u0109",
    Cconint: "\u2230",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    Cdot: "\u010A",
    cdot: "\u010B",
    cedil: "\xB8",
    Cedilla: "\xB8",
    cemptyv: "\u29B2",
    cent: "\xA2",
    CenterDot: "\xB7",
    centerdot: "\xB7",
    Cfr: "\u212D",
    cfr: "\uD835\uDD20",
    CHcy: "\u0427",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    Chi: "\u03A7",
    chi: "\u03C7",
    cir: "\u25CB",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    CircleDot: "\u2299",
    circledR: "\xAE",
    circledS: "\u24C8",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    cirE: "\u29C3",
    cire: "\u2257",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    CloseCurlyQuote: "\u2019",
    clubs: "\u2663",
    clubsuit: "\u2663",
    Colon: "\u2237",
    colon: ":",
    Colone: "\u2A74",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2A6D",
    Congruent: "\u2261",
    Conint: "\u222F",
    conint: "\u222E",
    ContourIntegral: "\u222E",
    Copf: "\u2102",
    copf: "\uD835\uDD54",
    coprod: "\u2210",
    Coproduct: "\u2210",
    COPY: "\xA9",
    copy: "\xA9",
    copysr: "\u2117",
    CounterClockwiseContourIntegral: "\u2233",
    crarr: "\u21B5",
    Cross: "\u2A2F",
    cross: "\u2717",
    Cscr: "\uD835\uDC9E",
    cscr: "\uD835\uDCB8",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cularrp: "\u293D",
    Cup: "\u22D3",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    CupCap: "\u224D",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curarrm: "\u293C",
    curlyeqprec: "\u22DE",
    curlyeqsucc: "\u22DF",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    curren: "\xA4",
    curvearrowleft: "\u21B6",
    curvearrowright: "\u21B7",
    cuvee: "\u22CE",
    cuwed: "\u22CF",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232D",
    Dagger: "\u2021",
    dagger: "\u2020",
    daleth: "\u2138",
    Darr: "\u21A1",
    dArr: "\u21D3",
    darr: "\u2193",
    dash: "\u2010",
    Dashv: "\u2AE4",
    dashv: "\u22A3",
    dbkarow: "\u290F",
    dblac: "\u02DD",
    Dcaron: "\u010E",
    dcaron: "\u010F",
    Dcy: "\u0414",
    dcy: "\u0434",
    DD: "\u2145",
    dd: "\u2146",
    ddagger: "\u2021",
    ddarr: "\u21CA",
    DDotrahd: "\u2911",
    ddotseq: "\u2A77",
    deg: "\xB0",
    Del: "\u2207",
    Delta: "\u0394",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    Dfr: "\uD835\uDD07",
    dfr: "\uD835\uDD21",
    dHar: "\u2965",
    dharl: "\u21C3",
    dharr: "\u21C2",
    DiacriticalAcute: "\xB4",
    DiacriticalDot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02DC",
    diam: "\u22C4",
    Diamond: "\u22C4",
    diamond: "\u22C4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xA8",
    DifferentialD: "\u2146",
    digamma: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    DJcy: "\u0402",
    djcy: "\u0452",
    dlcorn: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    Dopf: "\uD835\uDD3B",
    dopf: "\uD835\uDD55",
    Dot: "\xA8",
    dot: "\u02D9",
    DotDot: "\u20DC",
    doteq: "\u2250",
    doteqdot: "\u2251",
    DotEqual: "\u2250",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    doublebarwedge: "\u2306",
    DoubleContourIntegral: "\u222F",
    DoubleDot: "\xA8",
    DoubleDownArrow: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    DoubleLeftTee: "\u2AE4",
    DoubleLongLeftArrow: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    DoubleRightArrow: "\u21D2",
    DoubleRightTee: "\u22A8",
    DoubleUpArrow: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    DoubleVerticalBar: "\u2225",
    DownArrow: "\u2193",
    Downarrow: "\u21D3",
    downarrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    DownBreve: "\u0311",
    downdownarrows: "\u21CA",
    downharpoonleft: "\u21C3",
    downharpoonright: "\u21C2",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    DownTeeArrow: "\u21A7",
    drbkarow: "\u2910",
    drcorn: "\u231F",
    drcrop: "\u230C",
    Dscr: "\uD835\uDC9F",
    dscr: "\uD835\uDCB9",
    DScy: "\u0405",
    dscy: "\u0455",
    dsol: "\u29F6",
    Dstrok: "\u0110",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    dtrif: "\u25BE",
    duarr: "\u21F5",
    duhar: "\u296F",
    dwangle: "\u29A6",
    DZcy: "\u040F",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    Eacute: "\xC9",
    eacute: "\xE9",
    easter: "\u2A6E",
    Ecaron: "\u011A",
    ecaron: "\u011B",
    ecir: "\u2256",
    Ecirc: "\xCA",
    ecirc: "\xEA",
    ecolon: "\u2255",
    Ecy: "\u042D",
    ecy: "\u044D",
    eDDot: "\u2A77",
    Edot: "\u0116",
    eDot: "\u2251",
    edot: "\u0117",
    ee: "\u2147",
    efDot: "\u2252",
    Efr: "\uD835\uDD08",
    efr: "\uD835\uDD22",
    eg: "\u2A9A",
    Egrave: "\xC8",
    egrave: "\xE8",
    egs: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    Element: "\u2208",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    elsdot: "\u2A97",
    Emacr: "\u0112",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    EmptySmallSquare: "\u25FB",
    emptyv: "\u2205",
    EmptyVerySmallSquare: "\u25AB",
    emsp: "\u2003",
    emsp13: "\u2004",
    emsp14: "\u2005",
    ENG: "\u014A",
    eng: "\u014B",
    ensp: "\u2002",
    Eogon: "\u0118",
    eogon: "\u0119",
    Eopf: "\uD835\uDD3C",
    eopf: "\uD835\uDD56",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    Epsilon: "\u0395",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2A96",
    eqslantless: "\u2A95",
    Equal: "\u2A75",
    equals: "=",
    EqualTilde: "\u2242",
    equest: "\u225F",
    Equilibrium: "\u21CC",
    equiv: "\u2261",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erarr: "\u2971",
    erDot: "\u2253",
    Escr: "\u2130",
    escr: "\u212F",
    esdot: "\u2250",
    Esim: "\u2A73",
    esim: "\u2242",
    Eta: "\u0397",
    eta: "\u03B7",
    ETH: "\xD0",
    eth: "\xF0",
    Euml: "\xCB",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    exist: "\u2203",
    Exists: "\u2203",
    expectation: "\u2130",
    ExponentialE: "\u2147",
    exponentiale: "\u2147",
    fallingdotseq: "\u2252",
    Fcy: "\u0424",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    Ffr: "\uD835\uDD09",
    ffr: "\uD835\uDD23",
    filig: "\uFB01",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    Fopf: "\uD835\uDD3D",
    fopf: "\uD835\uDD57",
    ForAll: "\u2200",
    forall: "\u2200",
    fork: "\u22D4",
    forkv: "\u2AD9",
    Fouriertrf: "\u2131",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    Fscr: "\u2131",
    fscr: "\uD835\uDCBB",
    gacute: "\u01F5",
    Gamma: "\u0393",
    gamma: "\u03B3",
    Gammad: "\u03DC",
    gammad: "\u03DD",
    gap: "\u2A86",
    Gbreve: "\u011E",
    gbreve: "\u011F",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    gcirc: "\u011D",
    Gcy: "\u0413",
    gcy: "\u0433",
    Gdot: "\u0120",
    gdot: "\u0121",
    gE: "\u2267",
    ge: "\u2265",
    gEl: "\u2A8C",
    gel: "\u22DB",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    Gfr: "\uD835\uDD0A",
    gfr: "\uD835\uDD24",
    Gg: "\u22D9",
    gg: "\u226B",
    ggg: "\u22D9",
    gimel: "\u2137",
    GJcy: "\u0403",
    gjcy: "\u0453",
    gl: "\u2277",
    gla: "\u2AA5",
    glE: "\u2A92",
    glj: "\u2AA4",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gnE: "\u2269",
    gne: "\u2A88",
    gneq: "\u2A88",
    gneqq: "\u2269",
    gnsim: "\u22E7",
    Gopf: "\uD835\uDD3E",
    gopf: "\uD835\uDD58",
    grave: "`",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Gscr: "\uD835\uDCA2",
    gscr: "\u210A",
    gsim: "\u2273",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    Gt: "\u226B",
    GT: ">",
    gt: ">",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrapprox: "\u2A86",
    gtrarr: "\u2978",
    gtrdot: "\u22D7",
    gtreqless: "\u22DB",
    gtreqqless: "\u2A8C",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    Hacek: "\u02C7",
    hairsp: "\u200A",
    half: "\xBD",
    hamilt: "\u210B",
    HARDcy: "\u042A",
    hardcy: "\u044A",
    hArr: "\u21D4",
    harr: "\u2194",
    harrcir: "\u2948",
    harrw: "\u21AD",
    Hat: "^",
    hbar: "\u210F",
    Hcirc: "\u0124",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22B9",
    Hfr: "\u210C",
    hfr: "\uD835\uDD25",
    HilbertSpace: "\u210B",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    Hopf: "\u210D",
    hopf: "\uD835\uDD59",
    horbar: "\u2015",
    HorizontalLine: "\u2500",
    Hscr: "\u210B",
    hscr: "\uD835\uDCBD",
    hslash: "\u210F",
    Hstrok: "\u0126",
    hstrok: "\u0127",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    hybull: "\u2043",
    hyphen: "\u2010",
    Iacute: "\xCD",
    iacute: "\xED",
    ic: "\u2063",
    Icirc: "\xCE",
    icirc: "\xEE",
    Icy: "\u0418",
    icy: "\u0438",
    Idot: "\u0130",
    IEcy: "\u0415",
    iecy: "\u0435",
    iexcl: "\xA1",
    iff: "\u21D4",
    Ifr: "\u2111",
    ifr: "\uD835\uDD26",
    Igrave: "\xCC",
    igrave: "\xEC",
    ii: "\u2148",
    iiiint: "\u2A0C",
    iiint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    IJlig: "\u0132",
    ijlig: "\u0133",
    Im: "\u2111",
    Imacr: "\u012A",
    imacr: "\u012B",
    image: "\u2111",
    ImaginaryI: "\u2148",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    Implies: "\u21D2",
    in: "\u2208",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    inodot: "\u0131",
    Int: "\u222C",
    int: "\u222B",
    intcal: "\u22BA",
    integers: "\u2124",
    Integral: "\u222B",
    intercal: "\u22BA",
    Intersection: "\u22C2",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    IOcy: "\u0401",
    iocy: "\u0451",
    Iogon: "\u012E",
    iogon: "\u012F",
    Iopf: "\uD835\uDD40",
    iopf: "\uD835\uDD5A",
    Iota: "\u0399",
    iota: "\u03B9",
    iprod: "\u2A3C",
    iquest: "\xBF",
    Iscr: "\u2110",
    iscr: "\uD835\uDCBE",
    isin: "\u2208",
    isindot: "\u22F5",
    isinE: "\u22F9",
    isins: "\u22F4",
    isinsv: "\u22F3",
    isinv: "\u2208",
    it: "\u2062",
    Itilde: "\u0128",
    itilde: "\u0129",
    Iukcy: "\u0406",
    iukcy: "\u0456",
    Iuml: "\xCF",
    iuml: "\xEF",
    Jcirc: "\u0134",
    jcirc: "\u0135",
    Jcy: "\u0419",
    jcy: "\u0439",
    Jfr: "\uD835\uDD0D",
    jfr: "\uD835\uDD27",
    jmath: "\u0237",
    Jopf: "\uD835\uDD41",
    jopf: "\uD835\uDD5B",
    Jscr: "\uD835\uDCA5",
    jscr: "\uD835\uDCBF",
    Jsercy: "\u0408",
    jsercy: "\u0458",
    Jukcy: "\u0404",
    jukcy: "\u0454",
    Kappa: "\u039A",
    kappa: "\u03BA",
    kappav: "\u03F0",
    Kcedil: "\u0136",
    kcedil: "\u0137",
    Kcy: "\u041A",
    kcy: "\u043A",
    Kfr: "\uD835\uDD0E",
    kfr: "\uD835\uDD28",
    kgreen: "\u0138",
    KHcy: "\u0425",
    khcy: "\u0445",
    KJcy: "\u040C",
    kjcy: "\u045C",
    Kopf: "\uD835\uDD42",
    kopf: "\uD835\uDD5C",
    Kscr: "\uD835\uDCA6",
    kscr: "\uD835\uDCC0",
    lAarr: "\u21DA",
    Lacute: "\u0139",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lagran: "\u2112",
    Lambda: "\u039B",
    lambda: "\u03BB",
    Lang: "\u27EA",
    lang: "\u27E8",
    langd: "\u2991",
    langle: "\u27E8",
    lap: "\u2A85",
    Laplacetrf: "\u2112",
    laquo: "\xAB",
    Larr: "\u219E",
    lArr: "\u21D0",
    larr: "\u2190",
    larrb: "\u21E4",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrhk: "\u21A9",
    larrlp: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    lat: "\u2AAB",
    lAtail: "\u291B",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lBarr: "\u290E",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    Lcaron: "\u013D",
    lcaron: "\u013E",
    Lcedil: "\u013B",
    lcedil: "\u013C",
    lceil: "\u2308",
    lcub: "{",
    Lcy: "\u041B",
    lcy: "\u043B",
    ldca: "\u2936",
    ldquo: "\u201C",
    ldquor: "\u201E",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    lE: "\u2266",
    le: "\u2264",
    LeftAngleBracket: "\u27E8",
    LeftArrow: "\u2190",
    Leftarrow: "\u21D0",
    leftarrow: "\u2190",
    LeftArrowBar: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    leftarrowtail: "\u21A2",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    leftharpoondown: "\u21BD",
    leftharpoonup: "\u21BC",
    leftleftarrows: "\u21C7",
    LeftRightArrow: "\u2194",
    Leftrightarrow: "\u21D4",
    leftrightarrow: "\u2194",
    leftrightarrows: "\u21C6",
    leftrightharpoons: "\u21CB",
    leftrightsquigarrow: "\u21AD",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    LeftTeeArrow: "\u21A4",
    LeftTeeVector: "\u295A",
    leftthreetimes: "\u22CB",
    LeftTriangle: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    LeftVectorBar: "\u2952",
    lEg: "\u2A8B",
    leg: "\u22DA",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessapprox: "\u2A85",
    lessdot: "\u22D6",
    lesseqgtr: "\u22DA",
    lesseqqgtr: "\u2A8B",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    LessLess: "\u2AA1",
    lesssim: "\u2272",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    lfisht: "\u297C",
    lfloor: "\u230A",
    Lfr: "\uD835\uDD0F",
    lfr: "\uD835\uDD29",
    lg: "\u2276",
    lgE: "\u2A91",
    lHar: "\u2962",
    lhard: "\u21BD",
    lharu: "\u21BC",
    lharul: "\u296A",
    lhblk: "\u2584",
    LJcy: "\u0409",
    ljcy: "\u0459",
    Ll: "\u22D8",
    ll: "\u226A",
    llarr: "\u21C7",
    llcorner: "\u231E",
    Lleftarrow: "\u21DA",
    llhard: "\u296B",
    lltri: "\u25FA",
    Lmidot: "\u013F",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lnE: "\u2268",
    lne: "\u2A87",
    lneq: "\u2A87",
    lneqq: "\u2268",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    lobrk: "\u27E6",
    LongLeftArrow: "\u27F5",
    Longleftarrow: "\u27F8",
    longleftarrow: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    Longleftrightarrow: "\u27FA",
    longleftrightarrow: "\u27F7",
    longmapsto: "\u27FC",
    LongRightArrow: "\u27F6",
    Longrightarrow: "\u27F9",
    longrightarrow: "\u27F6",
    looparrowleft: "\u21AB",
    looparrowright: "\u21AC",
    lopar: "\u2985",
    Lopf: "\uD835\uDD43",
    lopf: "\uD835\uDD5D",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    lowbar: "_",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lozf: "\u29EB",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21C6",
    lrcorner: "\u231F",
    lrhar: "\u21CB",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    Lscr: "\u2112",
    lscr: "\uD835\uDCC1",
    Lsh: "\u21B0",
    lsh: "\u21B0",
    lsim: "\u2272",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201A",
    Lstrok: "\u0141",
    lstrok: "\u0142",
    Lt: "\u226A",
    LT: "<",
    lt: "<",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltdot: "\u22D6",
    lthree: "\u22CB",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltri: "\u25C3",
    ltrie: "\u22B4",
    ltrif: "\u25C2",
    ltrPar: "\u2996",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    macr: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    Map: "\u2905",
    map: "\u21A6",
    mapsto: "\u21A6",
    mapstodown: "\u21A7",
    mapstoleft: "\u21A4",
    mapstoup: "\u21A5",
    marker: "\u25AE",
    mcomma: "\u2A29",
    Mcy: "\u041C",
    mcy: "\u043C",
    mdash: "\u2014",
    mDDot: "\u223A",
    measuredangle: "\u2221",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mfr: "\uD835\uDD10",
    mfr: "\uD835\uDD2A",
    mho: "\u2127",
    micro: "\xB5",
    mid: "\u2223",
    midast: "*",
    midcir: "\u2AF0",
    middot: "\xB7",
    minus: "\u2212",
    minusb: "\u229F",
    minusd: "\u2238",
    minusdu: "\u2A2A",
    MinusPlus: "\u2213",
    mlcp: "\u2ADB",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22A7",
    Mopf: "\uD835\uDD44",
    mopf: "\uD835\uDD5E",
    mp: "\u2213",
    Mscr: "\u2133",
    mscr: "\uD835\uDCC2",
    mstpos: "\u223E",
    Mu: "\u039C",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nabla: "\u2207",
    Nacute: "\u0143",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    nap: "\u2249",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natur: "\u266E",
    natural: "\u266E",
    naturals: "\u2115",
    nbsp: "\xA0",
    nbump: "\u224E\u0338",
    nbumpe: "\u224F\u0338",
    ncap: "\u2A43",
    Ncaron: "\u0147",
    ncaron: "\u0148",
    Ncedil: "\u0145",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    Ncy: "\u041D",
    ncy: "\u043D",
    ndash: "\u2013",
    ne: "\u2260",
    nearhk: "\u2924",
    neArr: "\u21D7",
    nearr: "\u2197",
    nearrow: "\u2197",
    nedot: "\u2250\u0338",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NewLine: `
`,
    nexist: "\u2204",
    nexists: "\u2204",
    Nfr: "\uD835\uDD11",
    nfr: "\uD835\uDD2B",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    nGg: "\u22D9\u0338",
    ngsim: "\u2275",
    nGt: "\u226B\u20D2",
    ngt: "\u226F",
    ngtr: "\u226F",
    nGtv: "\u226B\u0338",
    nhArr: "\u21CE",
    nharr: "\u21AE",
    nhpar: "\u2AF2",
    ni: "\u220B",
    nis: "\u22FC",
    nisd: "\u22FA",
    niv: "\u220B",
    NJcy: "\u040A",
    njcy: "\u045A",
    nlArr: "\u21CD",
    nlarr: "\u219A",
    nldr: "\u2025",
    nlE: "\u2266\u0338",
    nle: "\u2270",
    nLeftarrow: "\u21CD",
    nleftarrow: "\u219A",
    nLeftrightarrow: "\u21CE",
    nleftrightarrow: "\u21AE",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    nless: "\u226E",
    nLl: "\u22D8\u0338",
    nlsim: "\u2274",
    nLt: "\u226A\u20D2",
    nlt: "\u226E",
    nltri: "\u22EA",
    nltrie: "\u22EC",
    nLtv: "\u226A\u0338",
    nmid: "\u2224",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    Nopf: "\u2115",
    nopf: "\uD835\uDD5F",
    Not: "\u2AEC",
    not: "\xAC",
    NotCongruent: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    notin: "\u2209",
    notindot: "\u22F5\u0338",
    notinE: "\u22F9\u0338",
    notinva: "\u2209",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    notni: "\u220C",
    notniva: "\u220C",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    NotReverseElement: "\u220C",
    NotRightTriangle: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    NotSubset: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    npar: "\u2226",
    nparallel: "\u2226",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    npr: "\u2280",
    nprcue: "\u22E0",
    npre: "\u2AAF\u0338",
    nprec: "\u2280",
    npreceq: "\u2AAF\u0338",
    nrArr: "\u21CF",
    nrarr: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nRightarrow: "\u21CF",
    nrightarrow: "\u219B",
    nrtri: "\u22EB",
    nrtrie: "\u22ED",
    nsc: "\u2281",
    nsccue: "\u22E1",
    nsce: "\u2AB0\u0338",
    Nscr: "\uD835\uDCA9",
    nscr: "\uD835\uDCC3",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22E2",
    nsqsupe: "\u22E3",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20D2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2AC5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2AB0\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20D2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2AC6\u0338",
    ntgl: "\u2279",
    Ntilde: "\xD1",
    ntilde: "\xF1",
    ntlg: "\u2278",
    ntriangleleft: "\u22EA",
    ntrianglelefteq: "\u22EC",
    ntriangleright: "\u22EB",
    ntrianglerighteq: "\u22ED",
    Nu: "\u039D",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvap: "\u224D\u20D2",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nvDash: "\u22AD",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvHarr: "\u2904",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwarhk: "\u2923",
    nwArr: "\u21D6",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    Oacute: "\xD3",
    oacute: "\xF3",
    oast: "\u229B",
    ocir: "\u229A",
    Ocirc: "\xD4",
    ocirc: "\xF4",
    Ocy: "\u041E",
    ocy: "\u043E",
    odash: "\u229D",
    Odblac: "\u0150",
    odblac: "\u0151",
    odiv: "\u2A38",
    odot: "\u2299",
    odsold: "\u29BC",
    OElig: "\u0152",
    oelig: "\u0153",
    ofcir: "\u29BF",
    Ofr: "\uD835\uDD12",
    ofr: "\uD835\uDD2C",
    ogon: "\u02DB",
    Ograve: "\xD2",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    ohm: "\u03A9",
    oint: "\u222E",
    olarr: "\u21BA",
    olcir: "\u29BE",
    olcross: "\u29BB",
    oline: "\u203E",
    olt: "\u29C0",
    Omacr: "\u014C",
    omacr: "\u014D",
    Omega: "\u03A9",
    omega: "\u03C9",
    Omicron: "\u039F",
    omicron: "\u03BF",
    omid: "\u29B6",
    ominus: "\u2296",
    Oopf: "\uD835\uDD46",
    oopf: "\uD835\uDD60",
    opar: "\u29B7",
    OpenCurlyDoubleQuote: "\u201C",
    OpenCurlyQuote: "\u2018",
    operp: "\u29B9",
    oplus: "\u2295",
    Or: "\u2A54",
    or: "\u2228",
    orarr: "\u21BB",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oS: "\u24C8",
    Oscr: "\uD835\uDCAA",
    oscr: "\u2134",
    Oslash: "\xD8",
    oslash: "\xF8",
    osol: "\u2298",
    Otilde: "\xD5",
    otilde: "\xF5",
    Otimes: "\u2A37",
    otimes: "\u2297",
    otimesas: "\u2A36",
    Ouml: "\xD6",
    ouml: "\xF6",
    ovbar: "\u233D",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    OverParenthesis: "\u23DC",
    par: "\u2225",
    para: "\xB6",
    parallel: "\u2225",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    part: "\u2202",
    PartialD: "\u2202",
    Pcy: "\u041F",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22A5",
    pertenk: "\u2031",
    Pfr: "\uD835\uDD13",
    pfr: "\uD835\uDD2D",
    Phi: "\u03A6",
    phi: "\u03C6",
    phiv: "\u03D5",
    phmmat: "\u2133",
    phone: "\u260E",
    Pi: "\u03A0",
    pi: "\u03C0",
    pitchfork: "\u22D4",
    piv: "\u03D6",
    planck: "\u210F",
    planckh: "\u210E",
    plankv: "\u210F",
    plus: "+",
    plusacir: "\u2A23",
    plusb: "\u229E",
    pluscir: "\u2A22",
    plusdo: "\u2214",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    PlusMinus: "\xB1",
    plusmn: "\xB1",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pm: "\xB1",
    Poincareplane: "\u210C",
    pointint: "\u2A15",
    Popf: "\u2119",
    popf: "\uD835\uDD61",
    pound: "\xA3",
    Pr: "\u2ABB",
    pr: "\u227A",
    prap: "\u2AB7",
    prcue: "\u227C",
    prE: "\u2AB3",
    pre: "\u2AAF",
    prec: "\u227A",
    precapprox: "\u2AB7",
    preccurlyeq: "\u227C",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    preceq: "\u2AAF",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    precsim: "\u227E",
    Prime: "\u2033",
    prime: "\u2032",
    primes: "\u2119",
    prnap: "\u2AB9",
    prnE: "\u2AB5",
    prnsim: "\u22E8",
    prod: "\u220F",
    Product: "\u220F",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221D",
    Proportion: "\u2237",
    Proportional: "\u221D",
    propto: "\u221D",
    prsim: "\u227E",
    prurel: "\u22B0",
    Pscr: "\uD835\uDCAB",
    pscr: "\uD835\uDCC5",
    Psi: "\u03A8",
    psi: "\u03C8",
    puncsp: "\u2008",
    Qfr: "\uD835\uDD14",
    qfr: "\uD835\uDD2E",
    qint: "\u2A0C",
    Qopf: "\u211A",
    qopf: "\uD835\uDD62",
    qprime: "\u2057",
    Qscr: "\uD835\uDCAC",
    qscr: "\uD835\uDCC6",
    quaternions: "\u210D",
    quatint: "\u2A16",
    quest: "?",
    questeq: "\u225F",
    QUOT: '"',
    quot: '"',
    rAarr: "\u21DB",
    race: "\u223D\u0331",
    Racute: "\u0154",
    racute: "\u0155",
    radic: "\u221A",
    raemptyv: "\u29B3",
    Rang: "\u27EB",
    rang: "\u27E9",
    rangd: "\u2992",
    range: "\u29A5",
    rangle: "\u27E9",
    raquo: "\xBB",
    Rarr: "\u21A0",
    rArr: "\u21D2",
    rarr: "\u2192",
    rarrap: "\u2975",
    rarrb: "\u21E5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrhk: "\u21AA",
    rarrlp: "\u21AC",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    Rarrtl: "\u2916",
    rarrtl: "\u21A3",
    rarrw: "\u219D",
    rAtail: "\u291C",
    ratail: "\u291A",
    ratio: "\u2236",
    rationals: "\u211A",
    RBarr: "\u2910",
    rBarr: "\u290F",
    rbarr: "\u290D",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    Rcaron: "\u0158",
    rcaron: "\u0159",
    Rcedil: "\u0156",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    Rcy: "\u0420",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201D",
    rdquor: "\u201D",
    rdsh: "\u21B3",
    Re: "\u211C",
    real: "\u211C",
    realine: "\u211B",
    realpart: "\u211C",
    reals: "\u211D",
    rect: "\u25AD",
    REG: "\xAE",
    reg: "\xAE",
    ReverseElement: "\u220B",
    ReverseEquilibrium: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    rfisht: "\u297D",
    rfloor: "\u230B",
    Rfr: "\u211C",
    rfr: "\uD835\uDD2F",
    rHar: "\u2964",
    rhard: "\u21C1",
    rharu: "\u21C0",
    rharul: "\u296C",
    Rho: "\u03A1",
    rho: "\u03C1",
    rhov: "\u03F1",
    RightAngleBracket: "\u27E9",
    RightArrow: "\u2192",
    Rightarrow: "\u21D2",
    rightarrow: "\u2192",
    RightArrowBar: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    rightarrowtail: "\u21A3",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    rightharpoondown: "\u21C1",
    rightharpoonup: "\u21C0",
    rightleftarrows: "\u21C4",
    rightleftharpoons: "\u21CC",
    rightrightarrows: "\u21C9",
    rightsquigarrow: "\u219D",
    RightTee: "\u22A2",
    RightTeeArrow: "\u21A6",
    RightTeeVector: "\u295B",
    rightthreetimes: "\u22CC",
    RightTriangle: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    RightVectorBar: "\u2953",
    ring: "\u02DA",
    risingdotseq: "\u2253",
    rlarr: "\u21C4",
    rlhar: "\u21CC",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    robrk: "\u27E7",
    ropar: "\u2986",
    Ropf: "\u211D",
    ropf: "\uD835\uDD63",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    RoundImplies: "\u2970",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rrarr: "\u21C9",
    Rrightarrow: "\u21DB",
    rsaquo: "\u203A",
    Rscr: "\u211B",
    rscr: "\uD835\uDCC7",
    Rsh: "\u21B1",
    rsh: "\u21B1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22CC",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    rtrie: "\u22B5",
    rtrif: "\u25B8",
    rtriltri: "\u29CE",
    RuleDelayed: "\u29F4",
    ruluhar: "\u2968",
    rx: "\u211E",
    Sacute: "\u015A",
    sacute: "\u015B",
    sbquo: "\u201A",
    Sc: "\u2ABC",
    sc: "\u227B",
    scap: "\u2AB8",
    Scaron: "\u0160",
    scaron: "\u0161",
    sccue: "\u227D",
    scE: "\u2AB4",
    sce: "\u2AB0",
    Scedil: "\u015E",
    scedil: "\u015F",
    Scirc: "\u015C",
    scirc: "\u015D",
    scnap: "\u2ABA",
    scnE: "\u2AB6",
    scnsim: "\u22E9",
    scpolint: "\u2A13",
    scsim: "\u227F",
    Scy: "\u0421",
    scy: "\u0441",
    sdot: "\u22C5",
    sdotb: "\u22A1",
    sdote: "\u2A66",
    searhk: "\u2925",
    seArr: "\u21D8",
    searr: "\u2198",
    searrow: "\u2198",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    Sfr: "\uD835\uDD16",
    sfr: "\uD835\uDD30",
    sfrown: "\u2322",
    sharp: "\u266F",
    SHCHcy: "\u0429",
    shchcy: "\u0449",
    SHcy: "\u0428",
    shcy: "\u0448",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    shy: "\xAD",
    Sigma: "\u03A3",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    sim: "\u223C",
    simdot: "\u2A6A",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    slarr: "\u2190",
    SmallCircle: "\u2218",
    smallsetminus: "\u2216",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    SOFTcy: "\u042C",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    Sopf: "\uD835\uDD4A",
    sopf: "\uD835\uDD64",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\uFE00",
    sqcup: "\u2294",
    sqcups: "\u2294\uFE00",
    Sqrt: "\u221A",
    sqsub: "\u228F",
    sqsube: "\u2291",
    sqsubset: "\u228F",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    squ: "\u25A1",
    Square: "\u25A1",
    square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    squarf: "\u25AA",
    squf: "\u25AA",
    srarr: "\u2192",
    Sscr: "\uD835\uDCAE",
    sscr: "\uD835\uDCC8",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22C6",
    Star: "\u22C6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03F5",
    straightphi: "\u03D5",
    strns: "\xAF",
    Sub: "\u22D0",
    sub: "\u2282",
    subdot: "\u2ABD",
    subE: "\u2AC5",
    sube: "\u2286",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subne: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    Subset: "\u22D0",
    subset: "\u2282",
    subseteq: "\u2286",
    subseteqq: "\u2AC5",
    SubsetEqual: "\u2286",
    subsetneq: "\u228A",
    subsetneqq: "\u2ACB",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    succ: "\u227B",
    succapprox: "\u2AB8",
    succcurlyeq: "\u227D",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    succeq: "\u2AB0",
    succnapprox: "\u2ABA",
    succneqq: "\u2AB6",
    succnsim: "\u22E9",
    succsim: "\u227F",
    SuchThat: "\u220B",
    Sum: "\u2211",
    sum: "\u2211",
    sung: "\u266A",
    Sup: "\u22D1",
    sup: "\u2283",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supE: "\u2AC6",
    supe: "\u2287",
    supedot: "\u2AC4",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supne: "\u228B",
    supplus: "\u2AC0",
    Supset: "\u22D1",
    supset: "\u2283",
    supseteq: "\u2287",
    supseteqq: "\u2AC6",
    supsetneq: "\u228B",
    supsetneqq: "\u2ACC",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swarhk: "\u2926",
    swArr: "\u21D9",
    swarr: "\u2199",
    swarrow: "\u2199",
    swnwar: "\u292A",
    szlig: "\xDF",
    Tab: "\t",
    target: "\u2316",
    Tau: "\u03A4",
    tau: "\u03C4",
    tbrk: "\u23B4",
    Tcaron: "\u0164",
    tcaron: "\u0165",
    Tcedil: "\u0162",
    tcedil: "\u0163",
    Tcy: "\u0422",
    tcy: "\u0442",
    tdot: "\u20DB",
    telrec: "\u2315",
    Tfr: "\uD835\uDD17",
    tfr: "\uD835\uDD31",
    there4: "\u2234",
    Therefore: "\u2234",
    therefore: "\u2234",
    Theta: "\u0398",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    thickapprox: "\u2248",
    thicksim: "\u223C",
    ThickSpace: "\u205F\u200A",
    thinsp: "\u2009",
    ThinSpace: "\u2009",
    thkap: "\u2248",
    thksim: "\u223C",
    THORN: "\xDE",
    thorn: "\xFE",
    Tilde: "\u223C",
    tilde: "\u02DC",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    times: "\xD7",
    timesb: "\u22A0",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    tint: "\u222D",
    toea: "\u2928",
    top: "\u22A4",
    topbot: "\u2336",
    topcir: "\u2AF1",
    Topf: "\uD835\uDD4B",
    topf: "\uD835\uDD65",
    topfork: "\u2ADA",
    tosa: "\u2929",
    tprime: "\u2034",
    TRADE: "\u2122",
    trade: "\u2122",
    triangle: "\u25B5",
    triangledown: "\u25BF",
    triangleleft: "\u25C3",
    trianglelefteq: "\u22B4",
    triangleq: "\u225C",
    triangleright: "\u25B9",
    trianglerighteq: "\u22B5",
    tridot: "\u25EC",
    trie: "\u225C",
    triminus: "\u2A3A",
    TripleDot: "\u20DB",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    Tscr: "\uD835\uDCAF",
    tscr: "\uD835\uDCC9",
    TScy: "\u0426",
    tscy: "\u0446",
    TSHcy: "\u040B",
    tshcy: "\u045B",
    Tstrok: "\u0166",
    tstrok: "\u0167",
    twixt: "\u226C",
    twoheadleftarrow: "\u219E",
    twoheadrightarrow: "\u21A0",
    Uacute: "\xDA",
    uacute: "\xFA",
    Uarr: "\u219F",
    uArr: "\u21D1",
    uarr: "\u2191",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    ubrcy: "\u045E",
    Ubreve: "\u016C",
    ubreve: "\u016D",
    Ucirc: "\xDB",
    ucirc: "\xFB",
    Ucy: "\u0423",
    ucy: "\u0443",
    udarr: "\u21C5",
    Udblac: "\u0170",
    udblac: "\u0171",
    udhar: "\u296E",
    ufisht: "\u297E",
    Ufr: "\uD835\uDD18",
    ufr: "\uD835\uDD32",
    Ugrave: "\xD9",
    ugrave: "\xF9",
    uHar: "\u2963",
    uharl: "\u21BF",
    uharr: "\u21BE",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    Umacr: "\u016A",
    umacr: "\u016B",
    uml: "\xA8",
    UnderBar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    Uogon: "\u0172",
    uogon: "\u0173",
    Uopf: "\uD835\uDD4C",
    uopf: "\uD835\uDD66",
    UpArrow: "\u2191",
    Uparrow: "\u21D1",
    uparrow: "\u2191",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    UpDownArrow: "\u2195",
    Updownarrow: "\u21D5",
    updownarrow: "\u2195",
    UpEquilibrium: "\u296E",
    upharpoonleft: "\u21BF",
    upharpoonright: "\u21BE",
    uplus: "\u228E",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    Upsi: "\u03D2",
    upsi: "\u03C5",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    upsilon: "\u03C5",
    UpTee: "\u22A5",
    UpTeeArrow: "\u21A5",
    upuparrows: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    Uring: "\u016E",
    uring: "\u016F",
    urtri: "\u25F9",
    Uscr: "\uD835\uDCB0",
    uscr: "\uD835\uDCCA",
    utdot: "\u22F0",
    Utilde: "\u0168",
    utilde: "\u0169",
    utri: "\u25B5",
    utrif: "\u25B4",
    uuarr: "\u21C8",
    Uuml: "\xDC",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vangrt: "\u299C",
    varepsilon: "\u03F5",
    varkappa: "\u03F0",
    varnothing: "\u2205",
    varphi: "\u03D5",
    varpi: "\u03D6",
    varpropto: "\u221D",
    vArr: "\u21D5",
    varr: "\u2195",
    varrho: "\u03F1",
    varsigma: "\u03C2",
    varsubsetneq: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vartheta: "\u03D1",
    vartriangleleft: "\u22B2",
    vartriangleright: "\u22B3",
    Vbar: "\u2AEB",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    Vcy: "\u0412",
    vcy: "\u0432",
    VDash: "\u22AB",
    Vdash: "\u22A9",
    vDash: "\u22A8",
    vdash: "\u22A2",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    vee: "\u2228",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    Verbar: "\u2016",
    verbar: "|",
    Vert: "\u2016",
    vert: "|",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200A",
    Vfr: "\uD835\uDD19",
    vfr: "\uD835\uDD33",
    vltri: "\u22B2",
    vnsub: "\u2282\u20D2",
    vnsup: "\u2283\u20D2",
    Vopf: "\uD835\uDD4D",
    vopf: "\uD835\uDD67",
    vprop: "\u221D",
    vrtri: "\u22B3",
    Vscr: "\uD835\uDCB1",
    vscr: "\uD835\uDCCB",
    vsubnE: "\u2ACB\uFE00",
    vsubne: "\u228A\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vsupne: "\u228B\uFE00",
    Vvdash: "\u22AA",
    vzigzag: "\u299A",
    Wcirc: "\u0174",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    Wedge: "\u22C0",
    wedge: "\u2227",
    wedgeq: "\u2259",
    weierp: "\u2118",
    Wfr: "\uD835\uDD1A",
    wfr: "\uD835\uDD34",
    Wopf: "\uD835\uDD4E",
    wopf: "\uD835\uDD68",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    Wscr: "\uD835\uDCB2",
    wscr: "\uD835\uDCCC",
    xcap: "\u22C2",
    xcirc: "\u25EF",
    xcup: "\u22C3",
    xdtri: "\u25BD",
    Xfr: "\uD835\uDD1B",
    xfr: "\uD835\uDD35",
    xhArr: "\u27FA",
    xharr: "\u27F7",
    Xi: "\u039E",
    xi: "\u03BE",
    xlArr: "\u27F8",
    xlarr: "\u27F5",
    xmap: "\u27FC",
    xnis: "\u22FB",
    xodot: "\u2A00",
    Xopf: "\uD835\uDD4F",
    xopf: "\uD835\uDD69",
    xoplus: "\u2A01",
    xotime: "\u2A02",
    xrArr: "\u27F9",
    xrarr: "\u27F6",
    Xscr: "\uD835\uDCB3",
    xscr: "\uD835\uDCCD",
    xsqcup: "\u2A06",
    xuplus: "\u2A04",
    xutri: "\u25B3",
    xvee: "\u22C1",
    xwedge: "\u22C0",
    Yacute: "\xDD",
    yacute: "\xFD",
    YAcy: "\u042F",
    yacy: "\u044F",
    Ycirc: "\u0176",
    ycirc: "\u0177",
    Ycy: "\u042B",
    ycy: "\u044B",
    yen: "\xA5",
    Yfr: "\uD835\uDD1C",
    yfr: "\uD835\uDD36",
    YIcy: "\u0407",
    yicy: "\u0457",
    Yopf: "\uD835\uDD50",
    yopf: "\uD835\uDD6A",
    Yscr: "\uD835\uDCB4",
    yscr: "\uD835\uDCCE",
    YUcy: "\u042E",
    yucy: "\u044E",
    Yuml: "\u0178",
    yuml: "\xFF",
    Zacute: "\u0179",
    zacute: "\u017A",
    Zcaron: "\u017D",
    zcaron: "\u017E",
    Zcy: "\u0417",
    zcy: "\u0437",
    Zdot: "\u017B",
    zdot: "\u017C",
    zeetrf: "\u2128",
    ZeroWidthSpace: "\u200B",
    Zeta: "\u0396",
    zeta: "\u03B6",
    Zfr: "\u2128",
    zfr: "\uD835\uDD37",
    ZHcy: "\u0416",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    Zopf: "\u2124",
    zopf: "\uD835\uDD6B",
    Zscr: "\uD835\uDCB5",
    zscr: "\uD835\uDCCF",
    zwj: "\u200D",
    zwnj: "\u200C"
  });
  exports.entityMap = exports.HTML_ENTITIES;
});

// node_modules/.bun/@xmldom+xmldom@0.8.13/node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = __commonJS((exports) => {
  var NAMESPACE = require_conventions().NAMESPACE;
  var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
  var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
  var S_TAG = 0;
  var S_ATTR = 1;
  var S_ATTR_SPACE = 2;
  var S_EQ = 3;
  var S_ATTR_NOQUOT_VALUE = 4;
  var S_ATTR_END = 5;
  var S_TAG_SPACE = 6;
  var S_TAG_CLOSE = 7;
  function ParseError(message, locator) {
    this.message = message;
    this.locator = locator;
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ParseError);
  }
  ParseError.prototype = new Error;
  ParseError.prototype.name = ParseError.name;
  function XMLReader() {}
  XMLReader.prototype = {
    parse: function(source, defaultNSMap, entityMap) {
      var domBuilder = this.domBuilder;
      domBuilder.startDocument();
      _copy(defaultNSMap, defaultNSMap = {});
      parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
      domBuilder.endDocument();
    }
  };
  function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
    function fixedFromCharCode(code) {
      if (code > 65535) {
        code -= 65536;
        var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      } else {
        return String.fromCharCode(code);
      }
    }
    function entityReplacer(a2) {
      var k = a2.slice(1, -1);
      if (Object.hasOwnProperty.call(entityMap, k)) {
        return entityMap[k];
      } else if (k.charAt(0) === "#") {
        return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
      } else {
        errorHandler.error("entity not found:" + a2);
        return a2;
      }
    }
    function appendText(end2) {
      if (end2 > start) {
        var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
        locator && position(start);
        domBuilder.characters(xt, 0, end2 - start);
        start = end2;
      }
    }
    function position(p, m) {
      while (p >= lineEnd && (m = linePattern.exec(source))) {
        lineStart = m.index;
        lineEnd = lineStart + m[0].length;
        locator.lineNumber++;
      }
      locator.columnNumber = p - lineStart + 1;
    }
    var lineStart = 0;
    var lineEnd = 0;
    var linePattern = /.*(?:\r\n?|\n)|.*$/g;
    var locator = domBuilder.locator;
    var parseStack = [{ currentNSMap: defaultNSMapCopy }];
    var closeMap = {};
    var start = 0;
    while (true) {
      try {
        var tagStart = source.indexOf("<", start);
        if (tagStart < 0) {
          if (!source.substr(start).match(/^\s*$/)) {
            var doc = domBuilder.doc;
            var text = doc.createTextNode(source.substr(start));
            doc.appendChild(text);
            domBuilder.currentElement = text;
          }
          return;
        }
        if (tagStart > start) {
          appendText(tagStart);
        }
        switch (source.charAt(tagStart + 1)) {
          case "/":
            var end = source.indexOf(">", tagStart + 3);
            var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
            var config = parseStack.pop();
            if (end < 0) {
              tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
              errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
              end = tagStart + 1 + tagName.length;
            } else if (tagName.match(/\s</)) {
              tagName = tagName.replace(/[\s<].*/, "");
              errorHandler.error("end tag name: " + tagName + " maybe not complete");
              end = tagStart + 1 + tagName.length;
            }
            var localNSMap = config.localNSMap;
            var endMatch = config.tagName == tagName;
            var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
            if (endIgnoreCaseMach) {
              domBuilder.endElement(config.uri, config.localName, tagName);
              if (localNSMap) {
                for (var prefix in localNSMap) {
                  if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                    domBuilder.endPrefixMapping(prefix);
                  }
                }
              }
              if (!endMatch) {
                errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
              }
            } else {
              parseStack.push(config);
            }
            end++;
            break;
          case "?":
            locator && position(tagStart);
            end = parseInstruction(source, tagStart, domBuilder);
            break;
          case "!":
            locator && position(tagStart);
            end = parseDCC(source, tagStart, domBuilder, errorHandler);
            break;
          default:
            locator && position(tagStart);
            var el = new ElementAttributes;
            var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
            var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
            var len = el.length;
            if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
              el.closed = true;
              if (!entityMap.nbsp) {
                errorHandler.warning("unclosed xml attribute");
              }
            }
            if (locator && len) {
              var locator2 = copyLocator(locator, {});
              for (var i = 0;i < len; i++) {
                var a = el[i];
                position(a.offset);
                a.locator = copyLocator(locator, {});
              }
              domBuilder.locator = locator2;
              if (appendElement(el, domBuilder, currentNSMap)) {
                parseStack.push(el);
              }
              domBuilder.locator = locator;
            } else {
              if (appendElement(el, domBuilder, currentNSMap)) {
                parseStack.push(el);
              }
            }
            if (NAMESPACE.isHTML(el.uri) && !el.closed) {
              end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
            } else {
              end++;
            }
        }
      } catch (e) {
        if (e instanceof ParseError) {
          throw e;
        }
        errorHandler.error("element parse error: " + e);
        end = -1;
      }
      if (end > start) {
        start = end;
      } else {
        appendText(Math.max(tagStart, start) + 1);
      }
    }
  }
  function copyLocator(f, t) {
    t.lineNumber = f.lineNumber;
    t.columnNumber = f.columnNumber;
    return t;
  }
  function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
    function addAttribute(qname, value2, startIndex) {
      if (el.attributeNames.hasOwnProperty(qname)) {
        errorHandler.fatalError("Attribute " + qname + " redefined");
      }
      el.addValue(qname, value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer), startIndex);
    }
    var attrName;
    var value;
    var p = ++start;
    var s = S_TAG;
    while (true) {
      var c = source.charAt(p);
      switch (c) {
        case "=":
          if (s === S_ATTR) {
            attrName = source.slice(start, p);
            s = S_EQ;
          } else if (s === S_ATTR_SPACE) {
            s = S_EQ;
          } else {
            throw new Error("attribute equal must after attrName");
          }
          break;
        case "'":
        case '"':
          if (s === S_EQ || s === S_ATTR) {
            if (s === S_ATTR) {
              errorHandler.warning('attribute value must after "="');
              attrName = source.slice(start, p);
            }
            start = p + 1;
            p = source.indexOf(c, start);
            if (p > 0) {
              value = source.slice(start, p);
              addAttribute(attrName, value, start - 1);
              s = S_ATTR_END;
            } else {
              throw new Error("attribute value no end '" + c + "' match");
            }
          } else if (s == S_ATTR_NOQUOT_VALUE) {
            value = source.slice(start, p);
            addAttribute(attrName, value, start);
            errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
            start = p + 1;
            s = S_ATTR_END;
          } else {
            throw new Error('attribute value must after "="');
          }
          break;
        case "/":
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p));
            case S_ATTR_END:
            case S_TAG_SPACE:
            case S_TAG_CLOSE:
              s = S_TAG_CLOSE;
              el.closed = true;
            case S_ATTR_NOQUOT_VALUE:
            case S_ATTR:
              break;
            case S_ATTR_SPACE:
              el.closed = true;
              break;
            default:
              throw new Error("attribute invalid close char('/')");
          }
          break;
        case "":
          errorHandler.error("unexpected end of input");
          if (s == S_TAG) {
            el.setTagName(source.slice(start, p));
          }
          return p;
        case ">":
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p));
            case S_ATTR_END:
            case S_TAG_SPACE:
            case S_TAG_CLOSE:
              break;
            case S_ATTR_NOQUOT_VALUE:
            case S_ATTR:
              value = source.slice(start, p);
              if (value.slice(-1) === "/") {
                el.closed = true;
                value = value.slice(0, -1);
              }
            case S_ATTR_SPACE:
              if (s === S_ATTR_SPACE) {
                value = attrName;
              }
              if (s == S_ATTR_NOQUOT_VALUE) {
                errorHandler.warning('attribute "' + value + '" missed quot(")!');
                addAttribute(attrName, value, start);
              } else {
                if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                  errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                }
                addAttribute(value, value, start);
              }
              break;
            case S_EQ:
              throw new Error("attribute value missed!!");
          }
          return p;
        case "\x80":
          c = " ";
        default:
          if (c <= " ") {
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
                s = S_TAG_SPACE;
                break;
              case S_ATTR:
                attrName = source.slice(start, p);
                s = S_ATTR_SPACE;
                break;
              case S_ATTR_NOQUOT_VALUE:
                var value = source.slice(start, p);
                errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                addAttribute(attrName, value, start);
              case S_ATTR_END:
                s = S_TAG_SPACE;
                break;
            }
          } else {
            switch (s) {
              case S_ATTR_SPACE:
                var tagName = el.tagName;
                if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                  errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                }
                addAttribute(attrName, attrName, start);
                start = p;
                s = S_ATTR;
                break;
              case S_ATTR_END:
                errorHandler.warning('attribute space is required"' + attrName + '"!!');
              case S_TAG_SPACE:
                s = S_ATTR;
                start = p;
                break;
              case S_EQ:
                s = S_ATTR_NOQUOT_VALUE;
                start = p;
                break;
              case S_TAG_CLOSE:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
          }
      }
      p++;
    }
  }
  function appendElement(el, domBuilder, currentNSMap) {
    var tagName = el.tagName;
    var localNSMap = null;
    var i = el.length;
    while (i--) {
      var a = el[i];
      var qName = a.qName;
      var value = a.value;
      var nsp = qName.indexOf(":");
      if (nsp > 0) {
        var prefix = a.prefix = qName.slice(0, nsp);
        var localName = qName.slice(nsp + 1);
        var nsPrefix = prefix === "xmlns" && localName;
      } else {
        localName = qName;
        prefix = null;
        nsPrefix = qName === "xmlns" && "";
      }
      a.localName = localName;
      if (nsPrefix !== false) {
        if (localNSMap == null) {
          localNSMap = {};
          _copy(currentNSMap, currentNSMap = {});
        }
        currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
        a.uri = NAMESPACE.XMLNS;
        domBuilder.startPrefixMapping(nsPrefix, value);
      }
    }
    var i = el.length;
    while (i--) {
      a = el[i];
      var prefix = a.prefix;
      if (prefix) {
        if (prefix === "xml") {
          a.uri = NAMESPACE.XML;
        }
        if (prefix !== "xmlns") {
          a.uri = currentNSMap[prefix || ""];
        }
      }
    }
    var nsp = tagName.indexOf(":");
    if (nsp > 0) {
      prefix = el.prefix = tagName.slice(0, nsp);
      localName = el.localName = tagName.slice(nsp + 1);
    } else {
      prefix = null;
      localName = el.localName = tagName;
    }
    var ns = el.uri = currentNSMap[prefix || ""];
    domBuilder.startElement(ns, localName, tagName, el);
    if (el.closed) {
      domBuilder.endElement(ns, localName, tagName);
      if (localNSMap) {
        for (prefix in localNSMap) {
          if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
            domBuilder.endPrefixMapping(prefix);
          }
        }
      }
    } else {
      el.currentNSMap = currentNSMap;
      el.localNSMap = localNSMap;
      return true;
    }
  }
  function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
    if (/^(?:script|textarea)$/i.test(tagName)) {
      var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
      var text = source.substring(elStartEnd + 1, elEndStart);
      if (/[&<]/.test(text)) {
        if (/^script$/i.test(tagName)) {
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
        text = text.replace(/&#?\w+;/g, entityReplacer);
        domBuilder.characters(text, 0, text.length);
        return elEndStart;
      }
    }
    return elStartEnd + 1;
  }
  function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
    var pos = closeMap[tagName];
    if (pos == null) {
      pos = source.lastIndexOf("</" + tagName + ">");
      if (pos < elStartEnd) {
        pos = source.lastIndexOf("</" + tagName);
      }
      closeMap[tagName] = pos;
    }
    return pos < elStartEnd;
  }
  function _copy(source, target) {
    for (var n in source) {
      if (Object.prototype.hasOwnProperty.call(source, n)) {
        target[n] = source[n];
      }
    }
  }
  function parseDCC(source, start, domBuilder, errorHandler) {
    var next = source.charAt(start + 2);
    switch (next) {
      case "-":
        if (source.charAt(start + 3) === "-") {
          var end = source.indexOf("-->", start + 4);
          if (end > start) {
            domBuilder.comment(source, start + 4, end - start - 4);
            return end + 3;
          } else {
            errorHandler.error("Unclosed comment");
            return -1;
          }
        } else {
          return -1;
        }
      default:
        if (source.substr(start + 3, 6) == "CDATA[") {
          var end = source.indexOf("]]>", start + 9);
          domBuilder.startCDATA();
          domBuilder.characters(source, start + 9, end - start - 9);
          domBuilder.endCDATA();
          return end + 3;
        }
        var matchs = split(source, start);
        var len = matchs.length;
        if (len > 1 && /!doctype/i.test(matchs[0][0])) {
          var name = matchs[1][0];
          var pubid = false;
          var sysid = false;
          if (len > 3) {
            if (/^public$/i.test(matchs[2][0])) {
              pubid = matchs[3][0];
              sysid = len > 4 && matchs[4][0];
            } else if (/^system$/i.test(matchs[2][0])) {
              sysid = matchs[3][0];
            }
          }
          var lastMatch = matchs[len - 1];
          domBuilder.startDTD(name, pubid, sysid);
          domBuilder.endDTD();
          return lastMatch.index + lastMatch[0].length;
        }
    }
    return -1;
  }
  function parseInstruction(source, start, domBuilder) {
    var end = source.indexOf("?>", start);
    if (end) {
      var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)$/);
      if (match) {
        var len = match[0].length;
        domBuilder.processingInstruction(match[1], match[2]);
        return end + 2;
      } else {
        return -1;
      }
    }
    return -1;
  }
  function ElementAttributes() {
    this.attributeNames = {};
  }
  ElementAttributes.prototype = {
    setTagName: function(tagName) {
      if (!tagNamePattern.test(tagName)) {
        throw new Error("invalid tagName:" + tagName);
      }
      this.tagName = tagName;
    },
    addValue: function(qName, value, offset) {
      if (!tagNamePattern.test(qName)) {
        throw new Error("invalid attribute:" + qName);
      }
      this.attributeNames[qName] = this.length;
      this[this.length++] = { qName, value, offset };
    },
    length: 0,
    getLocalName: function(i) {
      return this[i].localName;
    },
    getLocator: function(i) {
      return this[i].locator;
    },
    getQName: function(i) {
      return this[i].qName;
    },
    getURI: function(i) {
      return this[i].uri;
    },
    getValue: function(i) {
      return this[i].value;
    }
  };
  function split(source, start) {
    var match;
    var buf = [];
    var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    reg.lastIndex = start;
    reg.exec(source);
    while (match = reg.exec(source)) {
      buf.push(match);
      if (match[1])
        return buf;
    }
  }
  exports.XMLReader = XMLReader;
  exports.ParseError = ParseError;
});

// node_modules/.bun/@xmldom+xmldom@0.8.13/node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = __commonJS((exports) => {
  var conventions = require_conventions();
  var dom = require_dom();
  var entities = require_entities();
  var sax = require_sax();
  var DOMImplementation = dom.DOMImplementation;
  var NAMESPACE = conventions.NAMESPACE;
  var ParseError = sax.ParseError;
  var XMLReader = sax.XMLReader;
  function normalizeLineEndings(input) {
    return input.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
  }
  function DOMParser(options) {
    this.options = options || { locator: {} };
  }
  DOMParser.prototype.parseFromString = function(source, mimeType) {
    var options = this.options;
    var sax2 = new XMLReader;
    var domBuilder = options.domBuilder || new DOMHandler;
    var errorHandler = options.errorHandler;
    var locator = options.locator;
    var defaultNSMap = options.xmlns || {};
    var isHTML = /\/x?html?$/.test(mimeType);
    var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
    if (locator) {
      domBuilder.setDocumentLocator(locator);
    }
    sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
    sax2.domBuilder = options.domBuilder || domBuilder;
    if (isHTML) {
      defaultNSMap[""] = NAMESPACE.HTML;
    }
    defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
    var normalize = options.normalizeLineEndings || normalizeLineEndings;
    if (source && typeof source === "string") {
      sax2.parse(normalize(source), defaultNSMap, entityMap);
    } else {
      sax2.errorHandler.error("invalid doc source");
    }
    return domBuilder.doc;
  };
  function buildErrorHandler(errorImpl, domBuilder, locator) {
    if (!errorImpl) {
      if (domBuilder instanceof DOMHandler) {
        return domBuilder;
      }
      errorImpl = domBuilder;
    }
    var errorHandler = {};
    var isCallback = errorImpl instanceof Function;
    locator = locator || {};
    function build(key) {
      var fn = errorImpl[key];
      if (!fn && isCallback) {
        fn = errorImpl.length == 2 ? function(msg) {
          errorImpl(key, msg);
        } : errorImpl;
      }
      errorHandler[key] = fn && function(msg) {
        fn("[xmldom " + key + "]\t" + msg + _locator(locator));
      } || function() {};
    }
    build("warning");
    build("error");
    build("fatalError");
    return errorHandler;
  }
  function DOMHandler() {
    this.cdata = false;
  }
  function position(locator, node) {
    node.lineNumber = locator.lineNumber;
    node.columnNumber = locator.columnNumber;
  }
  DOMHandler.prototype = {
    startDocument: function() {
      this.doc = new DOMImplementation().createDocument(null, null, null);
      if (this.locator) {
        this.doc.documentURI = this.locator.systemId;
      }
    },
    startElement: function(namespaceURI, localName, qName, attrs) {
      var doc = this.doc;
      var el = doc.createElementNS(namespaceURI, qName || localName);
      var len = attrs.length;
      appendElement(this, el);
      this.currentElement = el;
      this.locator && position(this.locator, el);
      for (var i = 0;i < len; i++) {
        var namespaceURI = attrs.getURI(i);
        var value = attrs.getValue(i);
        var qName = attrs.getQName(i);
        var attr = doc.createAttributeNS(namespaceURI, qName);
        this.locator && position(attrs.getLocator(i), attr);
        attr.value = attr.nodeValue = value;
        el.setAttributeNode(attr);
      }
    },
    endElement: function(namespaceURI, localName, qName) {
      var current = this.currentElement;
      var tagName = current.tagName;
      this.currentElement = current.parentNode;
    },
    startPrefixMapping: function(prefix, uri) {},
    endPrefixMapping: function(prefix) {},
    processingInstruction: function(target, data) {
      var ins = this.doc.createProcessingInstruction(target, data);
      this.locator && position(this.locator, ins);
      appendElement(this, ins);
    },
    ignorableWhitespace: function(ch, start, length) {},
    characters: function(chars, start, length) {
      chars = _toString.apply(this, arguments);
      if (chars) {
        if (this.cdata) {
          var charNode = this.doc.createCDATASection(chars);
        } else {
          var charNode = this.doc.createTextNode(chars);
        }
        if (this.currentElement) {
          this.currentElement.appendChild(charNode);
        } else if (/^\s*$/.test(chars)) {
          this.doc.appendChild(charNode);
        }
        this.locator && position(this.locator, charNode);
      }
    },
    skippedEntity: function(name) {},
    endDocument: function() {
      this.doc.normalize();
    },
    setDocumentLocator: function(locator) {
      if (this.locator = locator) {
        locator.lineNumber = 0;
      }
    },
    comment: function(chars, start, length) {
      chars = _toString.apply(this, arguments);
      var comm = this.doc.createComment(chars);
      this.locator && position(this.locator, comm);
      appendElement(this, comm);
    },
    startCDATA: function() {
      this.cdata = true;
    },
    endCDATA: function() {
      this.cdata = false;
    },
    startDTD: function(name, publicId, systemId) {
      var impl = this.doc.implementation;
      if (impl && impl.createDocumentType) {
        var dt = impl.createDocumentType(name, publicId, systemId);
        this.locator && position(this.locator, dt);
        appendElement(this, dt);
        this.doc.doctype = dt;
      }
    },
    warning: function(error) {
      console.warn("[xmldom warning]\t" + error, _locator(this.locator));
    },
    error: function(error) {
      console.error("[xmldom error]\t" + error, _locator(this.locator));
    },
    fatalError: function(error) {
      throw new ParseError(error, this.locator);
    }
  };
  function _locator(l) {
    if (l) {
      return `
@` + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
    }
  }
  function _toString(chars, start, length) {
    if (typeof chars == "string") {
      return chars.substr(start, length);
    } else {
      if (chars.length >= start + length || start) {
        return new java.lang.String(chars, start, length) + "";
      }
      return chars;
    }
  }
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
    DOMHandler.prototype[key] = function() {
      return null;
    };
  });
  function appendElement(hander, node) {
    if (!hander.currentElement) {
      hander.doc.appendChild(node);
    } else {
      hander.currentElement.appendChild(node);
    }
  }
  exports.__DOMHandler = DOMHandler;
  exports.normalizeLineEndings = normalizeLineEndings;
  exports.DOMParser = DOMParser;
});

// node_modules/.bun/@xmldom+xmldom@0.8.13/node_modules/@xmldom/xmldom/lib/index.js
var require_lib = __commonJS((exports) => {
  var dom = require_dom();
  exports.DOMImplementation = dom.DOMImplementation;
  exports.XMLSerializer = dom.XMLSerializer;
  exports.DOMParser = require_dom_parser().DOMParser;
});

// node_modules/.bun/plist@3.1.0/node_modules/plist/lib/parse.js
var require_parse = __commonJS((exports) => {
  var { DOMParser } = require_lib();
  exports.parse = parse;
  var TEXT_NODE = 3;
  var CDATA_NODE = 4;
  var COMMENT_NODE = 8;
  function shouldIgnoreNode(node) {
    return node.nodeType === TEXT_NODE || node.nodeType === COMMENT_NODE || node.nodeType === CDATA_NODE;
  }
  function isEmptyNode(node) {
    if (!node.childNodes || node.childNodes.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  function invariant(test, message) {
    if (!test) {
      throw new Error(message);
    }
  }
  function parse(xml) {
    var doc = new DOMParser().parseFromString(xml);
    invariant(doc.documentElement.nodeName === "plist", "malformed document. First element should be <plist>");
    var plist = parsePlistXML(doc.documentElement);
    if (plist.length == 1)
      plist = plist[0];
    return plist;
  }
  function parsePlistXML(node) {
    var i, new_obj, key, val, new_arr, res, counter, type;
    if (!node)
      return null;
    if (node.nodeName === "plist") {
      new_arr = [];
      if (isEmptyNode(node)) {
        return new_arr;
      }
      for (i = 0;i < node.childNodes.length; i++) {
        if (!shouldIgnoreNode(node.childNodes[i])) {
          new_arr.push(parsePlistXML(node.childNodes[i]));
        }
      }
      return new_arr;
    } else if (node.nodeName === "dict") {
      new_obj = {};
      key = null;
      counter = 0;
      if (isEmptyNode(node)) {
        return new_obj;
      }
      for (i = 0;i < node.childNodes.length; i++) {
        if (shouldIgnoreNode(node.childNodes[i]))
          continue;
        if (counter % 2 === 0) {
          invariant(node.childNodes[i].nodeName === "key", "Missing key while parsing <dict/>.");
          key = parsePlistXML(node.childNodes[i]);
        } else {
          invariant(node.childNodes[i].nodeName !== "key", 'Unexpected key "' + parsePlistXML(node.childNodes[i]) + '" while parsing <dict/>.');
          new_obj[key] = parsePlistXML(node.childNodes[i]);
        }
        counter += 1;
      }
      if (counter % 2 === 1) {
        new_obj[key] = "";
      }
      return new_obj;
    } else if (node.nodeName === "array") {
      new_arr = [];
      if (isEmptyNode(node)) {
        return new_arr;
      }
      for (i = 0;i < node.childNodes.length; i++) {
        if (!shouldIgnoreNode(node.childNodes[i])) {
          res = parsePlistXML(node.childNodes[i]);
          if (res != null)
            new_arr.push(res);
        }
      }
      return new_arr;
    } else if (node.nodeName === "#text") {} else if (node.nodeName === "key") {
      if (isEmptyNode(node)) {
        return "";
      }
      invariant(node.childNodes[0].nodeValue !== "__proto__", "__proto__ keys can lead to prototype pollution. More details on CVE-2022-22912");
      return node.childNodes[0].nodeValue;
    } else if (node.nodeName === "string") {
      res = "";
      if (isEmptyNode(node)) {
        return res;
      }
      for (i = 0;i < node.childNodes.length; i++) {
        var type = node.childNodes[i].nodeType;
        if (type === TEXT_NODE || type === CDATA_NODE) {
          res += node.childNodes[i].nodeValue;
        }
      }
      return res;
    } else if (node.nodeName === "integer") {
      invariant(!isEmptyNode(node), 'Cannot parse "" as integer.');
      return parseInt(node.childNodes[0].nodeValue, 10);
    } else if (node.nodeName === "real") {
      invariant(!isEmptyNode(node), 'Cannot parse "" as real.');
      res = "";
      for (i = 0;i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === TEXT_NODE) {
          res += node.childNodes[i].nodeValue;
        }
      }
      return parseFloat(res);
    } else if (node.nodeName === "data") {
      res = "";
      if (isEmptyNode(node)) {
        return Buffer.from(res, "base64");
      }
      for (i = 0;i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === TEXT_NODE) {
          res += node.childNodes[i].nodeValue.replace(/\s+/g, "");
        }
      }
      return Buffer.from(res, "base64");
    } else if (node.nodeName === "date") {
      invariant(!isEmptyNode(node), 'Cannot parse "" as Date.');
      return new Date(node.childNodes[0].nodeValue);
    } else if (node.nodeName === "null") {
      return null;
    } else if (node.nodeName === "true") {
      return true;
    } else if (node.nodeName === "false") {
      return false;
    } else {
      throw new Error("Invalid PLIST tag " + node.nodeName);
    }
  }
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/Utility.js
var require_Utility = __commonJS((exports, module) => {
  (function() {
    var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, hasProp = {}.hasOwnProperty;
    assign = function(target, ...sources) {
      var i, key, len, source;
      if (isFunction(Object.assign)) {
        Object.assign.apply(null, arguments);
      } else {
        for (i = 0, len = sources.length;i < len; i++) {
          source = sources[i];
          if (source != null) {
            for (key in source) {
              if (!hasProp.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
    isFunction = function(val) {
      return !!val && Object.prototype.toString.call(val) === "[object Function]";
    };
    isObject = function(val) {
      var ref;
      return !!val && ((ref = typeof val) === "function" || ref === "object");
    };
    isArray = function(val) {
      if (isFunction(Array.isArray)) {
        return Array.isArray(val);
      } else {
        return Object.prototype.toString.call(val) === "[object Array]";
      }
    };
    isEmpty = function(val) {
      var key;
      if (isArray(val)) {
        return !val.length;
      } else {
        for (key in val) {
          if (!hasProp.call(val, key))
            continue;
          return false;
        }
        return true;
      }
    };
    isPlainObject = function(val) {
      var ctor, proto;
      return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
    };
    getValue = function(obj) {
      if (isFunction(obj.valueOf)) {
        return obj.valueOf();
      } else {
        return obj;
      }
    };
    exports.assign = assign;
    exports.isFunction = isFunction;
    exports.isObject = isObject;
    exports.isArray = isArray;
    exports.isEmpty = isEmpty;
    exports.isPlainObject = isPlainObject;
    exports.getValue = getValue;
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMImplementation.js
var require_XMLDOMImplementation = __commonJS((exports, module) => {
  (function() {
    var XMLDOMImplementation;
    module.exports = XMLDOMImplementation = class XMLDOMImplementation2 {
      hasFeature(feature, version) {
        return true;
      }
      createDocumentType(qualifiedName, publicId, systemId) {
        throw new Error("This DOM method is not implemented.");
      }
      createDocument(namespaceURI, qualifiedName, doctype) {
        throw new Error("This DOM method is not implemented.");
      }
      createHTMLDocument(title) {
        throw new Error("This DOM method is not implemented.");
      }
      getFeature(feature, version) {
        throw new Error("This DOM method is not implemented.");
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js
var require_XMLDOMErrorHandler = __commonJS((exports, module) => {
  (function() {
    var XMLDOMErrorHandler;
    module.exports = XMLDOMErrorHandler = class XMLDOMErrorHandler2 {
      constructor() {}
      handleError(error) {
        throw new Error(error);
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMStringList.js
var require_XMLDOMStringList = __commonJS((exports, module) => {
  (function() {
    var XMLDOMStringList;
    module.exports = XMLDOMStringList = function() {

      class XMLDOMStringList2 {
        constructor(arr) {
          this.arr = arr || [];
        }
        item(index) {
          return this.arr[index] || null;
        }
        contains(str) {
          return this.arr.indexOf(str) !== -1;
        }
      }
      Object.defineProperty(XMLDOMStringList2.prototype, "length", {
        get: function() {
          return this.arr.length;
        }
      });
      return XMLDOMStringList2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js
var require_XMLDOMConfiguration = __commonJS((exports, module) => {
  (function() {
    var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
    XMLDOMErrorHandler = require_XMLDOMErrorHandler();
    XMLDOMStringList = require_XMLDOMStringList();
    module.exports = XMLDOMConfiguration = function() {

      class XMLDOMConfiguration2 {
        constructor() {
          var clonedSelf;
          this.defaultParams = {
            "canonical-form": false,
            "cdata-sections": false,
            comments: false,
            "datatype-normalization": false,
            "element-content-whitespace": true,
            entities: true,
            "error-handler": new XMLDOMErrorHandler,
            infoset: true,
            "validate-if-schema": false,
            namespaces: true,
            "namespace-declarations": true,
            "normalize-characters": false,
            "schema-location": "",
            "schema-type": "",
            "split-cdata-sections": true,
            validate: false,
            "well-formed": true
          };
          this.params = clonedSelf = Object.create(this.defaultParams);
        }
        getParameter(name) {
          if (this.params.hasOwnProperty(name)) {
            return this.params[name];
          } else {
            return null;
          }
        }
        canSetParameter(name, value) {
          return true;
        }
        setParameter(name, value) {
          if (value != null) {
            return this.params[name] = value;
          } else {
            return delete this.params[name];
          }
        }
      }
      Object.defineProperty(XMLDOMConfiguration2.prototype, "parameterNames", {
        get: function() {
          return new XMLDOMStringList(Object.keys(this.defaultParams));
        }
      });
      return XMLDOMConfiguration2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/NodeType.js
var require_NodeType = __commonJS((exports, module) => {
  (function() {
    module.exports = {
      Element: 1,
      Attribute: 2,
      Text: 3,
      CData: 4,
      EntityReference: 5,
      EntityDeclaration: 6,
      ProcessingInstruction: 7,
      Comment: 8,
      Document: 9,
      DocType: 10,
      DocumentFragment: 11,
      NotationDeclaration: 12,
      Declaration: 201,
      Raw: 202,
      AttributeDeclaration: 203,
      ElementDeclaration: 204,
      Dummy: 205
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLAttribute.js
var require_XMLAttribute = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLAttribute, XMLNode;
    NodeType = require_NodeType();
    XMLNode = require_XMLNode();
    module.exports = XMLAttribute = function() {

      class XMLAttribute2 {
        constructor(parent, name, value) {
          this.parent = parent;
          if (this.parent) {
            this.options = this.parent.options;
            this.stringify = this.parent.stringify;
          }
          if (name == null) {
            throw new Error("Missing attribute name. " + this.debugInfo(name));
          }
          this.name = this.stringify.name(name);
          this.value = this.stringify.attValue(value);
          this.type = NodeType.Attribute;
          this.isId = false;
          this.schemaTypeInfo = null;
        }
        clone() {
          return Object.create(this);
        }
        toString(options) {
          return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
        }
        debugInfo(name) {
          name = name || this.name;
          if (name == null) {
            return "parent: <" + this.parent.name + ">";
          } else {
            return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
          }
        }
        isEqualNode(node) {
          if (node.namespaceURI !== this.namespaceURI) {
            return false;
          }
          if (node.prefix !== this.prefix) {
            return false;
          }
          if (node.localName !== this.localName) {
            return false;
          }
          if (node.value !== this.value) {
            return false;
          }
          return true;
        }
      }
      Object.defineProperty(XMLAttribute2.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "ownerElement", {
        get: function() {
          return this.parent;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "prefix", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "localName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "specified", {
        get: function() {
          return true;
        }
      });
      return XMLAttribute2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js
var require_XMLNamedNodeMap = __commonJS((exports, module) => {
  (function() {
    var XMLNamedNodeMap;
    module.exports = XMLNamedNodeMap = function() {

      class XMLNamedNodeMap2 {
        constructor(nodes) {
          this.nodes = nodes;
        }
        clone() {
          return this.nodes = null;
        }
        getNamedItem(name) {
          return this.nodes[name];
        }
        setNamedItem(node) {
          var oldNode;
          oldNode = this.nodes[node.nodeName];
          this.nodes[node.nodeName] = node;
          return oldNode || null;
        }
        removeNamedItem(name) {
          var oldNode;
          oldNode = this.nodes[name];
          delete this.nodes[name];
          return oldNode || null;
        }
        item(index) {
          return this.nodes[Object.keys(this.nodes)[index]] || null;
        }
        getNamedItemNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented.");
        }
        setNamedItemNS(node) {
          throw new Error("This DOM method is not implemented.");
        }
        removeNamedItemNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented.");
        }
      }
      Object.defineProperty(XMLNamedNodeMap2.prototype, "length", {
        get: function() {
          return Object.keys(this.nodes).length || 0;
        }
      });
      return XMLNamedNodeMap2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLElement.js
var require_XMLElement = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, hasProp = {}.hasOwnProperty;
    ({ isObject, isFunction, getValue } = require_Utility());
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    XMLAttribute = require_XMLAttribute();
    XMLNamedNodeMap = require_XMLNamedNodeMap();
    module.exports = XMLElement = function() {

      class XMLElement2 extends XMLNode {
        constructor(parent, name, attributes) {
          var child, j, len, ref;
          super(parent);
          if (name == null) {
            throw new Error("Missing element name. " + this.debugInfo());
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.Element;
          this.attribs = {};
          this.schemaTypeInfo = null;
          if (attributes != null) {
            this.attribute(attributes);
          }
          if (parent.type === NodeType.Document) {
            this.isRoot = true;
            this.documentObject = parent;
            parent.rootObject = this;
            if (parent.children) {
              ref = parent.children;
              for (j = 0, len = ref.length;j < len; j++) {
                child = ref[j];
                if (child.type === NodeType.DocType) {
                  child.name = this.name;
                  break;
                }
              }
            }
          }
        }
        clone() {
          var att, attName, clonedSelf, ref;
          clonedSelf = Object.create(this);
          if (clonedSelf.isRoot) {
            clonedSelf.documentObject = null;
          }
          clonedSelf.attribs = {};
          ref = this.attribs;
          for (attName in ref) {
            if (!hasProp.call(ref, attName))
              continue;
            att = ref[attName];
            clonedSelf.attribs[attName] = att.clone();
          }
          clonedSelf.children = [];
          this.children.forEach(function(child) {
            var clonedChild;
            clonedChild = child.clone();
            clonedChild.parent = clonedSelf;
            return clonedSelf.children.push(clonedChild);
          });
          return clonedSelf;
        }
        attribute(name, value) {
          var attName, attValue;
          if (name != null) {
            name = getValue(name);
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName))
                continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (this.options.keepNullAttributes && value == null) {
              this.attribs[name] = new XMLAttribute(this, name, "");
            } else if (value != null) {
              this.attribs[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        }
        removeAttribute(name) {
          var attName, j, len;
          if (name == null) {
            throw new Error("Missing attribute name. " + this.debugInfo());
          }
          name = getValue(name);
          if (Array.isArray(name)) {
            for (j = 0, len = name.length;j < len; j++) {
              attName = name[j];
              delete this.attribs[attName];
            }
          } else {
            delete this.attribs[name];
          }
          return this;
        }
        toString(options) {
          return this.options.writer.element(this, this.options.writer.filterOptions(options));
        }
        att(name, value) {
          return this.attribute(name, value);
        }
        a(name, value) {
          return this.attribute(name, value);
        }
        getAttribute(name) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name].value;
          } else {
            return null;
          }
        }
        setAttribute(name, value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getAttributeNode(name) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name];
          } else {
            return null;
          }
        }
        setAttributeNode(newAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        removeAttributeNode(oldAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagName(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getAttributeNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        setAttributeNS(namespaceURI, qualifiedName, value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        removeAttributeNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getAttributeNodeNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        setAttributeNodeNS(newAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagNameNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        hasAttribute(name) {
          return this.attribs.hasOwnProperty(name);
        }
        hasAttributeNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        setIdAttribute(name, isId) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name].isId;
          } else {
            return isId;
          }
        }
        setIdAttributeNS(namespaceURI, localName, isId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        setIdAttributeNode(idAttr, isId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagName(tagname) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagNameNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByClassName(classNames) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        isEqualNode(node) {
          var i, j, ref;
          if (!super.isEqualNode(node)) {
            return false;
          }
          if (node.namespaceURI !== this.namespaceURI) {
            return false;
          }
          if (node.prefix !== this.prefix) {
            return false;
          }
          if (node.localName !== this.localName) {
            return false;
          }
          if (node.attribs.length !== this.attribs.length) {
            return false;
          }
          for (i = j = 0, ref = this.attribs.length - 1;0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            if (!this.attribs[i].isEqualNode(node.attribs[i])) {
              return false;
            }
          }
          return true;
        }
      }
      Object.defineProperty(XMLElement2.prototype, "tagName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLElement2.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLElement2.prototype, "prefix", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLElement2.prototype, "localName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLElement2.prototype, "id", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "className", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "classList", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "attributes", {
        get: function() {
          if (!this.attributeMap || !this.attributeMap.nodes) {
            this.attributeMap = new XMLNamedNodeMap(this.attribs);
          }
          return this.attributeMap;
        }
      });
      return XMLElement2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCharacterData.js
var require_XMLCharacterData = __commonJS((exports, module) => {
  (function() {
    var XMLCharacterData, XMLNode;
    XMLNode = require_XMLNode();
    module.exports = XMLCharacterData = function() {

      class XMLCharacterData2 extends XMLNode {
        constructor(parent) {
          super(parent);
          this.value = "";
        }
        clone() {
          return Object.create(this);
        }
        substringData(offset, count) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        appendData(arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        insertData(offset, arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        deleteData(offset, count) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        replaceData(offset, count, arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        isEqualNode(node) {
          if (!super.isEqualNode(node)) {
            return false;
          }
          if (node.data !== this.data) {
            return false;
          }
          return true;
        }
      }
      Object.defineProperty(XMLCharacterData2.prototype, "data", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      Object.defineProperty(XMLCharacterData2.prototype, "length", {
        get: function() {
          return this.value.length;
        }
      });
      Object.defineProperty(XMLCharacterData2.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      return XMLCharacterData2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCData.js
var require_XMLCData = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLCData, XMLCharacterData;
    NodeType = require_NodeType();
    XMLCharacterData = require_XMLCharacterData();
    module.exports = XMLCData = class XMLCData2 extends XMLCharacterData {
      constructor(parent, text) {
        super(parent);
        if (text == null) {
          throw new Error("Missing CDATA text. " + this.debugInfo());
        }
        this.name = "#cdata-section";
        this.type = NodeType.CData;
        this.value = this.stringify.cdata(text);
      }
      clone() {
        return Object.create(this);
      }
      toString(options) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLComment.js
var require_XMLComment = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLCharacterData, XMLComment;
    NodeType = require_NodeType();
    XMLCharacterData = require_XMLCharacterData();
    module.exports = XMLComment = class XMLComment2 extends XMLCharacterData {
      constructor(parent, text) {
        super(parent);
        if (text == null) {
          throw new Error("Missing comment text. " + this.debugInfo());
        }
        this.name = "#comment";
        this.type = NodeType.Comment;
        this.value = this.stringify.comment(text);
      }
      clone() {
        return Object.create(this);
      }
      toString(options) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(options));
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDeclaration.js
var require_XMLDeclaration = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDeclaration, XMLNode, isObject;
    ({ isObject } = require_Utility());
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDeclaration = class XMLDeclaration2 extends XMLNode {
      constructor(parent, version, encoding, standalone) {
        super(parent);
        if (isObject(version)) {
          ({ version, encoding, standalone } = version);
        }
        if (!version) {
          version = "1.0";
        }
        this.type = NodeType.Declaration;
        this.version = this.stringify.xmlVersion(version);
        if (encoding != null) {
          this.encoding = this.stringify.xmlEncoding(encoding);
        }
        if (standalone != null) {
          this.standalone = this.stringify.xmlStandalone(standalone);
        }
      }
      toString(options) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDAttList.js
var require_XMLDTDAttList = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDAttList, XMLNode;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDTDAttList = class XMLDTDAttList2 extends XMLNode {
      constructor(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        super(parent);
        if (elementName == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (attributeName == null) {
          throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
        }
        if (!attributeType) {
          throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
        }
        if (!defaultValueType) {
          throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
        }
        if (defaultValueType.indexOf("#") !== 0) {
          defaultValueType = "#" + defaultValueType;
        }
        if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
        }
        if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
        }
        this.elementName = this.stringify.name(elementName);
        this.type = NodeType.AttributeDeclaration;
        this.attributeName = this.stringify.name(attributeName);
        this.attributeType = this.stringify.dtdAttType(attributeType);
        if (defaultValue) {
          this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
        }
        this.defaultValueType = defaultValueType;
      }
      toString(options) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDEntity.js
var require_XMLDTDEntity = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDEntity, XMLNode, isObject;
    ({ isObject } = require_Utility());
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDTDEntity = function() {

      class XMLDTDEntity2 extends XMLNode {
        constructor(parent, pe, name, value) {
          super(parent);
          if (name == null) {
            throw new Error("Missing DTD entity name. " + this.debugInfo(name));
          }
          if (value == null) {
            throw new Error("Missing DTD entity value. " + this.debugInfo(name));
          }
          this.pe = !!pe;
          this.name = this.stringify.name(name);
          this.type = NodeType.EntityDeclaration;
          if (!isObject(value)) {
            this.value = this.stringify.dtdEntityValue(value);
            this.internal = true;
          } else {
            if (!value.pubID && !value.sysID) {
              throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
            }
            if (value.pubID && !value.sysID) {
              throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
            }
            this.internal = false;
            if (value.pubID != null) {
              this.pubID = this.stringify.dtdPubID(value.pubID);
            }
            if (value.sysID != null) {
              this.sysID = this.stringify.dtdSysID(value.sysID);
            }
            if (value.nData != null) {
              this.nData = this.stringify.dtdNData(value.nData);
            }
            if (this.pe && this.nData) {
              throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
            }
          }
        }
        toString(options) {
          return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
        }
      }
      Object.defineProperty(XMLDTDEntity2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "notationName", {
        get: function() {
          return this.nData || null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "xmlEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "xmlVersion", {
        get: function() {
          return null;
        }
      });
      return XMLDTDEntity2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDElement.js
var require_XMLDTDElement = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDElement, XMLNode;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDTDElement = class XMLDTDElement2 extends XMLNode {
      constructor(parent, name, value) {
        super(parent);
        if (name == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (!value) {
          value = "(#PCDATA)";
        }
        if (Array.isArray(value)) {
          value = "(" + value.join(",") + ")";
        }
        this.name = this.stringify.name(name);
        this.type = NodeType.ElementDeclaration;
        this.value = this.stringify.dtdElementValue(value);
      }
      toString(options) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDNotation.js
var require_XMLDTDNotation = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDNotation, XMLNode;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDTDNotation = function() {

      class XMLDTDNotation2 extends XMLNode {
        constructor(parent, name, value) {
          super(parent);
          if (name == null) {
            throw new Error("Missing DTD notation name. " + this.debugInfo(name));
          }
          if (!value.pubID && !value.sysID) {
            throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.NotationDeclaration;
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
        }
        toString(options) {
          return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
        }
      }
      Object.defineProperty(XMLDTDNotation2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDTDNotation2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      return XMLDTDNotation2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocType.js
var require_XMLDocType = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject;
    ({ isObject } = require_Utility());
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    XMLDTDAttList = require_XMLDTDAttList();
    XMLDTDEntity = require_XMLDTDEntity();
    XMLDTDElement = require_XMLDTDElement();
    XMLDTDNotation = require_XMLDTDNotation();
    XMLNamedNodeMap = require_XMLNamedNodeMap();
    module.exports = XMLDocType = function() {

      class XMLDocType2 extends XMLNode {
        constructor(parent, pubID, sysID) {
          var child, i, len, ref;
          super(parent);
          this.type = NodeType.DocType;
          if (parent.children) {
            ref = parent.children;
            for (i = 0, len = ref.length;i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.Element) {
                this.name = child.name;
                break;
              }
            }
          }
          this.documentObject = parent;
          if (isObject(pubID)) {
            ({ pubID, sysID } = pubID);
          }
          if (sysID == null) {
            [sysID, pubID] = [pubID, sysID];
          }
          if (pubID != null) {
            this.pubID = this.stringify.dtdPubID(pubID);
          }
          if (sysID != null) {
            this.sysID = this.stringify.dtdSysID(sysID);
          }
        }
        element(name, value) {
          var child;
          child = new XMLDTDElement(this, name, value);
          this.children.push(child);
          return this;
        }
        attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var child;
          child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.children.push(child);
          return this;
        }
        entity(name, value) {
          var child;
          child = new XMLDTDEntity(this, false, name, value);
          this.children.push(child);
          return this;
        }
        pEntity(name, value) {
          var child;
          child = new XMLDTDEntity(this, true, name, value);
          this.children.push(child);
          return this;
        }
        notation(name, value) {
          var child;
          child = new XMLDTDNotation(this, name, value);
          this.children.push(child);
          return this;
        }
        toString(options) {
          return this.options.writer.docType(this, this.options.writer.filterOptions(options));
        }
        ele(name, value) {
          return this.element(name, value);
        }
        att(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
        }
        ent(name, value) {
          return this.entity(name, value);
        }
        pent(name, value) {
          return this.pEntity(name, value);
        }
        not(name, value) {
          return this.notation(name, value);
        }
        up() {
          return this.root() || this.documentObject;
        }
        isEqualNode(node) {
          if (!super.isEqualNode(node)) {
            return false;
          }
          if (node.name !== this.name) {
            return false;
          }
          if (node.publicId !== this.publicId) {
            return false;
          }
          if (node.systemId !== this.systemId) {
            return false;
          }
          return true;
        }
      }
      Object.defineProperty(XMLDocType2.prototype, "entities", {
        get: function() {
          var child, i, len, nodes, ref;
          nodes = {};
          ref = this.children;
          for (i = 0, len = ref.length;i < len; i++) {
            child = ref[i];
            if (child.type === NodeType.EntityDeclaration && !child.pe) {
              nodes[child.name] = child;
            }
          }
          return new XMLNamedNodeMap(nodes);
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "notations", {
        get: function() {
          var child, i, len, nodes, ref;
          nodes = {};
          ref = this.children;
          for (i = 0, len = ref.length;i < len; i++) {
            child = ref[i];
            if (child.type === NodeType.NotationDeclaration) {
              nodes[child.name] = child;
            }
          }
          return new XMLNamedNodeMap(nodes);
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "internalSubset", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      return XMLDocType2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLRaw.js
var require_XMLRaw = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLNode, XMLRaw;
    NodeType = require_NodeType();
    XMLNode = require_XMLNode();
    module.exports = XMLRaw = class XMLRaw2 extends XMLNode {
      constructor(parent, text) {
        super(parent);
        if (text == null) {
          throw new Error("Missing raw text. " + this.debugInfo());
        }
        this.type = NodeType.Raw;
        this.value = this.stringify.raw(text);
      }
      clone() {
        return Object.create(this);
      }
      toString(options) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(options));
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLText.js
var require_XMLText = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLCharacterData, XMLText;
    NodeType = require_NodeType();
    XMLCharacterData = require_XMLCharacterData();
    module.exports = XMLText = function() {

      class XMLText2 extends XMLCharacterData {
        constructor(parent, text) {
          super(parent);
          if (text == null) {
            throw new Error("Missing element text. " + this.debugInfo());
          }
          this.name = "#text";
          this.type = NodeType.Text;
          this.value = this.stringify.text(text);
        }
        clone() {
          return Object.create(this);
        }
        toString(options) {
          return this.options.writer.text(this, this.options.writer.filterOptions(options));
        }
        splitText(offset) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        replaceWholeText(content) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }
      Object.defineProperty(XMLText2.prototype, "isElementContentWhitespace", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLText2.prototype, "wholeText", {
        get: function() {
          var next, prev, str;
          str = "";
          prev = this.previousSibling;
          while (prev) {
            str = prev.data + str;
            prev = prev.previousSibling;
          }
          str += this.data;
          next = this.nextSibling;
          while (next) {
            str = str + next.data;
            next = next.nextSibling;
          }
          return str;
        }
      });
      return XMLText2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
var require_XMLProcessingInstruction = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLCharacterData, XMLProcessingInstruction;
    NodeType = require_NodeType();
    XMLCharacterData = require_XMLCharacterData();
    module.exports = XMLProcessingInstruction = class XMLProcessingInstruction2 extends XMLCharacterData {
      constructor(parent, target, value) {
        super(parent);
        if (target == null) {
          throw new Error("Missing instruction target. " + this.debugInfo());
        }
        this.type = NodeType.ProcessingInstruction;
        this.target = this.stringify.insTarget(target);
        this.name = this.target;
        if (value) {
          this.value = this.stringify.insValue(value);
        }
      }
      clone() {
        return Object.create(this);
      }
      toString(options) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
      }
      isEqualNode(node) {
        if (!super.isEqualNode(node)) {
          return false;
        }
        if (node.target !== this.target) {
          return false;
        }
        return true;
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDummy.js
var require_XMLDummy = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDummy, XMLNode;
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    module.exports = XMLDummy = class XMLDummy2 extends XMLNode {
      constructor(parent) {
        super(parent);
        this.type = NodeType.Dummy;
      }
      clone() {
        return Object.create(this);
      }
      toString(options) {
        return "";
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNodeList.js
var require_XMLNodeList = __commonJS((exports, module) => {
  (function() {
    var XMLNodeList;
    module.exports = XMLNodeList = function() {

      class XMLNodeList2 {
        constructor(nodes) {
          this.nodes = nodes;
        }
        clone() {
          return this.nodes = null;
        }
        item(index) {
          return this.nodes[index] || null;
        }
      }
      Object.defineProperty(XMLNodeList2.prototype, "length", {
        get: function() {
          return this.nodes.length || 0;
        }
      });
      return XMLNodeList2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/DocumentPosition.js
var require_DocumentPosition = __commonJS((exports, module) => {
  (function() {
    module.exports = {
      Disconnected: 1,
      Preceding: 2,
      Following: 4,
      Contains: 8,
      ContainedBy: 16,
      ImplementationSpecific: 32
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNode.js
var require_XMLNode = __commonJS((exports, module) => {
  (function() {
    var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, hasProp = {}.hasOwnProperty, splice = [].splice;
    ({ isObject, isFunction, isEmpty, getValue } = require_Utility());
    XMLElement = null;
    XMLCData = null;
    XMLComment = null;
    XMLDeclaration = null;
    XMLDocType = null;
    XMLRaw = null;
    XMLText = null;
    XMLProcessingInstruction = null;
    XMLDummy = null;
    NodeType = null;
    XMLNodeList = null;
    XMLNamedNodeMap = null;
    DocumentPosition = null;
    module.exports = XMLNode = function() {

      class XMLNode2 {
        constructor(parent1) {
          this.parent = parent1;
          if (this.parent) {
            this.options = this.parent.options;
            this.stringify = this.parent.stringify;
          }
          this.value = null;
          this.children = [];
          this.baseURI = null;
          if (!XMLElement) {
            XMLElement = require_XMLElement();
            XMLCData = require_XMLCData();
            XMLComment = require_XMLComment();
            XMLDeclaration = require_XMLDeclaration();
            XMLDocType = require_XMLDocType();
            XMLRaw = require_XMLRaw();
            XMLText = require_XMLText();
            XMLProcessingInstruction = require_XMLProcessingInstruction();
            XMLDummy = require_XMLDummy();
            NodeType = require_NodeType();
            XMLNodeList = require_XMLNodeList();
            XMLNamedNodeMap = require_XMLNamedNodeMap();
            DocumentPosition = require_DocumentPosition();
          }
        }
        setParent(parent) {
          var child, j, len, ref1, results;
          this.parent = parent;
          if (parent) {
            this.options = parent.options;
            this.stringify = parent.stringify;
          }
          ref1 = this.children;
          results = [];
          for (j = 0, len = ref1.length;j < len; j++) {
            child = ref1[j];
            results.push(child.setParent(this));
          }
          return results;
        }
        element(name, attributes, text) {
          var childNode, item, j, k, key, lastChild, len, len1, val;
          lastChild = null;
          if (attributes === null && text == null) {
            [attributes, text] = [{}, null];
          }
          if (attributes == null) {
            attributes = {};
          }
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            [text, attributes] = [attributes, text];
          }
          if (name != null) {
            name = getValue(name);
          }
          if (Array.isArray(name)) {
            for (j = 0, len = name.length;j < len; j++) {
              item = name[j];
              lastChild = this.element(item);
            }
          } else if (isFunction(name)) {
            lastChild = this.element(name.apply());
          } else if (isObject(name)) {
            for (key in name) {
              if (!hasProp.call(name, key))
                continue;
              val = name[key];
              if (isFunction(val)) {
                val = val.apply();
              }
              if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
              } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
                lastChild = this.dummy();
              } else if (isObject(val) && isEmpty(val)) {
                lastChild = this.element(key);
              } else if (!this.options.keepNullNodes && val == null) {
                lastChild = this.dummy();
              } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                for (k = 0, len1 = val.length;k < len1; k++) {
                  item = val[k];
                  childNode = {};
                  childNode[key] = item;
                  lastChild = this.element(childNode);
                }
              } else if (isObject(val)) {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                  lastChild = this.element(val);
                } else {
                  lastChild = this.element(key);
                  lastChild.element(val);
                }
              } else {
                lastChild = this.element(key, val);
              }
            }
          } else if (!this.options.keepNullNodes && text === null) {
            lastChild = this.dummy();
          } else {
            if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
              lastChild = this.text(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
              lastChild = this.cdata(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
              lastChild = this.comment(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
              lastChild = this.raw(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
              lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
            } else {
              lastChild = this.node(name, attributes, text);
            }
          }
          if (lastChild == null) {
            throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
          }
          return lastChild;
        }
        insertBefore(name, attributes, text) {
          var child, i, newChild, refChild, removed;
          if (name != null ? name.type : undefined) {
            newChild = name;
            refChild = attributes;
            newChild.setParent(this);
            if (refChild) {
              i = children.indexOf(refChild);
              removed = children.splice(i);
              children.push(newChild);
              Array.prototype.push.apply(children, removed);
            } else {
              children.push(newChild);
            }
            return newChild;
          } else {
            if (this.isRoot) {
              throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            }
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
          }
        }
        insertAfter(name, attributes, text) {
          var child, i, removed;
          if (this.isRoot) {
            throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
          }
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.element(name, attributes, text);
          Array.prototype.push.apply(this.parent.children, removed);
          return child;
        }
        remove() {
          var i, ref1;
          if (this.isRoot) {
            throw new Error("Cannot remove the root element. " + this.debugInfo());
          }
          i = this.parent.children.indexOf(this);
          splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = []));
          return this.parent;
        }
        node(name, attributes, text) {
          var child;
          if (name != null) {
            name = getValue(name);
          }
          attributes || (attributes = {});
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            [text, attributes] = [attributes, text];
          }
          child = new XMLElement(this, name, attributes);
          if (text != null) {
            child.text(text);
          }
          this.children.push(child);
          return child;
        }
        text(value) {
          var child;
          if (isObject(value)) {
            this.element(value);
          }
          child = new XMLText(this, value);
          this.children.push(child);
          return this;
        }
        cdata(value) {
          var child;
          child = new XMLCData(this, value);
          this.children.push(child);
          return this;
        }
        comment(value) {
          var child;
          child = new XMLComment(this, value);
          this.children.push(child);
          return this;
        }
        commentBefore(value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.comment(value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        }
        commentAfter(value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.comment(value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        }
        raw(value) {
          var child;
          child = new XMLRaw(this, value);
          this.children.push(child);
          return this;
        }
        dummy() {
          var child;
          child = new XMLDummy(this);
          return child;
        }
        instruction(target, value) {
          var insTarget, insValue, instruction, j, len;
          if (target != null) {
            target = getValue(target);
          }
          if (value != null) {
            value = getValue(value);
          }
          if (Array.isArray(target)) {
            for (j = 0, len = target.length;j < len; j++) {
              insTarget = target[j];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget))
                continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            instruction = new XMLProcessingInstruction(this, target, value);
            this.children.push(instruction);
          }
          return this;
        }
        instructionBefore(target, value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.instruction(target, value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        }
        instructionAfter(target, value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.instruction(target, value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        }
        declaration(version, encoding, standalone) {
          var doc, xmldec;
          doc = this.document();
          xmldec = new XMLDeclaration(doc, version, encoding, standalone);
          if (doc.children.length === 0) {
            doc.children.unshift(xmldec);
          } else if (doc.children[0].type === NodeType.Declaration) {
            doc.children[0] = xmldec;
          } else {
            doc.children.unshift(xmldec);
          }
          return doc.root() || doc;
        }
        dtd(pubID, sysID) {
          var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
          doc = this.document();
          doctype = new XMLDocType(doc, pubID, sysID);
          ref1 = doc.children;
          for (i = j = 0, len = ref1.length;j < len; i = ++j) {
            child = ref1[i];
            if (child.type === NodeType.DocType) {
              doc.children[i] = doctype;
              return doctype;
            }
          }
          ref2 = doc.children;
          for (i = k = 0, len1 = ref2.length;k < len1; i = ++k) {
            child = ref2[i];
            if (child.isRoot) {
              doc.children.splice(i, 0, doctype);
              return doctype;
            }
          }
          doc.children.push(doctype);
          return doctype;
        }
        up() {
          if (this.isRoot) {
            throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
          }
          return this.parent;
        }
        root() {
          var node;
          node = this;
          while (node) {
            if (node.type === NodeType.Document) {
              return node.rootObject;
            } else if (node.isRoot) {
              return node;
            } else {
              node = node.parent;
            }
          }
        }
        document() {
          var node;
          node = this;
          while (node) {
            if (node.type === NodeType.Document) {
              return node;
            } else {
              node = node.parent;
            }
          }
        }
        end(options) {
          return this.document().end(options);
        }
        prev() {
          var i;
          i = this.parent.children.indexOf(this);
          if (i < 1) {
            throw new Error("Already at the first node. " + this.debugInfo());
          }
          return this.parent.children[i - 1];
        }
        next() {
          var i;
          i = this.parent.children.indexOf(this);
          if (i === -1 || i === this.parent.children.length - 1) {
            throw new Error("Already at the last node. " + this.debugInfo());
          }
          return this.parent.children[i + 1];
        }
        importDocument(doc) {
          var child, clonedRoot, j, len, ref1;
          clonedRoot = doc.root().clone();
          clonedRoot.parent = this;
          clonedRoot.isRoot = false;
          this.children.push(clonedRoot);
          if (this.type === NodeType.Document) {
            clonedRoot.isRoot = true;
            clonedRoot.documentObject = this;
            this.rootObject = clonedRoot;
            if (this.children) {
              ref1 = this.children;
              for (j = 0, len = ref1.length;j < len; j++) {
                child = ref1[j];
                if (child.type === NodeType.DocType) {
                  child.name = clonedRoot.name;
                  break;
                }
              }
            }
          }
          return this;
        }
        debugInfo(name) {
          var ref1, ref2;
          name = name || this.name;
          if (name == null && !((ref1 = this.parent) != null ? ref1.name : undefined)) {
            return "";
          } else if (name == null) {
            return "parent: <" + this.parent.name + ">";
          } else if (!((ref2 = this.parent) != null ? ref2.name : undefined)) {
            return "node: <" + name + ">";
          } else {
            return "node: <" + name + ">, parent: <" + this.parent.name + ">";
          }
        }
        ele(name, attributes, text) {
          return this.element(name, attributes, text);
        }
        nod(name, attributes, text) {
          return this.node(name, attributes, text);
        }
        txt(value) {
          return this.text(value);
        }
        dat(value) {
          return this.cdata(value);
        }
        com(value) {
          return this.comment(value);
        }
        ins(target, value) {
          return this.instruction(target, value);
        }
        doc() {
          return this.document();
        }
        dec(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        }
        e(name, attributes, text) {
          return this.element(name, attributes, text);
        }
        n(name, attributes, text) {
          return this.node(name, attributes, text);
        }
        t(value) {
          return this.text(value);
        }
        d(value) {
          return this.cdata(value);
        }
        c(value) {
          return this.comment(value);
        }
        r(value) {
          return this.raw(value);
        }
        i(target, value) {
          return this.instruction(target, value);
        }
        u() {
          return this.up();
        }
        importXMLBuilder(doc) {
          return this.importDocument(doc);
        }
        attribute(name, value) {
          throw new Error("attribute() applies to element nodes only.");
        }
        att(name, value) {
          return this.attribute(name, value);
        }
        a(name, value) {
          return this.attribute(name, value);
        }
        removeAttribute(name) {
          throw new Error("attribute() applies to element nodes only.");
        }
        replaceChild(newChild, oldChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        removeChild(oldChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        appendChild(newChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        hasChildNodes() {
          return this.children.length !== 0;
        }
        cloneNode(deep) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        normalize() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        isSupported(feature, version) {
          return true;
        }
        hasAttributes() {
          return this.attribs.length !== 0;
        }
        compareDocumentPosition(other) {
          var ref, res;
          ref = this;
          if (ref === other) {
            return 0;
          } else if (this.document() !== other.document()) {
            res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
            if (Math.random() < 0.5) {
              res |= DocumentPosition.Preceding;
            } else {
              res |= DocumentPosition.Following;
            }
            return res;
          } else if (ref.isAncestor(other)) {
            return DocumentPosition.Contains | DocumentPosition.Preceding;
          } else if (ref.isDescendant(other)) {
            return DocumentPosition.Contains | DocumentPosition.Following;
          } else if (ref.isPreceding(other)) {
            return DocumentPosition.Preceding;
          } else {
            return DocumentPosition.Following;
          }
        }
        isSameNode(other) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        lookupPrefix(namespaceURI) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        isDefaultNamespace(namespaceURI) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        lookupNamespaceURI(prefix) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        isEqualNode(node) {
          var i, j, ref1;
          if (node.nodeType !== this.nodeType) {
            return false;
          }
          if (node.children.length !== this.children.length) {
            return false;
          }
          for (i = j = 0, ref1 = this.children.length - 1;0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
            if (!this.children[i].isEqualNode(node.children[i])) {
              return false;
            }
          }
          return true;
        }
        getFeature(feature, version) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        setUserData(key, data, handler) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getUserData(key) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        contains(other) {
          if (!other) {
            return false;
          }
          return other === this || this.isDescendant(other);
        }
        isDescendant(node) {
          var child, isDescendantChild, j, len, ref1;
          ref1 = this.children;
          for (j = 0, len = ref1.length;j < len; j++) {
            child = ref1[j];
            if (node === child) {
              return true;
            }
            isDescendantChild = child.isDescendant(node);
            if (isDescendantChild) {
              return true;
            }
          }
          return false;
        }
        isAncestor(node) {
          return node.isDescendant(this);
        }
        isPreceding(node) {
          var nodePos, thisPos;
          nodePos = this.treePosition(node);
          thisPos = this.treePosition(this);
          if (nodePos === -1 || thisPos === -1) {
            return false;
          } else {
            return nodePos < thisPos;
          }
        }
        isFollowing(node) {
          var nodePos, thisPos;
          nodePos = this.treePosition(node);
          thisPos = this.treePosition(this);
          if (nodePos === -1 || thisPos === -1) {
            return false;
          } else {
            return nodePos > thisPos;
          }
        }
        treePosition(node) {
          var found, pos;
          pos = 0;
          found = false;
          this.foreachTreeNode(this.document(), function(childNode) {
            pos++;
            if (!found && childNode === node) {
              return found = true;
            }
          });
          if (found) {
            return pos;
          } else {
            return -1;
          }
        }
        foreachTreeNode(node, func) {
          var child, j, len, ref1, res;
          node || (node = this.document());
          ref1 = node.children;
          for (j = 0, len = ref1.length;j < len; j++) {
            child = ref1[j];
            if (res = func(child)) {
              return res;
            } else {
              res = this.foreachTreeNode(child, func);
              if (res) {
                return res;
              }
            }
          }
        }
      }
      Object.defineProperty(XMLNode2.prototype, "nodeName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nodeValue", {
        get: function() {
          return this.value;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "parentNode", {
        get: function() {
          return this.parent;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "childNodes", {
        get: function() {
          if (!this.childNodeList || !this.childNodeList.nodes) {
            this.childNodeList = new XMLNodeList(this.children);
          }
          return this.childNodeList;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "firstChild", {
        get: function() {
          return this.children[0] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "lastChild", {
        get: function() {
          return this.children[this.children.length - 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "previousSibling", {
        get: function() {
          var i;
          i = this.parent.children.indexOf(this);
          return this.parent.children[i - 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nextSibling", {
        get: function() {
          var i;
          i = this.parent.children.indexOf(this);
          return this.parent.children[i + 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "ownerDocument", {
        get: function() {
          return this.document() || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "textContent", {
        get: function() {
          var child, j, len, ref1, str;
          if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
            str = "";
            ref1 = this.children;
            for (j = 0, len = ref1.length;j < len; j++) {
              child = ref1[j];
              if (child.textContent) {
                str += child.textContent;
              }
            }
            return str;
          } else {
            return null;
          }
        },
        set: function(value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      return XMLNode2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringifier.js
var require_XMLStringifier = __commonJS((exports, module) => {
  (function() {
    var XMLStringifier, hasProp = {}.hasOwnProperty;
    module.exports = XMLStringifier = function() {

      class XMLStringifier2 {
        constructor(options) {
          var key, ref, value;
          this.assertLegalChar = this.assertLegalChar.bind(this);
          this.assertLegalName = this.assertLegalName.bind(this);
          options || (options = {});
          this.options = options;
          if (!this.options.version) {
            this.options.version = "1.0";
          }
          ref = options.stringify || {};
          for (key in ref) {
            if (!hasProp.call(ref, key))
              continue;
            value = ref[key];
            this[key] = value;
          }
        }
        name(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalName("" + val || "");
        }
        text(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar(this.textEscape("" + val || ""));
        }
        cdata(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          val = val.replace("]]>", "]]]]><![CDATA[>");
          return this.assertLegalChar(val);
        }
        comment(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (val.match(/--/)) {
            throw new Error("Comment text cannot contain double-hypen: " + val);
          }
          return this.assertLegalChar(val);
        }
        raw(val) {
          if (this.options.noValidation) {
            return val;
          }
          return "" + val || "";
        }
        attValue(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar(this.attEscape(val = "" + val || ""));
        }
        insTarget(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        }
        insValue(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (val.match(/\?>/)) {
            throw new Error("Invalid processing instruction value: " + val);
          }
          return this.assertLegalChar(val);
        }
        xmlVersion(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (!val.match(/1\.[0-9]+/)) {
            throw new Error("Invalid version number: " + val);
          }
          return val;
        }
        xmlEncoding(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
            throw new Error("Invalid encoding: " + val);
          }
          return this.assertLegalChar(val);
        }
        xmlStandalone(val) {
          if (this.options.noValidation) {
            return val;
          }
          if (val) {
            return "yes";
          } else {
            return "no";
          }
        }
        dtdPubID(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        }
        dtdSysID(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        }
        dtdElementValue(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        }
        dtdAttType(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        }
        dtdAttDefault(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        }
        dtdEntityValue(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        }
        dtdNData(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        }
        assertLegalChar(str) {
          var regex, res;
          if (this.options.noValidation) {
            return str;
          }
          if (this.options.version === "1.0") {
            regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g;
            if (this.options.invalidCharReplacement !== undefined) {
              str = str.replace(regex, this.options.invalidCharReplacement);
            } else if (res = str.match(regex)) {
              throw new Error(`Invalid character in string: ${str} at index ${res.index}`);
            }
          } else if (this.options.version === "1.1") {
            regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g;
            if (this.options.invalidCharReplacement !== undefined) {
              str = str.replace(regex, this.options.invalidCharReplacement);
            } else if (res = str.match(regex)) {
              throw new Error(`Invalid character in string: ${str} at index ${res.index}`);
            }
          }
          return str;
        }
        assertLegalName(str) {
          var regex;
          if (this.options.noValidation) {
            return str;
          }
          str = this.assertLegalChar(str);
          regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
          if (!str.match(regex)) {
            throw new Error(`Invalid character in name: ${str}`);
          }
          return str;
        }
        textEscape(str) {
          var ampregex;
          if (this.options.noValidation) {
            return str;
          }
          ampregex = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g;
          return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
        }
        attEscape(str) {
          var ampregex;
          if (this.options.noValidation) {
            return str;
          }
          ampregex = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g;
          return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
        }
      }
      XMLStringifier2.prototype.convertAttKey = "@";
      XMLStringifier2.prototype.convertPIKey = "?";
      XMLStringifier2.prototype.convertTextKey = "#text";
      XMLStringifier2.prototype.convertCDataKey = "#cdata";
      XMLStringifier2.prototype.convertCommentKey = "#comment";
      XMLStringifier2.prototype.convertRawKey = "#raw";
      return XMLStringifier2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/WriterState.js
var require_WriterState = __commonJS((exports, module) => {
  (function() {
    module.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLWriterBase.js
var require_XMLWriterBase = __commonJS((exports, module) => {
  (function() {
    var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
    ({ assign } = require_Utility());
    NodeType = require_NodeType();
    XMLDeclaration = require_XMLDeclaration();
    XMLDocType = require_XMLDocType();
    XMLCData = require_XMLCData();
    XMLComment = require_XMLComment();
    XMLElement = require_XMLElement();
    XMLRaw = require_XMLRaw();
    XMLText = require_XMLText();
    XMLProcessingInstruction = require_XMLProcessingInstruction();
    XMLDummy = require_XMLDummy();
    XMLDTDAttList = require_XMLDTDAttList();
    XMLDTDElement = require_XMLDTDElement();
    XMLDTDEntity = require_XMLDTDEntity();
    XMLDTDNotation = require_XMLDTDNotation();
    WriterState = require_WriterState();
    module.exports = XMLWriterBase = class XMLWriterBase2 {
      constructor(options) {
        var key, ref, value;
        options || (options = {});
        this.options = options;
        ref = options.writer || {};
        for (key in ref) {
          if (!hasProp.call(ref, key))
            continue;
          value = ref[key];
          this["_" + key] = this[key];
          this[key] = value;
        }
      }
      filterOptions(options) {
        var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
        options || (options = {});
        options = assign({}, this.options, options);
        filteredOptions = {
          writer: this
        };
        filteredOptions.pretty = options.pretty || false;
        filteredOptions.allowEmpty = options.allowEmpty || false;
        filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
        filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : `
`;
        filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
        filteredOptions.width = (ref3 = options.width) != null ? ref3 : 0;
        filteredOptions.dontPrettyTextNodes = (ref4 = (ref5 = options.dontPrettyTextNodes) != null ? ref5 : options.dontprettytextnodes) != null ? ref4 : 0;
        filteredOptions.spaceBeforeSlash = (ref6 = (ref7 = options.spaceBeforeSlash) != null ? ref7 : options.spacebeforeslash) != null ? ref6 : "";
        if (filteredOptions.spaceBeforeSlash === true) {
          filteredOptions.spaceBeforeSlash = " ";
        }
        filteredOptions.suppressPrettyCount = 0;
        filteredOptions.user = {};
        filteredOptions.state = WriterState.None;
        return filteredOptions;
      }
      indent(node, options, level) {
        var indentLevel;
        if (!options.pretty || options.suppressPrettyCount) {
          return "";
        } else if (options.pretty) {
          indentLevel = (level || 0) + options.offset + 1;
          if (indentLevel > 0) {
            return new Array(indentLevel).join(options.indent);
          }
        }
        return "";
      }
      endline(node, options, level) {
        if (!options.pretty || options.suppressPrettyCount) {
          return "";
        } else {
          return options.newline;
        }
      }
      attribute(att, options, level) {
        var r;
        this.openAttribute(att, options, level);
        if (options.pretty && options.width > 0) {
          r = att.name + '="' + att.value + '"';
        } else {
          r = " " + att.name + '="' + att.value + '"';
        }
        this.closeAttribute(att, options, level);
        return r;
      }
      cdata(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<![CDATA[";
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += "]]>" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      comment(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!-- ";
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += " -->" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      declaration(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<?xml";
        options.state = WriterState.InsideTag;
        r += ' version="' + node.version + '"';
        if (node.encoding != null) {
          r += ' encoding="' + node.encoding + '"';
        }
        if (node.standalone != null) {
          r += ' standalone="' + node.standalone + '"';
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + "?>";
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      docType(node, options, level) {
        var child, i, len1, r, ref;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        r += "<!DOCTYPE " + node.root().name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.children.length > 0) {
          r += " [";
          r += this.endline(node, options, level);
          options.state = WriterState.InsideTag;
          ref = node.children;
          for (i = 0, len1 = ref.length;i < len1; i++) {
            child = ref[i];
            r += this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState.CloseTag;
          r += "]";
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">";
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      element(node, options, level) {
        var att, attLen, child, childNodeCount, firstChildNode, i, j, len, len1, len2, name, prettySuppressed, r, ratt, ref, ref1, ref2, ref3, rline;
        level || (level = 0);
        prettySuppressed = false;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<" + node.name;
        if (options.pretty && options.width > 0) {
          len = r.length;
          ref = node.attribs;
          for (name in ref) {
            if (!hasProp.call(ref, name))
              continue;
            att = ref[name];
            ratt = this.attribute(att, options, level);
            attLen = ratt.length;
            if (len + attLen > options.width) {
              rline = this.indent(node, options, level + 1) + ratt;
              r += this.endline(node, options, level) + rline;
              len = rline.length;
            } else {
              rline = " " + ratt;
              r += rline;
              len += rline.length;
            }
          }
        } else {
          ref1 = node.attribs;
          for (name in ref1) {
            if (!hasProp.call(ref1, name))
              continue;
            att = ref1[name];
            r += this.attribute(att, options, level);
          }
        }
        childNodeCount = node.children.length;
        firstChildNode = childNodeCount === 0 ? null : node.children[0];
        if (childNodeCount === 0 || node.children.every(function(e) {
          return (e.type === NodeType.Text || e.type === NodeType.Raw || e.type === NodeType.CData) && e.value === "";
        })) {
          if (options.allowEmpty) {
            r += ">";
            options.state = WriterState.CloseTag;
            r += "</" + node.name + ">" + this.endline(node, options, level);
          } else {
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
          }
        } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw || firstChildNode.type === NodeType.CData) && firstChildNode.value != null) {
          r += ">";
          options.state = WriterState.InsideTag;
          options.suppressPrettyCount++;
          prettySuppressed = true;
          r += this.writeChildNode(firstChildNode, options, level + 1);
          options.suppressPrettyCount--;
          prettySuppressed = false;
          options.state = WriterState.CloseTag;
          r += "</" + node.name + ">" + this.endline(node, options, level);
        } else {
          if (options.dontPrettyTextNodes) {
            ref2 = node.children;
            for (i = 0, len1 = ref2.length;i < len1; i++) {
              child = ref2[i];
              if ((child.type === NodeType.Text || child.type === NodeType.Raw || child.type === NodeType.CData) && child.value != null) {
                options.suppressPrettyCount++;
                prettySuppressed = true;
                break;
              }
            }
          }
          r += ">" + this.endline(node, options, level);
          options.state = WriterState.InsideTag;
          ref3 = node.children;
          for (j = 0, len2 = ref3.length;j < len2; j++) {
            child = ref3[j];
            r += this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState.CloseTag;
          r += this.indent(node, options, level) + "</" + node.name + ">";
          if (prettySuppressed) {
            options.suppressPrettyCount--;
          }
          r += this.endline(node, options, level);
          options.state = WriterState.None;
        }
        this.closeNode(node, options, level);
        return r;
      }
      writeChildNode(node, options, level) {
        switch (node.type) {
          case NodeType.CData:
            return this.cdata(node, options, level);
          case NodeType.Comment:
            return this.comment(node, options, level);
          case NodeType.Element:
            return this.element(node, options, level);
          case NodeType.Raw:
            return this.raw(node, options, level);
          case NodeType.Text:
            return this.text(node, options, level);
          case NodeType.ProcessingInstruction:
            return this.processingInstruction(node, options, level);
          case NodeType.Dummy:
            return "";
          case NodeType.Declaration:
            return this.declaration(node, options, level);
          case NodeType.DocType:
            return this.docType(node, options, level);
          case NodeType.AttributeDeclaration:
            return this.dtdAttList(node, options, level);
          case NodeType.ElementDeclaration:
            return this.dtdElement(node, options, level);
          case NodeType.EntityDeclaration:
            return this.dtdEntity(node, options, level);
          case NodeType.NotationDeclaration:
            return this.dtdNotation(node, options, level);
          default:
            throw new Error("Unknown XML node type: " + node.constructor.name);
        }
      }
      processingInstruction(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<?";
        options.state = WriterState.InsideTag;
        r += node.target;
        if (node.value) {
          r += " " + node.value;
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + "?>";
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      raw(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      text(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level);
        options.state = WriterState.InsideTag;
        r += node.value;
        options.state = WriterState.CloseTag;
        r += this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      dtdAttList(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!ATTLIST";
        options.state = WriterState.InsideTag;
        r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
        if (node.defaultValueType !== "#DEFAULT") {
          r += " " + node.defaultValueType;
        }
        if (node.defaultValue) {
          r += ' "' + node.defaultValue + '"';
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      dtdElement(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!ELEMENT";
        options.state = WriterState.InsideTag;
        r += " " + node.name + " " + node.value;
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      dtdEntity(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!ENTITY";
        options.state = WriterState.InsideTag;
        if (node.pe) {
          r += " %";
        }
        r += " " + node.name;
        if (node.value) {
          r += ' "' + node.value + '"';
        } else {
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.nData) {
            r += " NDATA " + node.nData;
          }
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      dtdNotation(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<!NOTATION";
        options.state = WriterState.InsideTag;
        r += " " + node.name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.pubID) {
          r += ' PUBLIC "' + node.pubID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        options.state = WriterState.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState.None;
        this.closeNode(node, options, level);
        return r;
      }
      openNode(node, options, level) {}
      closeNode(node, options, level) {}
      openAttribute(att, options, level) {}
      closeAttribute(att, options, level) {}
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringWriter.js
var require_XMLStringWriter = __commonJS((exports, module) => {
  (function() {
    var XMLStringWriter, XMLWriterBase;
    XMLWriterBase = require_XMLWriterBase();
    module.exports = XMLStringWriter = class XMLStringWriter2 extends XMLWriterBase {
      constructor(options) {
        super(options);
      }
      document(doc, options) {
        var child, i, len, r, ref;
        options = this.filterOptions(options);
        r = "";
        ref = doc.children;
        for (i = 0, len = ref.length;i < len; i++) {
          child = ref[i];
          r += this.writeChildNode(child, options, 0);
        }
        if (options.pretty && r.slice(-options.newline.length) === options.newline) {
          r = r.slice(0, -options.newline.length);
        }
        return r;
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocument.js
var require_XMLDocument = __commonJS((exports, module) => {
  (function() {
    var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject;
    ({ isPlainObject } = require_Utility());
    XMLDOMImplementation = require_XMLDOMImplementation();
    XMLDOMConfiguration = require_XMLDOMConfiguration();
    XMLNode = require_XMLNode();
    NodeType = require_NodeType();
    XMLStringifier = require_XMLStringifier();
    XMLStringWriter = require_XMLStringWriter();
    module.exports = XMLDocument = function() {

      class XMLDocument2 extends XMLNode {
        constructor(options) {
          super(null);
          this.name = "#document";
          this.type = NodeType.Document;
          this.documentURI = null;
          this.domConfig = new XMLDOMConfiguration;
          options || (options = {});
          if (!options.writer) {
            options.writer = new XMLStringWriter;
          }
          this.options = options;
          this.stringify = new XMLStringifier(options);
        }
        end(writer) {
          var writerOptions;
          writerOptions = {};
          if (!writer) {
            writer = this.options.writer;
          } else if (isPlainObject(writer)) {
            writerOptions = writer;
            writer = this.options.writer;
          }
          return writer.document(this, writer.filterOptions(writerOptions));
        }
        toString(options) {
          return this.options.writer.document(this, this.options.writer.filterOptions(options));
        }
        createElement(tagName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createDocumentFragment() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createTextNode(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createComment(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createCDATASection(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createProcessingInstruction(target, data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createAttribute(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createEntityReference(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagName(tagname) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        importNode(importedNode, deep) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createElementNS(namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createAttributeNS(namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByTagNameNS(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementById(elementId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        adoptNode(source) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        normalizeDocument() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        renameNode(node, namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        getElementsByClassName(classNames) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createEvent(eventInterface) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createRange() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createNodeIterator(root, whatToShow, filter) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
        createTreeWalker(root, whatToShow, filter) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      }
      Object.defineProperty(XMLDocument2.prototype, "implementation", {
        value: new XMLDOMImplementation
      });
      Object.defineProperty(XMLDocument2.prototype, "doctype", {
        get: function() {
          var child, i, len, ref;
          ref = this.children;
          for (i = 0, len = ref.length;i < len; i++) {
            child = ref[i];
            if (child.type === NodeType.DocType) {
              return child;
            }
          }
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "documentElement", {
        get: function() {
          return this.rootObject || null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "strictErrorChecking", {
        get: function() {
          return false;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlEncoding", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
            return this.children[0].encoding;
          } else {
            return null;
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlStandalone", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
            return this.children[0].standalone === "yes";
          } else {
            return false;
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlVersion", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
            return this.children[0].version;
          } else {
            return "1.0";
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "URL", {
        get: function() {
          return this.documentURI;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "origin", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "compatMode", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "characterSet", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "contentType", {
        get: function() {
          return null;
        }
      });
      return XMLDocument2;
    }.call(this);
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocumentCB.js
var require_XMLDocumentCB = __commonJS((exports, module) => {
  (function() {
    var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, hasProp = {}.hasOwnProperty;
    ({ isObject, isFunction, isPlainObject, getValue } = require_Utility());
    NodeType = require_NodeType();
    XMLDocument = require_XMLDocument();
    XMLElement = require_XMLElement();
    XMLCData = require_XMLCData();
    XMLComment = require_XMLComment();
    XMLRaw = require_XMLRaw();
    XMLText = require_XMLText();
    XMLProcessingInstruction = require_XMLProcessingInstruction();
    XMLDeclaration = require_XMLDeclaration();
    XMLDocType = require_XMLDocType();
    XMLDTDAttList = require_XMLDTDAttList();
    XMLDTDEntity = require_XMLDTDEntity();
    XMLDTDElement = require_XMLDTDElement();
    XMLDTDNotation = require_XMLDTDNotation();
    XMLAttribute = require_XMLAttribute();
    XMLStringifier = require_XMLStringifier();
    XMLStringWriter = require_XMLStringWriter();
    WriterState = require_WriterState();
    module.exports = XMLDocumentCB = class XMLDocumentCB2 {
      constructor(options, onData, onEnd) {
        var writerOptions;
        this.name = "?xml";
        this.type = NodeType.Document;
        options || (options = {});
        writerOptions = {};
        if (!options.writer) {
          options.writer = new XMLStringWriter;
        } else if (isPlainObject(options.writer)) {
          writerOptions = options.writer;
          options.writer = new XMLStringWriter;
        }
        this.options = options;
        this.writer = options.writer;
        this.writerOptions = this.writer.filterOptions(writerOptions);
        this.stringify = new XMLStringifier(options);
        this.onDataCallback = onData || function() {};
        this.onEndCallback = onEnd || function() {};
        this.currentNode = null;
        this.currentLevel = -1;
        this.openTags = {};
        this.documentStarted = false;
        this.documentCompleted = false;
        this.root = null;
      }
      createChildNode(node) {
        var att, attName, attributes, child, i, len, ref, ref1;
        switch (node.type) {
          case NodeType.CData:
            this.cdata(node.value);
            break;
          case NodeType.Comment:
            this.comment(node.value);
            break;
          case NodeType.Element:
            attributes = {};
            ref = node.attribs;
            for (attName in ref) {
              if (!hasProp.call(ref, attName))
                continue;
              att = ref[attName];
              attributes[attName] = att.value;
            }
            this.node(node.name, attributes);
            break;
          case NodeType.Dummy:
            this.dummy();
            break;
          case NodeType.Raw:
            this.raw(node.value);
            break;
          case NodeType.Text:
            this.text(node.value);
            break;
          case NodeType.ProcessingInstruction:
            this.instruction(node.target, node.value);
            break;
          default:
            throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
        }
        ref1 = node.children;
        for (i = 0, len = ref1.length;i < len; i++) {
          child = ref1[i];
          this.createChildNode(child);
          if (child.type === NodeType.Element) {
            this.up();
          }
        }
        return this;
      }
      dummy() {
        return this;
      }
      node(name, attributes, text) {
        if (name == null) {
          throw new Error("Missing node name.");
        }
        if (this.root && this.currentLevel === -1) {
          throw new Error("Document can only have one root node. " + this.debugInfo(name));
        }
        this.openCurrent();
        name = getValue(name);
        if (attributes == null) {
          attributes = {};
        }
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          [text, attributes] = [attributes, text];
        }
        this.currentNode = new XMLElement(this, name, attributes);
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        if (text != null) {
          this.text(text);
        }
        return this;
      }
      element(name, attributes, text) {
        var child, i, len, oldValidationFlag, ref, root;
        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          this.dtdElement(...arguments);
        } else {
          if (Array.isArray(name) || isObject(name) || isFunction(name)) {
            oldValidationFlag = this.options.noValidation;
            this.options.noValidation = true;
            root = new XMLDocument(this.options).element("TEMP_ROOT");
            root.element(name);
            this.options.noValidation = oldValidationFlag;
            ref = root.children;
            for (i = 0, len = ref.length;i < len; i++) {
              child = ref[i];
              this.createChildNode(child);
              if (child.type === NodeType.Element) {
                this.up();
              }
            }
          } else {
            this.node(name, attributes, text);
          }
        }
        return this;
      }
      attribute(name, value) {
        var attName, attValue;
        if (!this.currentNode || this.currentNode.children) {
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
        }
        if (name != null) {
          name = getValue(name);
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName))
              continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (this.options.keepNullAttributes && value == null) {
            this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
          } else if (value != null) {
            this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
          }
        }
        return this;
      }
      text(value) {
        var node;
        this.openCurrent();
        node = new XMLText(this, value);
        this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      cdata(value) {
        var node;
        this.openCurrent();
        node = new XMLCData(this, value);
        this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      comment(value) {
        var node;
        this.openCurrent();
        node = new XMLComment(this, value);
        this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      raw(value) {
        var node;
        this.openCurrent();
        node = new XMLRaw(this, value);
        this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      instruction(target, value) {
        var i, insTarget, insValue, len, node;
        this.openCurrent();
        if (target != null) {
          target = getValue(target);
        }
        if (value != null) {
          value = getValue(value);
        }
        if (Array.isArray(target)) {
          for (i = 0, len = target.length;i < len; i++) {
            insTarget = target[i];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget))
              continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          node = new XMLProcessingInstruction(this, target, value);
          this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        }
        return this;
      }
      declaration(version, encoding, standalone) {
        var node;
        this.openCurrent();
        if (this.documentStarted) {
          throw new Error("declaration() must be the first node.");
        }
        node = new XMLDeclaration(this, version, encoding, standalone);
        this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      doctype(root, pubID, sysID) {
        this.openCurrent();
        if (root == null) {
          throw new Error("Missing root node name.");
        }
        if (this.root) {
          throw new Error("dtd() must come before the root node.");
        }
        this.currentNode = new XMLDocType(this, pubID, sysID);
        this.currentNode.rootNodeName = root;
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        return this;
      }
      dtdElement(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDElement(this, name, value);
        this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var node;
        this.openCurrent();
        node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      entity(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity(this, false, name, value);
        this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      pEntity(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity(this, true, name, value);
        this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      notation(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDNotation(this, name, value);
        this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      }
      up() {
        if (this.currentLevel < 0) {
          throw new Error("The document node has no parent.");
        }
        if (this.currentNode) {
          if (this.currentNode.children) {
            this.closeNode(this.currentNode);
          } else {
            this.openNode(this.currentNode);
          }
          this.currentNode = null;
        } else {
          this.closeNode(this.openTags[this.currentLevel]);
        }
        delete this.openTags[this.currentLevel];
        this.currentLevel--;
        return this;
      }
      end() {
        while (this.currentLevel >= 0) {
          this.up();
        }
        return this.onEnd();
      }
      openCurrent() {
        if (this.currentNode) {
          this.currentNode.children = true;
          return this.openNode(this.currentNode);
        }
      }
      openNode(node) {
        var att, chunk, name, ref;
        if (!node.isOpen) {
          if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
            this.root = node;
          }
          chunk = "";
          if (node.type === NodeType.Element) {
            this.writerOptions.state = WriterState.OpenTag;
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
            ref = node.attribs;
            for (name in ref) {
              if (!hasProp.call(ref, name))
                continue;
              att = ref[name];
              chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
            }
            chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
            this.writerOptions.state = WriterState.InsideTag;
          } else {
            this.writerOptions.state = WriterState.OpenTag;
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
            if (node.pubID && node.sysID) {
              chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              chunk += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.children) {
              chunk += " [";
              this.writerOptions.state = WriterState.InsideTag;
            } else {
              this.writerOptions.state = WriterState.CloseTag;
              chunk += ">";
            }
            chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
          }
          this.onData(chunk, this.currentLevel);
          return node.isOpen = true;
        }
      }
      closeNode(node) {
        var chunk;
        if (!node.isClosed) {
          chunk = "";
          this.writerOptions.state = WriterState.CloseTag;
          if (node.type === NodeType.Element) {
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
          } else {
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
          }
          this.writerOptions.state = WriterState.None;
          this.onData(chunk, this.currentLevel);
          return node.isClosed = true;
        }
      }
      onData(chunk, level) {
        this.documentStarted = true;
        return this.onDataCallback(chunk, level + 1);
      }
      onEnd() {
        this.documentCompleted = true;
        return this.onEndCallback();
      }
      debugInfo(name) {
        if (name == null) {
          return "";
        } else {
          return "node: <" + name + ">";
        }
      }
      ele() {
        return this.element(...arguments);
      }
      nod(name, attributes, text) {
        return this.node(name, attributes, text);
      }
      txt(value) {
        return this.text(value);
      }
      dat(value) {
        return this.cdata(value);
      }
      com(value) {
        return this.comment(value);
      }
      ins(target, value) {
        return this.instruction(target, value);
      }
      dec(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      }
      dtd(root, pubID, sysID) {
        return this.doctype(root, pubID, sysID);
      }
      e(name, attributes, text) {
        return this.element(name, attributes, text);
      }
      n(name, attributes, text) {
        return this.node(name, attributes, text);
      }
      t(value) {
        return this.text(value);
      }
      d(value) {
        return this.cdata(value);
      }
      c(value) {
        return this.comment(value);
      }
      r(value) {
        return this.raw(value);
      }
      i(target, value) {
        return this.instruction(target, value);
      }
      att() {
        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          return this.attList(...arguments);
        } else {
          return this.attribute(...arguments);
        }
      }
      a() {
        if (this.currentNode && this.currentNode.type === NodeType.DocType) {
          return this.attList(...arguments);
        } else {
          return this.attribute(...arguments);
        }
      }
      ent(name, value) {
        return this.entity(name, value);
      }
      pent(name, value) {
        return this.pEntity(name, value);
      }
      not(name, value) {
        return this.notation(name, value);
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStreamWriter.js
var require_XMLStreamWriter = __commonJS((exports, module) => {
  (function() {
    var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, hasProp = {}.hasOwnProperty;
    NodeType = require_NodeType();
    XMLWriterBase = require_XMLWriterBase();
    WriterState = require_WriterState();
    module.exports = XMLStreamWriter = class XMLStreamWriter2 extends XMLWriterBase {
      constructor(stream, options) {
        super(options);
        this.stream = stream;
      }
      endline(node, options, level) {
        if (node.isLastRootNode && options.state === WriterState.CloseTag) {
          return "";
        } else {
          return super.endline(node, options, level);
        }
      }
      document(doc, options) {
        var child, i, j, k, len1, len2, ref, ref1, results;
        ref = doc.children;
        for (i = j = 0, len1 = ref.length;j < len1; i = ++j) {
          child = ref[i];
          child.isLastRootNode = i === doc.children.length - 1;
        }
        options = this.filterOptions(options);
        ref1 = doc.children;
        results = [];
        for (k = 0, len2 = ref1.length;k < len2; k++) {
          child = ref1[k];
          results.push(this.writeChildNode(child, options, 0));
        }
        return results;
      }
      cdata(node, options, level) {
        return this.stream.write(super.cdata(node, options, level));
      }
      comment(node, options, level) {
        return this.stream.write(super.comment(node, options, level));
      }
      declaration(node, options, level) {
        return this.stream.write(super.declaration(node, options, level));
      }
      docType(node, options, level) {
        var child, j, len1, ref;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        this.stream.write(this.indent(node, options, level));
        this.stream.write("<!DOCTYPE " + node.root().name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        if (node.children.length > 0) {
          this.stream.write(" [");
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.InsideTag;
          ref = node.children;
          for (j = 0, len1 = ref.length;j < len1; j++) {
            child = ref[j];
            this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState.CloseTag;
          this.stream.write("]");
        }
        options.state = WriterState.CloseTag;
        this.stream.write(options.spaceBeforeSlash + ">");
        this.stream.write(this.endline(node, options, level));
        options.state = WriterState.None;
        return this.closeNode(node, options, level);
      }
      element(node, options, level) {
        var att, attLen, child, childNodeCount, firstChildNode, j, len, len1, name, prettySuppressed, r, ratt, ref, ref1, ref2, rline;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState.OpenTag;
        r = this.indent(node, options, level) + "<" + node.name;
        if (options.pretty && options.width > 0) {
          len = r.length;
          ref = node.attribs;
          for (name in ref) {
            if (!hasProp.call(ref, name))
              continue;
            att = ref[name];
            ratt = this.attribute(att, options, level);
            attLen = ratt.length;
            if (len + attLen > options.width) {
              rline = this.indent(node, options, level + 1) + ratt;
              r += this.endline(node, options, level) + rline;
              len = rline.length;
            } else {
              rline = " " + ratt;
              r += rline;
              len += rline.length;
            }
          }
        } else {
          ref1 = node.attribs;
          for (name in ref1) {
            if (!hasProp.call(ref1, name))
              continue;
            att = ref1[name];
            r += this.attribute(att, options, level);
          }
        }
        this.stream.write(r);
        childNodeCount = node.children.length;
        firstChildNode = childNodeCount === 0 ? null : node.children[0];
        if (childNodeCount === 0 || node.children.every(function(e) {
          return (e.type === NodeType.Text || e.type === NodeType.Raw || e.type === NodeType.CData) && e.value === "";
        })) {
          if (options.allowEmpty) {
            this.stream.write(">");
            options.state = WriterState.CloseTag;
            this.stream.write("</" + node.name + ">");
          } else {
            options.state = WriterState.CloseTag;
            this.stream.write(options.spaceBeforeSlash + "/>");
          }
        } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw || firstChildNode.type === NodeType.CData) && firstChildNode.value != null) {
          this.stream.write(">");
          options.state = WriterState.InsideTag;
          options.suppressPrettyCount++;
          prettySuppressed = true;
          this.writeChildNode(firstChildNode, options, level + 1);
          options.suppressPrettyCount--;
          prettySuppressed = false;
          options.state = WriterState.CloseTag;
          this.stream.write("</" + node.name + ">");
        } else {
          this.stream.write(">" + this.endline(node, options, level));
          options.state = WriterState.InsideTag;
          ref2 = node.children;
          for (j = 0, len1 = ref2.length;j < len1; j++) {
            child = ref2[j];
            this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState.CloseTag;
          this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
        }
        this.stream.write(this.endline(node, options, level));
        options.state = WriterState.None;
        return this.closeNode(node, options, level);
      }
      processingInstruction(node, options, level) {
        return this.stream.write(super.processingInstruction(node, options, level));
      }
      raw(node, options, level) {
        return this.stream.write(super.raw(node, options, level));
      }
      text(node, options, level) {
        return this.stream.write(super.text(node, options, level));
      }
      dtdAttList(node, options, level) {
        return this.stream.write(super.dtdAttList(node, options, level));
      }
      dtdElement(node, options, level) {
        return this.stream.write(super.dtdElement(node, options, level));
      }
      dtdEntity(node, options, level) {
        return this.stream.write(super.dtdEntity(node, options, level));
      }
      dtdNotation(node, options, level) {
        return this.stream.write(super.dtdNotation(node, options, level));
      }
    };
  }).call(exports);
});

// node_modules/.bun/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/index.js
var require_lib2 = __commonJS((exports, module) => {
  (function() {
    var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction;
    ({ assign, isFunction } = require_Utility());
    XMLDOMImplementation = require_XMLDOMImplementation();
    XMLDocument = require_XMLDocument();
    XMLDocumentCB = require_XMLDocumentCB();
    XMLStringWriter = require_XMLStringWriter();
    XMLStreamWriter = require_XMLStreamWriter();
    NodeType = require_NodeType();
    WriterState = require_WriterState();
    exports.create = function(name, xmldec, doctype, options) {
      var doc, root;
      if (name == null) {
        throw new Error("Root element needs a name.");
      }
      options = assign({}, xmldec, doctype, options);
      doc = new XMLDocument(options);
      root = doc.element(name);
      if (!options.headless) {
        doc.declaration(options);
        if (options.pubID != null || options.sysID != null) {
          doc.dtd(options);
        }
      }
      return root;
    };
    exports.begin = function(options, onData, onEnd) {
      if (isFunction(options)) {
        [onData, onEnd] = [options, onData];
        options = {};
      }
      if (onData) {
        return new XMLDocumentCB(options, onData, onEnd);
      } else {
        return new XMLDocument(options);
      }
    };
    exports.stringWriter = function(options) {
      return new XMLStringWriter(options);
    };
    exports.streamWriter = function(stream, options) {
      return new XMLStreamWriter(stream, options);
    };
    exports.implementation = new XMLDOMImplementation;
    exports.nodeType = NodeType;
    exports.writerState = WriterState;
  }).call(exports);
});

// node_modules/.bun/plist@3.1.0/node_modules/plist/lib/build.js
var require_build = __commonJS((exports) => {
  var base64 = require_base64_js();
  var xmlbuilder = require_lib2();
  exports.build = build;
  function ISODateString(d) {
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "Z";
  }
  var toString = Object.prototype.toString;
  function type(obj) {
    var m = toString.call(obj).match(/\[object (.*)\]/);
    return m ? m[1] : m;
  }
  function build(obj, opts) {
    var XMLHDR = {
      version: "1.0",
      encoding: "UTF-8"
    };
    var XMLDTD = {
      pubid: "-//Apple//DTD PLIST 1.0//EN",
      sysid: "http://www.apple.com/DTDs/PropertyList-1.0.dtd"
    };
    var doc = xmlbuilder.create("plist");
    doc.dec(XMLHDR.version, XMLHDR.encoding, XMLHDR.standalone);
    doc.dtd(XMLDTD.pubid, XMLDTD.sysid);
    doc.att("version", "1.0");
    walk_obj(obj, doc);
    if (!opts)
      opts = {};
    opts.pretty = opts.pretty !== false;
    return doc.end(opts);
  }
  function walk_obj(next, next_child) {
    var tag_type, i, prop;
    var name = type(next);
    if (name == "Undefined") {
      return;
    } else if (Array.isArray(next)) {
      next_child = next_child.ele("array");
      for (i = 0;i < next.length; i++) {
        walk_obj(next[i], next_child);
      }
    } else if (Buffer.isBuffer(next)) {
      next_child.ele("data").raw(next.toString("base64"));
    } else if (name == "Object") {
      next_child = next_child.ele("dict");
      for (prop in next) {
        if (next.hasOwnProperty(prop)) {
          next_child.ele("key").txt(prop);
          walk_obj(next[prop], next_child);
        }
      }
    } else if (name == "Number") {
      tag_type = next % 1 === 0 ? "integer" : "real";
      next_child.ele(tag_type).txt(next.toString());
    } else if (name == "BigInt") {
      next_child.ele("integer").txt(next);
    } else if (name == "Date") {
      next_child.ele("date").txt(ISODateString(new Date(next)));
    } else if (name == "Boolean") {
      next_child.ele(next ? "true" : "false");
    } else if (name == "String") {
      next_child.ele("string").txt(next);
    } else if (name == "ArrayBuffer") {
      next_child.ele("data").raw(base64.fromByteArray(next));
    } else if (next && next.buffer && type(next.buffer) == "ArrayBuffer") {
      next_child.ele("data").raw(base64.fromByteArray(new Uint8Array(next.buffer), next_child));
    } else if (name === "Null") {
      next_child.ele("null").txt("");
    }
  }
});

// node_modules/.bun/plist@3.1.0/node_modules/plist/index.js
var require_plist = __commonJS((exports) => {
  var parserFunctions = require_parse();
  Object.keys(parserFunctions).forEach(function(k) {
    exports[k] = parserFunctions[k];
  });
  var builderFunctions = require_build();
  Object.keys(builderFunctions).forEach(function(k) {
    exports[k] = builderFunctions[k];
  });
});
export default require_plist();
