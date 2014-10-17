ace.define('ace/theme/atom_dark',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function(editor, theme, module){
    var dom = editor('../lib/dom');

    theme.isDark = true;
    theme.cssClass = 'ace-atom-dark';
    dom.importCssString(theme.cssText,theme.cssClass);
});
