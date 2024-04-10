import PythonIcon from '~icons/vscode-icons/file-type-python';
import NodeIcon from '~icons/vscode-icons/file-type-node2';
import TypescriptIcon from '~icons/vscode-icons/file-type-typescript-official';
import VueIcon from '~icons/vscode-icons/file-type-vue';
import NestjsIcon from '~icons/vscode-icons/file-type-nestjs';
import PgsqlIcon from '~icons/vscode-icons/file-type-pgsql';
import HtmlIcon from '~icons/vscode-icons/file-type-html';
import CssIcon from '~icons/vscode-icons/file-type-css';
import TailwindIcon from '~icons/vscode-icons/file-type-tailwind';
import WordIcon from '~icons/vscode-icons/file-type-word';
import ExcelIcon from '~icons/vscode-icons/file-type-excel';
import PowerPointIcon from '~icons/vscode-icons/file-type-powerpoint';
import VscodeIcon from '~icons/vscode-icons/file-type-vscode';
import OutlookIcon from '~icons/vscode-icons/file-type-outlook';
import CplusplusIcon from '~icons/vscode-icons/file-type-cpp3';
import SwiftIcon from '~icons/vscode-icons/file-type-swift';
import DockerIcon from '~icons/vscode-icons/file-type-docker';
import PHPIcon from '~icons/vscode-icons/file-type-php';
import LaravelIcon from '~icons/simple-icons/laravel';

export default function useIcons() {
  function getIcon(iconName: string) {
    return {
      python: PythonIcon,
      node: NodeIcon,
      typescript: TypescriptIcon,
      vue: VueIcon,
      nestjs: NestjsIcon,
      pgsql: PgsqlIcon,
      html: HtmlIcon,
      css: CssIcon,
      tailwind: TailwindIcon,
      word: WordIcon,
      excel: ExcelIcon,
      powerpoint: PowerPointIcon,
      vscode: VscodeIcon,
      outlook: OutlookIcon,
      cplusplus: CplusplusIcon,
      swift: SwiftIcon,
      docker: DockerIcon,
      php: PHPIcon,
      laravel: LaravelIcon,
    }[iconName];
  }

  return { getIcon };
}
