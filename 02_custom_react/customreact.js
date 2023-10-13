

function customRender(reactElement,rootid){
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children,
    domEle.setAttribute('href',reactElement.props.href),
    domEle.setAttribute('target',reactElement.props.target)
    rootid.appendChild(domEle)
}
const reactElement = {
    type:'a',
    props:{
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const rootid = document.querySelector("#root")

customRender(reactElement,rootid)