import type { Code, InlineCode } from 'myst-spec';
import type { NodeRenderer } from '@myst-theme/providers';
import { useTheme } from '@myst-theme/providers';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import light from 'react-syntax-highlighter/dist/cjs/styles/hljs/xcode';
import dark from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015';
import classNames from 'classnames';
import { CopyIcon } from './components/CopyIcon';

type Props = {
  value: string;
  lang?: string;
  executable?: boolean;
  showCopy?: boolean;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  emphasizeLines?: number[];
  filename?: string;
  border?: boolean;
  className?: string;
};

function normalizeLanguage(lang?: string): string | undefined {
  switch (lang) {
    case 'html':
      return 'xml';
    default:
      return lang;
  }
}

export function CodeBlock(props: Props) {
  const { isLight } = useTheme();
  const {
    value,
    lang,
    executable,
    emphasizeLines,
    showLineNumbers,
    className,
    showCopy = true,
    startingLineNumber = 1,
    filename,
    border,
  } = props;
  const highlightLines = new Set(emphasizeLines);
  const borderClass =
    'rounded shadow-md dark:shadow-2xl dark:shadow-neutral-900 my-4 text-sm border border-l-4 border-l-blue-400 border-gray-200 dark:border-l-blue-400 dark:border-gray-800';
  return (
    <div
      className={classNames('relative group not-prose overflow-auto', className, {
        [borderClass]: border,
      })}
    >
      {filename && <div className="leading-3 mt-1 p-1">{filename}</div>}
      <SyntaxHighlighter
        language={normalizeLanguage(lang)}
        startingLineNumber={startingLineNumber}
        showLineNumbers={showLineNumbers}
        style={isLight ? light : dark}
        wrapLines
        lineNumberContainerStyle={{
          // This stops page content shifts
          display: 'inline-block',
          float: 'left',
          minWidth: '1.25em',
          paddingRight: '1em',
          textAlign: 'right',
          userSelect: 'none',
          borderLeft: '4px solid transparent',
        }}
        lineProps={(line) => {
          if (typeof line === 'boolean') return {};
          return highlightLines.has(line)
            ? ({
                'data-line-number': `${line}`,
                'data-highlight': 'true',
              } as any)
            : ({ 'data-line-number': `${line}` } as any);
        }}
        customStyle={{ padding: '0.8rem' }}
      >
        {value}
      </SyntaxHighlighter>
      {showCopy && (
        <div className="absolute hidden top-1 right-1 group-hover:block">
          <CopyIcon text={value} />
        </div>
      )}
    </div>
  );
}

const code: NodeRenderer<Code & { executable: boolean }> = (node) => {
  return (
    <CodeBlock
      key={node.key}
      // data-cell-id={node.executable ? parentId : undefined}
      data-mdast-node-type={node.type}
      data-mdast-node-id={node.key}
      value={node.value || ''}
      lang={node.lang}
      executable={node.executable}
      emphasizeLines={node.emphasizeLines}
      showLineNumbers={node.showLineNumbers}
      startingLineNumber={node.startingLineNumber}
      border
    />
  );
};

function isColor(maybeColorHash: string): string | undefined {
  if (!maybeColorHash || maybeColorHash.length > 9) return undefined;
  if (!new Set([4, 7, 9]).has(maybeColorHash.length)) return undefined;
  const match = /^#([0-9A-Fa-f]{3,8})$/.exec(maybeColorHash);
  if (!match) return undefined;
  const color = match[1];
  return color;
}

const inlineCode: NodeRenderer<InlineCode> = (node, children) => {
  if (isColor(node.value)) {
    return (
      <code
        key={node.key}
        className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100 px-1 rounded"
      >
        {children}
        <span
          style={{ backgroundColor: node.value }}
          className="inline-block w-[10px] h-[10px] rounded-full ml-1"
        ></span>
      </code>
    );
  }
  return <code key={node.key}>{children}</code>;
};

const CODE_RENDERERS = {
  code,
  inlineCode,
};

export default CODE_RENDERERS;
