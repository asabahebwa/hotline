# React + TypeScript + Vite

![gif](https://github.com/asabahebwa/hotline/blob/master/src/assets/hotline.gif)

Sometimes, even if you think your relationship is healthy, it can hide signs of abuse from one of the partners. This app will help you identify signs of abuse and offer resources on what you can do next.

This app was built with a mobile-first approach. **TypeScript** was chosen for its ability to catch errors early and improve code maintainability. With static typing, it helps prevent bugs, improves developer productivity through better autocompletion and refactoring, and makes the codebase more scalable—especially useful in team projects.

**Tailwind CSS** provides utility-first styling that speeds up development and keeps styling consistent. It avoids writing custom CSS for common patterns, which helps reduce bloat and makes the UI easier to maintain and customize responsively.

I retrieved skip data from the API using built-in fetch.

## Running the app locally

You need to clone the repo, navigate to the root folder and run `npm install` to intall dependencies. To see the app locally in your browser, run `npm run dev`

## Testing

I added unit tests using **React Testing Library** and **Jest**. Use `npm run test` to run unit tests normally in the terminal. To run unit tests in watch mode, run `npm run test:watch`, to see the code coverage, you need to run `npm run test:coverage`.
I used **React Testing Library** because it encourages testing components in a way that reflects how users actually interact with the app. It focuses on testing UI behavior rather than implementation details, which leads to more robust, maintainable tests that are less likely to break with refactors.

**Jest** was chosen as the test runner and assertion library because it's fast, easy to configure with React, and has built-in features like mocking and code coverage. It integrates seamlessly with React Testing Library and provides a solid foundation for writing both unit and integration tests.

Together, they offer a modern, developer-friendly setup for writing reliable front-end tests.
![test coverage](https://github.com/asabahebwa/hotline/blob/master/src/assets/img/hc.png)
