This solution uses `encodeURIComponent()` to properly URL-encode the image URI.

```javascript
// bugSolution.js
import React from 'react';
import { Image } from 'expo-image';

export default function App() {
  const imageUri = 'https://example.com/image%20with%20spaces.jpg'; //Example URI with spaces
  const encodedUri = encodeURIComponent(imageUri);
  return (
    <Image
      source={{ uri: encodedUri }}
      style={{ width: 200, height: 200 }}
    />
  );
}
```

The `encodeURIComponent()` function converts the URI into a format that is safe to use in URLs. This ensures that special characters are correctly handled, preventing the intermittent loading failure.