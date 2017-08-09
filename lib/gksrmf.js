'use babel';

import { CompositeDisposable } from 'atom';
import AtoH from './atoh';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gksrmf:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  toggle() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let words = editor.getSelectedText();
      editor.insertText(AtoH.atoh.convert(words));
    }
  }

};
