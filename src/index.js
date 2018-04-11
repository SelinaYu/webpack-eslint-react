import './style.css';
import './haha.less';
import './scss.scss';
import { cube } from './math.js';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!  ');
}
function component() {
    var element = document.createElement('pre');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = [
        'dsdsfs4444 !',
        '5 cubed is equal to ' + cube(5), 1, 34, 444, 444
    ].join('\n\n');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());
