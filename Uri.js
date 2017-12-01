/**
 *
 * Simple URI tool, for parsing & edit URI,s
 *
 * @param {string} uriString
 * @constructor
 *
 * @property {string} scheme
 * @property {string} authority
 * @property {string} path
 * @property {string} query
 * @property {string} fragment
 */
function Uri(uriString) {
    if (this.constructor !== Uri)
        throw Error('Invalid URI');

    var instance = this,
        pattern  = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/i,
        matches  = pattern.exec(uriString);

    /**
     * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
     *  12            3  4          5       6  7        8 9
     *
     * Therefore, we can determine the value of the five components as
     *   scheme    = $2
     *   authority = $4
     *   path      = $5
     *   query     = $7
     *   fragment  = $9
     *
     * @type {{sheme: string | null, authority: string | null, path: string | null, query: string | null, fragment: string | null}}
     */
    var components = {
        sheme: matches[2] || null,
        authority: matches[4] || null,
        path: matches[5] || null,
        query: matches[7] || null,
        fragment: matches[9] || null
    };


    // GETTERS & SETTERS //
    Object.defineProperties(instance, {
        scheme: {
            get:function() { return components.sheme; },
            set:function(value) { components.sheme = value.toString() || null; },
            enumerable: true
        },
        authority: {
            get:function() { return components.authority; },
            set:function(value) { components.authority = value.toString() || null; },
            enumerable: true
        },
        path: {
            get:function() { return components.path; },
            set:function(value) { components.path = value.toString() || null; },
            enumerable: true
        },
        query: {
            get:function() { return components.query; },
            set:function(value) { components.query = value.toString() || null; },
            enumerable: true
        },
        fragment: {
            get:function() { return components.fragment; },
            set:function(value) { components.fragment = value.toString() || null; },
            enumerable: true
        }
    });


    // BUILDING //
    Object.defineProperty(instance, 'toString', {
        value: function () {
            return '' +
                (instance.scheme ? instance.scheme + ':' : '')+
                (instance.authority ? '//' + instance.authority : '')+
                (instance.path || '')+
                (instance.query ? '?' + instance.query : '')+
                (instance.fragment ? '#' + instance.fragment : '');
        }
    })
}

module.exports = Uri;