/*!
 * Add Props (v1.1.2.20180211), http://tpkn.me/
 */

function addProps(obj, props, values){
   if(typeof obj !== 'object'){
      props = obj;
      if(typeof values !== 'undefined'){
         values = props;
      }
      obj = {};
   }

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

   if(!Array.isArray(props) && typeof props !== 'string'){
      console.log('Property is not a string or array!');
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
