/*!
 * Add Props (v1.1.2.20180211), http://tpkn.me/
 */

function addProps(obj, props, values){
   var check = function(p, level, list, val){
      if(!Object.prototype.hasOwnProperty.call(level, p)){
         level[p] = {};
      }
      if(typeof val !== 'undefined' && val != null && list.length == 0){
         level[p] = val;
      }
   }

   var loop = function(level, list, val){
      if(list.length){
         var p = list.shift();

         // Check if it's regular_property_Name (accessible through dot). Skip further steps if it's not
         if(!/(\W|^[\d\s]+$)/i.test(p)){
            check(p, level, list, val);
         }else{
            return;
         }

         loop(level[p], list, val);
      }
   }

   if(Object.prototype.toString.call(obj) != '[object Object]'){
      values = props;
      props = obj;
      obj = {};
   }

   if(!Array.isArray(props) && typeof props !== 'string'){
      return {};
   }

   if(Array.isArray(props)){
      for(var i = 0, len = props.length; i < len; i++){
         loop(obj, String(props[i]).split('.'), Array.isArray(values) ? values[i] : values);
      }
   }else{
      loop(obj, String(props).split('.'), values);
   }

   return obj;
}


if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
   module.exports = addProps;
}else{
   if(typeof define === 'function' && define.amd){
      define([], function(){
         return addProps;
      });
   }
}
