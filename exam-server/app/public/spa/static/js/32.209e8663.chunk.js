(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{650:function(n,t,e){"use strict";e.d(t,"g",function(){return a}),e.d(t,"j",function(){return o}),e.d(t,"h",function(){return u}),e.d(t,"a",function(){return c}),e.d(t,"c",function(){return d}),e.d(t,"f",function(){return i}),e.d(t,"b",function(){return f}),e.d(t,"d",function(){return s}),e.d(t,"i",function(){return m}),e.d(t,"k",function(){return l}),e.d(t,"e",function(){return p});var r=e(9),a=function(){return Object(r.a)("/manger/grade")},o=function(){return Object(r.a)("/manger/grade/new")},u=function(){return Object(r.a)("/manger/room")},c=function(n){return Object(r.a)("/manger/grade",{method:"POST",body:n})},d=function(n){return Object(r.a)("/manger/grade/delete",{method:"DELETE",body:n})},i=function(n){return Object(r.a)("/manger/grade/update",{method:"PUT",body:n})},f=function(n){return Object(r.a)("/manger/room",{method:"POST",body:n})},s=function(n){return Object(r.a)("/manger/room/delete",{method:"DELETE",body:n})},m=function(){return Object(r.a)("/manger/student")},l=function(){return Object(r.a)("/manger/student/new")},p=function(n){var t=n.student_id;return Object(r.a)("/manger/student/".concat(t),{method:"DELETE"})}},864:function(n,t,e){"use strict";e.r(t);var r=e(15),a=e(93),o=e.n(a),u=e(650);t.default={namespace:"room",state:{allRoom:[]},effects:{getAllRoom:o.a.mark(function n(t,e){var r,a,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.put,a=e.call,n.next=3,a(u.h);case 3:return c=n.sent,n.next=6,r({type:"saveAllRoom",payload:c.data.filter(function(n){return"null"!==n.room_text})});case 6:case"end":return n.stop()}},n,this)}),addRoom:o.a.mark(function n(t,e){var r,a,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.payload,a=e.put,c=e.call,n.next=4,c(u.b,r);case 4:return n.next=6,a({type:"getAllRoom"});case 6:case"end":return n.stop()}},n,this)}),delRoom:o.a.mark(function n(t,e){var r,a,c;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.payload,a=e.put,c=e.call,n.next=4,c(u.d,r);case 4:return n.next=6,a({type:"getAllRoom"});case 6:case"end":return n.stop()}},n,this)})},reducers:{saveAllRoom:function(n,t){var e=t.payload;return Object(r.a)({},n,{allRoom:e})}}}}}]);
//# sourceMappingURL=32.209e8663.chunk.js.map