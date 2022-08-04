import * as ContextMenu from '@radix-ui/react-context-menu';

export function ExperimentalContextMenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-red-600">Welcome multiverse 👋</span>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="bg-white overflow-hidden p-3 rounded-lg w-52 shadow-xl">
          <ContextMenu.Label hidden>context menu label</ContextMenu.Label>
          <ContextMenu.Item className="flex outline-none relative text-black rounded-sm items-center pr-1 pl-2 h-6 leading-none disabled:text-gray-400">
            Back <kbd className="block text-right ml-auto">{`⌘+[`}</kbd>
          </ContextMenu.Item>

          <ContextMenu.Separator className="h-0.5 bg-slate-800 my-1" />

          <ContextMenu.Item
            className="flex outline-none relative text-black rounded-sm items-center pr-1 pl-2 h-6 leading-none [data-disable]:text-gray-400"
            disabled
          >
            Forward <kbd className="block text-right ml-auto">{`⌘+]`}</kbd>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
