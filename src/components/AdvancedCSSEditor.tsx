import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { autocompletion } from '@codemirror/autocomplete';
import { oneDark } from '@codemirror/theme-one-dark';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function AdvancedCSSEditor({ value, onChange }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 shadow-soft dark:border-slate-700">
      <div className="border-b border-slate-800 px-4 py-3 text-sm font-semibold text-slate-200">
        CSS avançado com injeção no final do tema <span className="ml-2 text-xs text-slate-400">(debounce de 250ms)</span>
      </div>
      <CodeMirror
        value={value}
        height="320px"
        theme={oneDark}
        extensions={[css(), autocompletion()]}
        basicSetup={{ lineNumbers: true, autocompletion: true, foldGutter: true }}
        onChange={onChange}
      />
    </div>
  );
}
