import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-pastel_on_dark';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

const INIT_CONTENT = '';
const THEME = 'ace/theme/pastel_on_dark';
const LANG = 'ace/mode/typescript';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;
  private editorBeautify;

  @Input() content: string;

  constructor() {}

  ngOnInit(): void {
    this.editorBeautify = ace.require('ace/ext/beautify');
    ace.require('ace/ext/language_tools');
  }

  ngAfterViewInit(): void {
    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions = this.getEditorOptions();

    this.codeEditor = ace.edit(element, editorOptions);
    this.codeEditor.setTheme(THEME);
    this.codeEditor.getSession().setMode(LANG);
    this.codeEditor.setShowFoldWidgets(true);
  }

  private getEditorOptions(): Partial<ace.Ace.EditorOptions> & {
    enableBasicAutocompletion?: boolean;
  } {
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 14,
      maxLines: Infinity,
    };

    const extraEditorOptions = {
      enableBasicAutocompletion: true,
    };
    const margedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
    return margedOptions;
  }

  public beautifyContent(): void {
    if (this.codeEditor && this.editorBeautify) {
      const session = this.codeEditor.getSession();
      this.editorBeautify.beautify(session);
    }
  }

  public getCode(): void {
    const code = this.codeEditor.getValue();
    console.log(code);
  }

  public getContent(): string {
    if (this.codeEditor) {
      const code = this.codeEditor.getValue();
      return code;
    }
  }

  public setContent(content: string): void {
    if (this.codeEditor) {
      this.codeEditor.setValue(content);
    }
  }

  public OnContentChange(
    callback: (content: string, delta: ace.Ace.Delta) => void
  ): void {
    this.codeEditor.on('change', (delta) => {
      const content = this.codeEditor.getValue();
      callback(content, delta);
    });
  }
}
