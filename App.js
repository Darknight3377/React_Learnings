
const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"}, 
    [React.createElement("h1", {}, "I am a h1 tag"),React.createElement("h1", {}, "I am a h2 tag") ]
    )
)

const heading = React.createElement("h1", {"id": "heading"}, "Hello world from react!");

console.log(heading); // It is just an object 

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent); // puts the object and create h1 tag to render in ui
        //  Replace anything present in id root not appended