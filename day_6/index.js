// const div = document.getElementById("root");
// const h1 = document.createElement("hi");
// h1.innerText = "Welcome to the FSD class!!!"
// div.appendChild(h1);

// const root = ReactDOM.createRoot(document.getElementById("root"))
// const h1 = React.createElement("h1",{},
//     React.createElement("div",{},
//         React.createElement("span",{},"1")
//     )
// );
// root.render(div);

const root = ReactDOM.createRoot(document.getElementById("root"));
const div = React.createElement(
    "div",
    {},
    React.createElement("span", {}, "Content-01"),
    React.createElement(
        "div",
        {},
        React.createElement("span", {}, "Content-02")
    )
);
root.render(div);
