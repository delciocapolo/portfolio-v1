
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2986, hash: '807fa65bfdb63698a6eeddc8a69c64f33cfcf76109eed6805793b533b94b87cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '535b3cf85d2d541b489e9da53020c57c33a52e93a339d592fabc422a30693162', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OQDFXMHY.css': {size: 3774, hash: 'ujbVCxuxkOo', text: () => import('./assets-chunks/styles-OQDFXMHY_css.mjs').then(m => m.default)}
  },
};
