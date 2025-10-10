const customRender = (reactElement, container) => {
   /*
    // Create the element
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // Set the attributes
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    // Inject it into the container
    container.appendChild(domElement);
*/

 //with loop and dynamic attributes
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue
        }
        domElement.setAttribute(prop, reactElement.props[prop]);
    };

    container.appendChild(domElement);
};

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click Me to go to Google'
};

const mainElement = document.getElementById('#root');

// Custom render function customRender(what to inject, where to inject)
customRender(reactElement, mainElement);