'use strict';

import postcss from 'postcss';
import convert from './lib/convert';
import valueParser, {unit} from 'postcss-value-parser';

let optimise = decl => {
    if (~decl.prop.indexOf('flex')) {
        return;
    }

    let parsed = valueParser(decl.value);

    let transform = node => {
        if (node.type === 'word') {
            let number = unit(node.value);
            if (number) {
                let num = parseFloat(number.number);
                let u = number.unit.toLowerCase();
                if (num === 0) {
                    let value = (u === 'ms' || u === 's') ? 0 + u : 0;
                    node.value = value;
                    return;
                }
                node.value = convert(num, u);
            }
            return;
        }
        if (node.type === 'function' && node.value === 'calc') {
            return node.nodes.forEach(transform);
        }
    };

    parsed.nodes.forEach(transform);
    decl.value = parsed.toString();
};

export default postcss.plugin('postcss-convert-values', () => {
    return css => {
        css.walkDecls(optimise);
    };
});