const root = ReactDOM.createRoot(
    document.getElementById("root")
);
const ChildComponent = ()=>{
    return (<div><h1>Hello</h1></div>)
}
const ParentComponent = ()=>{
    return (<div>
        <ChildComponent/>
    </div>)
}
root.render(<ParentComponent/>)
