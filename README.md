# JavaScript Uri
Simple URI tool, for parsing and edit URI,s

## Basic Usage

```javascript
var uriString = 'https://github.com/hard-core/js-uri/blob/master/README.md',
    uriObject = Uri.parse(uriString);
    
console.log("URI BEFORE: %s", uriObject);

uriObject.scheme = 'ftp'; 
uriObject.path = '';

console.log("URI AFTER: %s", uriObject);
```
### Object properties
* scheme
* authority
* path
* query
* fragment
The object does not have mandatory properties, any combination of values will give a valid URI at the output.

------------------------------------------------
WARNING!!! Setters do not have validators and filters. Any value can be assigned.
------------------------------------------------
