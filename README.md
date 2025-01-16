# Expo Image Component - Intermittent Loading Failure

This repository demonstrates a bug where the Expo `Image` component intermittently fails to load images when the URI contains special characters (e.g., spaces, accented characters). The image simply won't display; no errors are logged to the console. The behavior is inconsistent, potentially related to network conditions or other factors.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run the app (e.g., `expo start`).
4. Observe that the image with special characters may or may not load correctly. Refreshing the app might change the result.

## Potential Solutions (Workarounds)

* **URL Encoding:** Encode the URI using `encodeURIComponent()` before passing it to the `Image` component. This is the recommended solution.
* **Alternative Libraries:** Consider using alternative image loading libraries such as `react-native-fast-image`.

This issue highlights a potential gap in error handling in the Expo `Image` component.  More robust error handling would significantly aid debugging such issues.