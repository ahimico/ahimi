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
        <ContextMenu.Content className="w-52 overflow-hidden rounded-lg bg-white p-3 shadow-xl">
          <ContextMenu.Label hidden>context menu label</ContextMenu.Label>
          <ContextMenu.Item className="relative flex h-6 items-center rounded-sm pr-1 pl-2 leading-none text-black outline-none disabled:text-gray-400">
            Back <kbd className="ml-auto block text-right">{`⌘+[`}</kbd>
          </ContextMenu.Item>

          <ContextMenu.Separator className="my-1 h-0.5 bg-slate-800" />

          <ContextMenu.Item
            disabled
            className="[data-disable]:text-gray-400 relative flex h-6 items-center rounded-sm pr-1 pl-2 leading-none text-black outline-none"
          >
            Forward <kbd className="ml-auto block text-right">{`⌘+]`}</kbd>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
