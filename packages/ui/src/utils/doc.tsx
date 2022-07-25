import { Source } from '@storybook/addon-docs';

interface IImport {
  module: string | Array<string> | Record<string, string>;
  path: 'string'
}

export function Import(props: IImport) {
  let module = '';
  if (typeof props.module === 'string') {
    module = props.module;
  } else if (Array.isArray(props.module)) {
    module = `{ ${props.module.join(', ')} }`;
  } else if (typeof props.module === 'object') {
    module = Object.entries(props.module).map(([key, alias]) => {
      return `${key} as ${alias}`;
    }).join(', ');
    module = `{ ${module} }`;
  }

  return (
    <>\
      <Source code={`import ${module} from '@platform/ui/${props.path}'`} dark/>
    </>
  );
}

