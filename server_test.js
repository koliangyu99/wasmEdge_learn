import { readFile } from 'fs';

readFile('./index.html', (err, data) => {
  if (err) {
    print("❌ Cannot read index.html:", err.message);
  } else {
    print("✅ index.html loaded successfully");
    print(data.toString());
  }
});