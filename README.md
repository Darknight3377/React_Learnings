<!-- This is a readme file --> 

# Parcel (Day 2)
- parcel is bundler to bundle project, 
- ^means any minor version it can upgrade,
- ~ means any next major version it can install
- lock file keeps exact lcoked version which is installed
- keeps a track of all the version of all the packages , has a hash of version 

- npx parcel index.html builds the index html & host the build to localhost 1234 

- Dev build
- local server
- HMR (Hot module replacement)
- parcel is using file wathcing algorithm
- it does caching - faster build
- Image optimization
- bundle & minify files, compress files to keep production ready
- consistent hashing
- code splitting
- differential bundling ( to support older browsers, apps)
- diagnostics (for better error handling)
- tree shaking (remove unused code)
- more at parceljs.org
- different dev & prod builds

# Swiggy APP planning (Day 4)
- Logo inside Header , Links, Home, Contact
- Body
    - Search
    - Restaurant container
        - Cards
- Footer copyright etc

- config driven UI
    - based on config from api data, UI will change


# Export/import types
- Default export: export default Header
    - Imported like : import Header
- Named export: export const ABC;
    - Imported like: import {ABC}

# React hooks
- React utility js functions with some powerful features
- useState is used to create local state variables of a component dont use usestate outside body of component
- re renders the whole component when its state variable changes /trigger reconciliation cycle
- and only updates the change in virtual dom
- useEffect's callback function is called after component renders (after every time the component render) if no dependency array
- if dependency array is empty, useEffect is called on initial render (only once)
- if a variable is there in dependency array, every time variable changes useeffect gets called

# Reconciliation algorithm (also known as react fiber) from react 16
- whenever UI changes, react creates a virtual dom (representation of actual dom)
- this virtual dom a is react element object. //console.log(<Body/>)
- this works on diff algorithm ( compare & find difference between 2 state objects of virtual dom)
- updates the dom with new changes, so react is fast because it does efficient rendering.

# Monolith
- Huge application -> UI code, backend code, api code, authentication code, db code, all in one project. any small change needed to compile whole big project.

# Microservices
- different services/app combines to create a big app (known as separation of projects)
- BE, UI, Auth, Messaging services (no single tech stack)
- talk to each other ( each service are running on diff ports and each app hit other needed app endpoints/ports)

# React api integration
- UI loads -> render page -> api call -> re render page

# 2types of routing
- Client side routing (When I load the app, all the routes have corresponding pages ), single page application
- server side routing( when I hit /about, it will hit server and fetch about us page and reload the app)

# component lifecycle
- First parent constructor will be called, then parent render , if any child class is there in render, its constructor will be called, then child render, then child's component did mount and at last parent component did mount
- we use component did mount to call apis
- in case of multiple childs, childs constructor & render will be called, then both childs component did mount will be called, then parent did mount. React optimises by batching render phase of child components
- more at : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
-If we have a set interval in component did mount, it will be called always when this component mounts. Even if we go to other component, it is not cleared and keep on running which will bring down application performance. we need to clear these in component will unmount.
- for function based components, useffct has a return call back method, where we can do clean up.

# Optimizing
- Bundling/Chunking/code splitting/ on demand rendering
- all done through lazy loading provided by react
- help build our apps into multiple chunks, faster build & render

# tailwind
- postcssrc tells parcel the way tailwind is written in the project

# Higher order component
- is a component that Takes a component & return a component(modified/enhanced)
- these are pure components, means we are not changing directly in current component, we are adding on top of it.

# controlled vs uncontrolled component
- if a component behaviour is dependent/controlled by other component it is known as controlled component. Here we are showing Restaurant category by sending true/false from Restaurantmenu component. So restaurant category is controlled component. Else component is uncontrolled.

# lifting state up
- whenever a state needs to be shared with siblings. We lift the state up to the closest common ancestor to make it sole source of truth. In our project example is accordion expand from restarurant category(child) to restaurent menu(parent).
- learn more at react dev lifitng state up

# props drilling
- passing props to multiple hierarchy
- Context api is solution for props drilling (data that can be used at multiple places)
- setting value in context using context provider and set value to this context
- what will be output of if set context provider at whole app level, then setting context provider at just header level?
- all places will be app level, header will be showing header level value
- we can also pass a setter function for updating context api value in usecontext
- Global scope updated by context api, lazy loaded components also get updated value from context api, even though the component is not loaded, when we load that component it will have updated value.
- Context api is fine for small to medium apps, redux is external library to manage state data, redux comes with other powerful feautes too

# React Redux & redux toolkit
- Redux is used as it enables handling state of moderate to high application & easier debugging
- Redux toolkit is standard way of writing redux logic
- 3 problems solved by redux toolkit
    - Configuring store is too much complicated
    - Lot of dependent libraries need to be used to make redux
    - Too much boilerplate code
- Architecture of redux toolkit
    - A store is divided into multiple logical slices
    - In our app, when we click add to cart, it dispatches an action which calls a reducer function which modifies the slice of redux store
    - To read data from store, we use a selector which shows updated data from store in UI(also known as subscribing to store). Make sure to subscribe to small portion of store(if you subscribe to whole store anything changed in store, our app will re renddr due to subscription), only update UI if corresponding slice got changed
    - Store is a combination of multiple reducers, each slice is a combination of multiple reducers actions

# Other points related to redux toolkit
- In older redux, we don't use to mutate stae, earlier we used to create duplicate of state and return updated copied state
- But in redux toolkit, we have to mutate state, and no need to return. Redux takes care of it. Behnid the scenes redux is copying the old state, update the state and return the updated state using Immer library(takes the stae current generate diff and return the diff of states)
- If we use, state = [], it clears local state variable not the original state variable
- RTK says either mutate state or return a new state
    - clear state
        - state.item.length = 0 (mutate the existing original state)
        - or return {items: []} (this new state will replace inside original state)
- For more information, Read RTK query & explore

# useMemo, useCallback & useRef
- useMemo is a react hook that lets you cache the result of a calculated between re-renders
- useCallback is a react hook that lets you cache the function between re-renders
- useRef - if you want to hold value/persist between re-renders