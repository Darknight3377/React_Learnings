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