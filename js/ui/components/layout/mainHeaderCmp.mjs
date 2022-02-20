import { themeSelectCmp } from './themeSelectCmp.mjs';
import { viewModeSelectCmp } from './viewModeSelectCmp.mjs';

export const mainHeaderCmp = (store) => {
    return {
        tagName: 'header',
        attributes: { className: 'main-header' },
        children: [
            {
                tagName: 'p',
                children: ['Mortal Kombat Mobile - Items']
            },
            themeSelectCmp(store),
            viewModeSelectCmp(store),
        ]
    };
};
