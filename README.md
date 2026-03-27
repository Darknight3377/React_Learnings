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