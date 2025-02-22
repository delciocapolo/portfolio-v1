
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-v1/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2999, hash: '78d0c95292b7190ad6c8ccf7dc04a7e5a36e4cbcb28e2ad54be51197f32b16c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: 'b0ba3394912361c0236ee32147d05e50887ceb055192c17b97d0cd05d8f3dff6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OQDFXMHY.css': {size: 3774, hash: 'ujbVCxuxkOo', text: () => import('./assets-chunks/styles-OQDFXMHY_css.mjs').then(m => m.default)}
  },
};
