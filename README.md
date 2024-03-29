# Add Props [![npm Package](https://img.shields.io/npm/v/add-props.svg)](https://www.npmjs.org/package/add-props)
Easiest way to add props and values to the object


## Installation
```bash
npm install add-props
```



## Usage
```javascript
const addProps = require('add-props');


var myObject = {};

// Just create properties structure
addProps(myObject, 'click.url');

/*{
   "click": {
      "url": {}
   }
}*/


// Add value to the property
addProps(myObject, 'events.tracker.pixel.url', 12346789);

/*{
   "events": {
      "tracker": {
         "pixel": {
            "url": 12346789
         }
      }
   }
}*/


// Create multiple properties and fill them with the same value
addProps(myObject, ['stat.user_id', 'html.footer.block_id'], 'id123456789');

/*{
   "stat": {
      "user_id": "id123456789"
   },
   "html": {
      "footer": {
         "block_id": "id123456789"
      }
   }
}*/


// Create multiple properties with own values
addProps(myObject, ['video.duration', 'audio.sound.muted'], [120.459, true]);

/*{
   "video": {
      "duration": 120.459
   },
   "audio": {
      "sound": {
         "muted": true
      }
   }
}*/


console.log(JSON.stringify(myObject, true, 3));
```


Also you can create new object with specified props. Just skip the first argument like so:
```javascript
var new_object = addProps('new.object.says', 'yey!');
```
