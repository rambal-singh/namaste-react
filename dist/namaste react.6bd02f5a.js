/**
 * <div id="parent">
 *      <div id="child">
 *        <h1>i'm h1 tag </h1>
 *        <h2>i'm h1 tag </h2>
 *      <div>
 *  <div id="child2">
 *        <h1>i'm h1 tag </h1>
 *        <h2>i'm h1 tag </h2>
 *      <div>
 * <div>
 * 
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
    ])
]);
console.log(parent);
// const heading = React.createElement("h2",{id:"heading"},"Hello world from React")
// console.log(heading);//printing a object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent) // this render method is basically converting the OBJECT into h1 tag and put it in the DOM.
;

//# sourceMappingURL=namaste react.6bd02f5a.js.map
