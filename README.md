# RNEnterpriseBoilerplate

React Native enterprise starter project with TypeScript, native iOS and Android
projects, Jest, ESLint, Prettier, and safe-area handling already wired in.

## Prerequisites

- Node.js `>=22.11.0`
- npm
- Ruby and Bundler for iOS dependency management
- Xcode for iOS development
- Android Studio and an Android SDK for Android development

Follow the official React Native environment setup guide for platform-specific
tooling before running the app.

## Setup

Install JavaScript dependencies:

```sh
npm install
```

Install iOS dependencies:

```sh
bundle install
bundle exec pod install --project-directory=ios
```

## Development

Start Metro:

```sh
npm start
```

Run the app:

```sh
npm run ios
npm run android
```

## Quality Checks

Run the checks used for the baseline project:

```sh
npm run lint
npm run typecheck
npm test
```

## Project Structure

- `App.tsx` - application entry component
- `index.js` - React Native runtime registration
- `android/` - Android native project
- `ios/` - iOS native project
- `__tests__/` - Jest tests

## Notes

Keep generated build artifacts, local native settings, and installed dependencies
out of version control. The current `.gitignore` covers the standard React
Native, CocoaPods, Android, Xcode, and Node outputs.
