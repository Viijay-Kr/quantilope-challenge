## Quantilope Coding Challenge

I would like to write down some key points about the coding challenge solution . This doc will include the tech stack used,project structure, implementation approach, step to run the application and some improvements which I would like to do

### Tech Stack

- `Typescript`
- `React`
- `CSS Grid`
- `React hooks`
- `CSS animations`
- `react-testing-library`

### Project set up

- CRA - `create-react-app` is used for initial project set up
- Atomic Design - followed atomic design patterns for organizing components

### Implementation details

- Followed Test driven approach
- Added some basic component tests using `react-testing-library`
- Used `react-hooks` to manage state and actions
- Used css grids for the question matrix layout
- Used basic css3 animations
- Used `craco` package to rewire the application for jest and tsconfig path resolutions

### How To

- run `yarn` to install the packages
- run `yarn start` to start the application
- run `yarn test` to run tests

### Improvements

- Scrollable grid for better UX
- Responsive design for smaller devices
- Refactor grid layout to avoid some absolutely positioned elements(add row ,add column buttons).
- Better animation of the cells
- Reusable styled components
